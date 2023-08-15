import { Schema, model } from 'mongoose';

const articleSchema = new Schema({ 
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
})

export default model('Article', articleSchema)