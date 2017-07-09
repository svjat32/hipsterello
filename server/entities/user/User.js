/**
 * Created by admin on 06.07.2017.
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, unique: true },
    password: { type: String },
});

UserSchema.statics.findByEmail = function(request) {
    return this.model('User').findOne({  email: 'request' });
};

const User = mongoose.model('User', UserSchema);
