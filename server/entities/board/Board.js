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

BoardSchema.statics.findByUserId = function(request) {
    // Is not correct
    const result = this.model('Board').findOne({'userId' : request}, function(err, docs) {});
    console.log(result);
    return result;
};

const Board = mongoose.model('Board', BoardSchema);

