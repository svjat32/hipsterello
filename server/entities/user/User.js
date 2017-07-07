/**
 * Created by admin on 06.07.2017.
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, unique: true },
    password: { type: String },
});

UserSchema.methods.findByEmail = function(request) {
    return this.model('User').findOne({ email: this.email }, request);
};

const User = mongoose.model('User', UserSchema);
