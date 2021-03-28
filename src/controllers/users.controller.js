const usersCtrl = {}

const User = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    const user = await User.find();
    res.json(user);
}

usersCtrl.createUser = async (req, res) => {
    const username = req.body.username;
    const newUser = new User({
        username
    })
    await newUser.save();
    res.json({"username":username})
}

usersCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.send(user)
    
}

usersCtrl.deleteUser = async (req, res) => {
    await User.findOneAndDelete(req.params.id);
    res.json({"message": "Username Deteled"})
}

usersCtrl.updateUser = async (req, res) => {
    await User.findByIdAndUpdate({_id:req.params.id},{
        $set:req.body
    })
    res.json({"message":"User updated"})
}

module.exports = usersCtrl;