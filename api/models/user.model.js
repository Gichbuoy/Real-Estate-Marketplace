import mongoose from 'mongoose';

    const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            default: "https://i.redd.it/0s865ngkc4t81.jpg",
        },
    },
    { timestamps: true }

);

const User = mongoose.model('User', userSchema);

export default User;