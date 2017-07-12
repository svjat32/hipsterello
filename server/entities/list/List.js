/**
 * Created by admin on 07.07.2017.
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    boardId: { type: String },
    title: { type: String },
    // cards: [ String ],
    color: { type: String },
    createdAd: { type: Date }
});

ListSchema.statics.findByBoardId = function(request) {
    return this.model('List').find({ 'boardId' : request });
};

const List = mongoose.model('List', ListSchema);
