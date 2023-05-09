import { Schema, model, models} from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required!']
    },
    username: {
        type: String,
        required: [true, 'Username us required!'],
    },
    image: {
        type: String,
    },
    balance: {
        type: Number,
    },
    phone: {
        type: String,
        unique: [true, 'Email already exists'],
    },
    vip: {
        type: Number,
    },
    created_at: {
        type: Date,
        default: () => Date.now() 
    },
    last_update: {
        type: Date,
        default: () => Date.now()        
    }
})

const User = models.User || model("User", UserSchema)

export default User;
