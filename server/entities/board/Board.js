/**
 * Created by admin on 07.07.2017.
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    userId:    String,
    title:     String,
    lists:     String,
    color:     String,
    listsId:   [Schema.Types.ObjectId],
    createdAd: Date
});

BoardSchema.statics.findByUserId = function(request) {
    return this.model('Board').find({ 'userId': request });
};

const Board = mongoose.model('Board', BoardSchema);

