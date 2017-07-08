/**
 * Created by admin on 07.07.2017.
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    boardId: { type: String },
    title: { type: String },
    cards: { type: String },
    color: { type: String },
    createdAd: {type: Date}
});

ListSchema.statics.findByBoardId = function(request) {
    // Is not correct
    const result = this.model('List').findOne({'boardId' : request}, function(err, docs) {});
    console.log(result);
    return result;
};

const List = mongoose.model('List', ListSchema);

