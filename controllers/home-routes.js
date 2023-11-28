const router = require('express').Router();
const {User, Post, Comment} = require('../models');

// Route to render homepage
router.get("/", async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [{ model: User, attributes: ["name"] }],
      });
      const posts = postData.map((post) => post.get({ plain: true }));
      // Render homepage template with posts and login status
      res.render("homepage", {
        posts,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }

  res.render('login');
});

module.exports = router;