const express = require("express");
const { UserModel, validUser } = require("../models/userModel")
const router = express.Router();


// למשוך את כל המשתנים מהדאטה בייס
router.get("/", async (req, res) => {
    res.send(await UserModel.find({}));

    // let data = await UserModel.find({});
    // res.json(data);
})

// למצוא יוזר אחד ספציפי
router.get("/one", async (req, res) => {
    let data = await UserModel.find({ _id: "650010be0c31ed67e2f6163c" });
    res.json(data);
})


// למצוא יוזר לפי ID
router.get("/:id", async (req, res) => {
    res.send(await UserModel.findOne({ _id: req.params.id }))

    // לפי מאנקיס
    // let data = await UserModel.find({ _id: req.params.id })
    // res.json(data);
})


//  להעלות משתנה (יוזר) חדש לדאטה בייס בפוסט לפי מאנקיס
// router.post("/", async (req, res) => {
//     let validBody = validUser(req.body);
//     if (validBody.error) {
//         return res.status(400).json(validBody.error.details);
//     }
//     let user = new UserModel(req.body);
//     await user.save();
//     res.json(user);
// })

// להעלות יוזר חדש לפי אלישיב - אותו דבר
router.post("/", async (req, res) => {
    // ולידציה לפני
    let validBody = validUser(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    const user = new UserModel(req.body);
    const newUser = await user.save();

    res.send(newUser);
})

//  עדכון פרטים משתמש קיים (לא בדקתי אם עובד) 
router.put("/:id", async (req, res) => {
    const { firstName, lastName, email, phone } = req.body;
    const user = await UserModel.findOne({ _id: req.params.id });

    if (!user) {
        return res.status(403).send("המשתמש לא קיים");
    }

    // בדיקת וליצדיה
    // let validBody = validUser(req.body);
    // if (validBody.error) {
    //     return res.status(400).json(validBody.error.details);
    // }
    user.firstName = firstName;
    user.lastName = lastName;
    user.phone = phone;
    user.email = email;

    await user.save();
    res.send(user);
})

// מחיקת משתמש אחד לפי ID
router.delete("/:id", async (req, res) => {
    await User.deleteOne({ _id: req.params.id });
    res.send();
})

module.exports = router;