const userDemo = require('../models/tracker');

exports.getExp = async (req,res) => {
    try {
        const user = await userDemo.find();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Server caught Error!!!"})
        
    }
};

exports.postExp = async (req,res) => {
    const {title, amount} = req.body;
    try {
        const newUser = new userDemo ({ title, amount }); // ✅ must be object
        await newUser.save(); // ✅ fixed syntax
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error); // ✅ fixed
        res.status(500).json({ error: "Server Error" });
        
    } 
};

exports.deleteExp = async (req,res) => {
    const id = req.params.id;

    const deleted = await userDemo.findByIdAndDelete(id)
    if(!deleted) {
        return res.status(404).json("Title Not Found!")
    }
    res.status(204).json({message:"Title is Deleted Successfully..."})
}

exports.updateExp = async (req,res) => {

    const {title, amount} = req.body;
    const id = req.params.id;
    try {
        const updateExp = await userDemo.findByIdAndUpdate(id,{title,amount},{new:true})
    if(!updateExp) {
        return res.status(404).json("Title is updated!")
    }
    res.status(204).json({message:"Title server is error..."})

    } catch (error) {
        console.error(error);
        res.status(500).json({error:"Internal Server Error"})
        
    }

}
