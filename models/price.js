import { Schema, model, models} from 'mongoose';

const PriceSchema = new Schema({
    name: {
        type: String,
        unique: [true, 'name already exists'],
        required: [true, 'Name is required!']
    },
    price: {
        type: Number,
        required: [true, 'price us required!'],
    },
})

const Price = models.User || model("Price", PriceSchema)

export default Price;