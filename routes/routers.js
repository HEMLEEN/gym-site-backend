const express = require("express");
const router = express.Router();
const {
    getUsers,
    createUser,
    updateUser,
    deleteUsers
} = require('../controllers/controllers');
router.route("/").get(getUsers).post(createUser);
router.route("/:id").put(updateUser).delete(deleteUsers);
module.exports = router;