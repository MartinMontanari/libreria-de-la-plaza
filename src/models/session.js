import { Schema, model } from 'mongoose';

const sessionSchema = new Schema({ 
    userId: {
        type: String,
        unique: true,
        trim: true
    },
    token: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
})

export default model('Session', sessionSchema)