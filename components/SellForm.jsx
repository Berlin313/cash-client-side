import Link from 'next/link';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaPlaystation, FaSteam, FaAmazon } from 'react-icons/fa';
import { MdCardGiftcard } from 'react-icons/md';
import Select from 'react-select';
import { useState } from 'react';

const SellForm = ({
       type,
       card,
       setcard,
       submitting,
       handleSubmit
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const options = [
    {value: "visa", label: "Visa"},
    {value: "mastercard", label: "Mastercard"},
    {value: "paypal", label: "Paypal"},
    {value: "amazon", label: "Amazon"},
    {value: "steam", label: "Steam"},
    {value: "playstation", label: "Playstation"}
  ]
  const options2 = [
   {value: "cash", label: "Cash wallet"},
   {value: "syriatel", label: "Syriatel cash"},
   {value: "mtn", label: "MTN Cash"},
   {value: "alharam", label: "Alharam"},
   {value: "Bemo", label: "BEMO bank"},
   {value: "albarakh", label: "Albarakh"},
   {value: "delar", label: "Delar"}
  ]

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
        <div>
          <div className="grid grid-cols-6">
            <FaCcVisa  className="text-blue-700"/>
            <FaCcMastercard className='text-yellow-400' />
            <FaCcPaypal className='text-blue-800' />
            <FaPlaystation className='text-blue-600' />
            <FaSteam className='text-blue-900' />
            <FaAmazon className='text-yellow-500' />
          </div>
          <div className="grid grid-cols-2 pt-2">
            <span className="w-32">Card Type</span>
            <span className="w-32">Cash out</span>
          </div>
          <div className="grid grid-cols-2">
            <Select options={options} value={selectedOption} onChange= {
              e => {
                setSelectedOption;
                setcard({...card,cardtype: selectedOption});
              }
            } className="w-32 pt-2 " />
            <Select options={options2} value={selectedOption2}  onChange=
            {e => {
              setSelectedOption2;
              setcard({...card,cashOut: selectedOption2});
            }} className="w-32 pt-2 "  />
          </div>
      </div>  
         <label>
          <span clasosName='font-satoshi font-semibold text-base text-gray-700'>
            Your Card/s Code 
          </span>
         
          <textarea
            rows="3"
            value={card.cards}
            onChange={(e) => setcard({...card,
            cards: e.target.value })}
            placeholder='Insert your card/s Codes right here...!  
            -XXXX-XXXXXX-XXXX/50$'
            required
            className='form_textarea' 
          />
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href="/" className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className="px-5 py-1.5t text-sm 
            bg-primary-orange rounded-full text-white">
              {submitting ? `${type}...`: type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default SellForm
