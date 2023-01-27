const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
    try {
        // Get all posts and join with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username"]
                }
            ]
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render("homepage", {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/login", async (req, res) => {
    try {
        res.render("login");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/dashboard", async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ["password"] },
            include: [
                {
                    model: Post,
                },
            ],
        });

        const user = userData.get({ plain: true });

        res.render("dashboard", { ...user, logged_in: true });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;