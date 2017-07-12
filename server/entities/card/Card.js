/**
 * Created by admin on 07.07.2017.
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    title:     String,
    text:      String,
    color:     String,
    createdAd: Date
});

CardSchema.methods.findByListId = function(request) {
    return this.model('Card').find({ listId: this.listId }, request);
};

const Card = mongoose.model('Card', CardSchema);

