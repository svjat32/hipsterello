/**
 * Created by admin on 07.07.2017.
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    userId: { type: String },
    title: { type: String },
    lists: { type: String },
    color: { type: String },
    createdAd: {type: Date}
});

BoardSchema.methods.findByUserId = function(request) {
    return this.model('Board').find({ userId: this.userId }, request);
};

const Board = mongoose.model('Board', BoardSchema);

