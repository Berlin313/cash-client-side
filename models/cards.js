import { Schema, model, models} from "mongoose";


const CardSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    codes: {
        type: String,
        required: [true, 'Codes is required..'],
    },
    cashOut: {
        type: String,
        required: [true, 'Cash Out is required..'],
    },
    note : {
        type: String
    },
    cardtype: {
        type: String,
        required: [true, 'Card type is required..'], 
    },
    price: {
        type: String,
        required: [true, 'price is required..'], 
    },
    created_at: {
        type: Date,
        default: () => new Date.now() 
    },
    ended_at: {
        type: Date,
        default: () => new Date(+new Date() + 7*24*60*60*1000)
    }
});

const Card = models.Card || model("Card", CardSchema);

export default Card;