/**
 * Created by admin on 07.07.2017.
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    title:     String,
    cards:     String,
    color:     String,
    cardsId:   [Schema.Types.ObjectId],
    createdAd: Date
});

ListSchema.methods.findByBoardId = function(request) {
    return this.model('List').find({ boardId: this.boardId }, request);
};

const List = mongoose.model('List', ListSchema);

