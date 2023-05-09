import React from 'react'

const BoxServices = () => {
  return (
    <div className='text-center py-10 '>
        <h5 className='orange_gradient'>Services</h5>
        <h1 className='text-4xl w-96 mx-auto leading-normal font-bold
        mb-12'>
            <strong>
                Check our best services
            </strong>
        </h1>

        <div className='flex max-w-5xl mx-auto gap-8 group'>
            <div className='bg-amber-50 cursor-pointer group-hover:blur-sm hover:!blur-none p-8 rounded-x1 mix-blend-luminosity'>
                <h2 font-bold>Cards</h2>
                <h4 className='uppercase text-x1 font-bold'>
                    Sell all gift-cards in the<br/>Best Price
                </h4>
                <p className='text-sm leading-7 my-3 font-light opacity-50'>
                    bla bla bla bla bla bla bla lba lbla balb snal ejjap molan msaw xzcvq
                </p>
                <button className='black_btn mx-auto'>
                    sell now
                </button>
            </div>
            <div className='bg-amber-50 cursor-pointer group-hover:blur-sm hover:!blur-none p-8 rounded-x1 mix-blend-luminosity'>
                <h2 font-bold>Proxy</h2>
                <h4 className='uppercase text-x1 font-bold'>
                    Buy fast and clean proxies<br/>for any target you want
                </h4>
                <p className='text-sm leading-7 my-3 font-light opacity-50'>
                    bla bla bla bla bla bla bla lba lbla balb snal ejjap molan msaw xzcvq
                </p>
                <button className='black_btn mx-auto'>
                    buy now
                </button>
            </div>
            <div className='bg-amber-50 cursor-pointer group-hover:blur-sm hover:!blur-none p-8 rounded-x1 mix-blend-luminosity'>
                <h2 font-bold>Activation</h2>
                <h4 className='uppercase text-x1 font-bold'>
                    activate any service you want with sms or phone call<br/>short time rent or fast
                </h4>
                <p className='text-sm leading-7 my-3 font-light opacity-50'>
                    bla bla bla bla bla bla bla lba lbla balb snal ejjap molan msaw xzcvq
                </p>
                <button className='black_btn mx-auto'>
                    rent now
                </button>
            </div>
        </div>

        
        
    </div>
  )
}

export default BoxServices