import mongoose,{ Schema, model, models} from "mongoose";


const CardSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    codes: {
        type: [String],
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
    prices: {
        type: [Number],
        required: [true, 'price is required..'], 
    },
    price: {
        type: Number,
        required: [true, 'price is required..'], 
    },
    status: {
        type: String,
        default: "Pendding"
    },
    ended_at: {
        type: Date,
        default: () => new Date(+new Date() + 7*24*60*60*1000)
    }
    },{
    timestamps: true
});

const Card = models.Card || model("Card", CardSchema);

export default Card;