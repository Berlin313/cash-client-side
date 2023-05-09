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
  });

  const createCard = async (e) => {

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
