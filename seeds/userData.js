const {User} = require('../models');

const userData = [
    {
        "name": "William Tsai",
        "password": "will123"
    },
    {
        "name": "Lebron James",
        "password": "lb123"
    },
    {
        "name": "Lamar Jackson",
        "password": "lamar123"
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;