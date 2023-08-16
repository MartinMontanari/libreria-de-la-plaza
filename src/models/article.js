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
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
})

export default model('Article', articleSchema)