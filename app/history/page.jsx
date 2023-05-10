"use client";

import CardHistory from "@components/CardHistory";
import CodeCard from "@components/CodeCard";
import { useState, useEffect } from 'react';

const historyCardList = ({data}) => {
    return(
        <div className="mt-16 prompt_layout">
            {data.map((card) => (
                <CodeCard 
                    key={card._id}
                    card={card}
                />
            ))}
        </div>
    )
}

const History = () => {

    const  [searchText, setSearchText] = useState('');
    const [cards, setCards] = useState([]);
    const handleSearchChange = (e) => {

    }

    useEffect(() => {
        const fetchHistory = async () => {
            const response = await fetch("/api/cards");
            const data = await response.json();

            setCards(data);
        }
        fetchHistory()
    }, [])
    return (
        <>
        <section className="feed">
        <form className="relative w-full flex-center">
            <input className="search_input peer"
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            required
            placeholder="Serch for your card/order">
            </input>
        </form>

        <historyCard 
        data = {cards}
        />
        </section>

        <CardHistory />
        </>
    )
}

export default History;