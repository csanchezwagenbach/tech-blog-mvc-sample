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

router.put("/title", async (req, res) => {
    try {
        const post_id = req.body.post_id;
        const title = req.body.newTitle;

        const updatedPostTitle = await Post.update({ title: title }, {
            where: {
                id: post_id
            }
        });

        res.status(200).json(updatedPostTitle)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put("/content", async (req, res) => {
    try {
        const post_id = req.body.post_id;
        const content = req.body.newContent;

        const updatedPostContent = await Post.update({ content: content }, {
            where: {
                id: post_id
            }
        });

        res.status(200).json(updatedPostContent)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.delete("/", async (req, res) => {
    try {
        const post_id = req.body.post_id;

        const deletedPost = await Post.destroy({
            where: {
                id: post_id
            }
        })

        res.status(200).json(deletedPost);
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;