/**
 * Created by admin on 07.07.2017.
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    userId: { type: String },
    title: { type: String },
    // lists: [ String ],
    color: { type: String },
    createdAd: { type: Date }
});

BoardSchema.statics.findByUserId = function(request) {
    return this.model('Board').find({ 'userId': request });
};

const Board = mongoose.model('Board', BoardSchema);
