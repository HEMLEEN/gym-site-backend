const asyncHandler = require("express-async-handler");
const Users = require("../models//user.model");
const { eventTemplate } = require("../helpers/emailhelpers");


// ******>Read<*****

const getUsers = asyncHandler(async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const getUser = await Users.find();
    res.status(200).json({ message: "user list ", getUser });
});


// ******>Create<*****
const createUser = asyncHandler(async (req, res) => {
    const newUser = new Users(req.body);
  
    try {
      const savedUser = await newUser.save();
      
      if (newUser) {
        await eventTemplate(savedUser);
        res.status(200).json({ message: "User created", savedUser });
      }else{
        console.log('errrr');
      }
  
     
    } catch (err) {
        console.log('errrr', err);
      res.status(500).json(err);
    }
  });
  


// *******>UPDATE<*****
const updateUser = asyncHandler(async (req, res) => {
    const user = await Users.findById(req.params.id);


    if (!user) {
        res.status(404);
        throw new Error("Goal not found");
    }
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json({ message: "item was Updated", updatedUser });
});




// *******>DELETE<****
// @desc DELETE


const deleteUsers = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deleteUser = await Users.findByIdAndDelete(id);


    res.status(200).json({ message: 'item was deleted', deleteUser })
})


module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUsers
};
