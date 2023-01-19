const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Define User as having many Posts
User.hasMany(Post, {
    foreignKey: "author_id",
    onDelete: "CASCADE"
});

// Define User as having many Comments
User.hasMany(Comment, {
    foreignKey: "author_id",
    onDelete: "CASCADE"
});

// Define Post as belonging to one User
Post.belongsTo(User, {
    foreignKey: "author_id"
});

// Define Post as having many Comments
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
});

// Define Comment as belonging to one Post
Comment.belongsTo(Post, {
    foreignKey: "post_id"
});

// Define Comment as belonging to one User
Comment.belongsTo(User, {
    foreignKey: "author_id"
});

module.exports = { User, Post, Comment };