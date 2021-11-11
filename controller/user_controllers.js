//module import
const { validationResult } = require("express-validator");
const user = require("../model/user_model");

//path - api/user/login
//type - post 
//requirements - password, email
signIn = async (req, res) => {
    //input validation checking
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const { email, password } = req.body;
        try {
            const result = await user.findOne({ email });
            if (result) {
                if (result.password === password)
                    res.status(202).json({ message: "User Successfully Logged In", user: result });
                else {
                    res.status(401).json({ message: "Incorrect Password" });
                }
            }
            else {
                res.status(401).json({ message: "User not found" });
            }
        } catch (err) {
            res.status(500).json({ message: "An internal error has occurred", error: err });
        }
    }
    else {
        res.status(401).json({ message: "Invalid Credentials" });
    }
}


//path - api/user/signUp
//type - post 
//requirements - name, password, email
signUp = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(401).json({ message: "Invalid Credentials" });
    }
    const { name, email, password } = req.body;
    const result = await user.findOne({ email });
    //checking if user already register or not.
    if (result) {
        return res.status(409).json({ message: "User Already Exists" });
    }

    //creating new user in data base
    const newUser = new user(
        {
            email,
            name,
            password
        }
    );
    //exception catching for handing connection error to DataBase
    try {
        await newUser.save();
    } catch (err) {
        res.status(500).json({ message: "An Internal error has occurred", error: err });
    }
    res.status(201).json({ message: "User Signed Up" });
}

//exporting route functions
exports.signUp = signUp;
exports.signIn = signIn;