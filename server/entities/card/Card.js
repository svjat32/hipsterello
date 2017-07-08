/**
 * Created by admin on 07.07.2017.
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    listId: { type: String },
    title: { type: String },
    text: { type: String },
    color: { type: String },
    createdAd: {type: Date}
});

CardSchema.statics.findByListId = function(request) {
    let result = null;
    this.model('Card').find({'listId' : request}, function(err, found) {
        result = found;
    });
    return result;
};

const Card = mongoose.model('Card', CardSchema);
