import Link from 'next/link';

const SellForm = ({
       type,
       card,
       setCard,
       submitting,
       handleSubmit
}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>
         {type} Card
        </span> 
      </h1>
      <p>
       {type} all your cards for the best price on the market, Fast Secure all in one.
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Card/s Code
          </span>
          <textarea
            value={card.cards}
            onChange={(e) => setCard({...card,
            cards: e.target.value })}
            placeholder='Insert your card/s Codes right here...!'
            required
            className='form_textarea' 
          />
        </label>
      </form>
    </section>
  )
}

export default SellForm
