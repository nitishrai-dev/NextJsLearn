import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactSchema = new Schema({
    name: String,
    email: String,
    message: String,
    status: {
        type: String,
        default: 'pending',
    }
},{ timestamps: true });


export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);