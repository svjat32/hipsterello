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
    createdAd: {type: Date}
});

BoardSchema.statics.findByUserId = function(request) {
    let result = null;
    this.model('Board').find({'userId' : request}, function(err, found) {
        console.log(found);
        result = found;
    });
    return result;
};

const Board = mongoose.model('Board', BoardSchema);
