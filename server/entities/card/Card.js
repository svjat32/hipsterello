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
    // Is not correct
    const result = this.model('Card').findOne({'listId' : request}, function(err, docs) {});
    console.log(result);
    return result;
};

const Card = mongoose.model('Card', CardSchema);

