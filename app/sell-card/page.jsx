"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import SellForm from "@components/SellForm";

const SellCard = () => {

  const router = useRouter();
  const {data: session } = useSession();
  
  const [submitting, setsubmitting] = useState(false);
  const [card, setcard] = useState({
    cards: [],
    prices: [],
    price: 0,
    cashOut: "",
    type: "",
    cardtype: "",
    note: "",
  });

  const createCard = async (e) => {
    e.preventDefault();
    setsubmitting(true);
    
  
    try {
   
        var i = card.cards
        var codearr = []
        var pricesarr = []
    
        var arr = i.split("/")
        for (let i = 0; i < arr.length; i++) {
            if (i%2==0){
                codearr.push(arr[i])
                }
                else {
                pricesarr.push(parseInt(arr[i]));
                }
        }
         codearr = codearr.filter((str) => str != '');
         const pricesarrsum = pricesarr.reduce(function(a, b){
            return a+b;
        });
        var lastprice = pricesarrsum
      const response = await fetch('/api/cards/new',
        {
          method: "POST",
          body: JSON.stringify({
            cards: codearr,
            prices: pricesarr,
            userId: session?.user.id,
            cashOut: card.cashOut,
            note: card.note,
            cardtype: card.cardtype,
            price: parseInt(lastprice),
          })
        })

      if(response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setsubmitting(false);
    }
  }

  return (
    <SellForm
      type="Sell"
      card={card}
      setcard={setcard}
      submitting={submitting}
      handleSubmit={createCard}
    />
  )
}

export default SellCard
