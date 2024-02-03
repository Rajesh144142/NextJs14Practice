import mongoose from "mongoose";
const userSchema = new mongoose.model({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        min: 6,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        min: 6,
    },
    img: {
        type: String
    }, isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
const postSchema = new mongoose.model({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String
    }, userId: {
        type: String,
        required: true,
    }, userId: {
        type: String,
        required: true,
        unique: true
    }
},
    { timestamps: true }
);
export const User = mongoose.model.User || mongoose.model("User", userSchema);
export const Post = mongoose.model.Post || mongoose.model("User", postSchema);
