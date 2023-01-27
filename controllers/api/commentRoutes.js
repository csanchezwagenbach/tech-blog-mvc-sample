const router = require("express").Router();
const { Comment } = require("../../models");

router.post("/", async (req, res) => {
    try {
        const author_id = req.session.user_id;
        const content = req.body.content;
        const post_id = req.body.post_id;
        const newComment = await Comment.create({
            content,
            author_id,
            post_id
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;
