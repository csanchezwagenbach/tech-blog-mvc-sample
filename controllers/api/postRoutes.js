const router = require("express").Router();
const { Post } = require("../../models");

router.post("/", async (req, res) => {
    try {
        const title = req.body.title;
        const content = req.body.content;
        const author_id = req.session.user_id;

        const newPost = await Post.create({
            title,
            content,
            author_id
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err)
    }
});


module.exports = router;