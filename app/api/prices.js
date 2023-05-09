import { connectToDB } from '@utils/database';
import Price from '@models/price';

export default function handler(req, res) {

    try {
        await connectToDB()
        const prices = await Price.find({}).toArray();
        res.json({ status:200, data: prices });
    }catch (e) {
        console.error(e);
        throw new Error(e).message;
        res.json({status:405, data: "wrong"})
    }

    
}