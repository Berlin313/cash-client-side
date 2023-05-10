"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import SellForm from "@components/SellForm";

const SellCard = () => {
  const [submitting, setsubmitting] = useState(false);
  const [card, setcard] = useState({
    cards: "",
    price: "",
    cashOut: "",
    type: "",
    cardtype: "",
    note: "",
  });

  const createCard = async (e) => {
    e.preventDefault();
    setsubmitting(true);

    try {
      const response = await fetch('/api/cards/new',
        {
          method: "POST",
          body: JSON.stringify({
            cards: card.cards,
            userId: session?.user.id,
            cashOut: card.cashOut,
            note: card.note,
            cardtype: card.cardtype,
            price: "",
          })
        }
      )

      if(response.ok) {
        Router.push('/');
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
