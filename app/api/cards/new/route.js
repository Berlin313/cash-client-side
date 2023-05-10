import { connectToDB } from "@utils/database";
import Card from "@models/cards";

export const POST = async (req) => {
    const {
        userId,
        cards,
        cashOut,
        note,
        cardtype,
        price
    } = await req.json();

    try {
        await connectToDB();
        const newCard = new Card({
            creator: userId,
            codes: cards,
            cashOut: cashOut.value,
            note: note,
            cardtype: cardtype.value,
            price: "0"
        })
        await newCard.save();

        return new Response(JSON.stringify(newCard), {
            status: 201
        })
    } catch (error) {
        return new Response("Faild to create new order:"+error, {
            status: 500
        })
    }

}