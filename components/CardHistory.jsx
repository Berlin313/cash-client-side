



const CardHistory = () => {
    return(
        <>
           
        <section className='w-full '>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>
                    Card History
                </span>
            </h1>

            <div className="overflow-auto ronded-lg hidden md:block">
                <table className="w-full mt-10">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                        <th className="w-20 p-3 text-sm font-semibold teacking-wide text-left">ID</th>
                        <th className="p-3 text-sm font-semibold teacking-wide text-left">Cods</th>
                        <th className="w-24 p-3 text-sm font-semibold teacking-wide text-left">Status</th>
                        <th className="w-32 p-3 text-sm font-semibold teacking-wide text-left">Price</th>
                        <th className="w-20 p-3 text-sm font-semibold teacking-wide text-left">Date</th>
                        <th className="w-20 p-3 text-sm font-semibold teacking-wide text-left">End</th>
                        <th className="w-20 p-3 text-sm font-semibold teacking-wide text-left">Cash</th>
                        <th className="w-20 p-3 text-sm font-semibold teacking-wide text-left">Note</th>
                        <th className="w-20 p-3 text-sm font-semibold teacking-wide text-left">Edit Note</th>

                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 ">
                    <tr className="bg-gray-200">
                        <td>
                            <p>10001</p>
                        </td>
                        <td className="p-3 text-sm text-gray700">XXXX-XXXXXX-XXXX | 50</td>
                        <td className="p-3 text-sm text-gray700">
                            {/* custom it Doctor  for card status  */}
                            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-400">
                                Pendding
                            </span>
                        </td>
                        <td className="p-3 text-sm text-gray700 whitespace-nowrape">400000 SP</td>
                        <td className="p-3 text-sm text-gray700">2023/5/17 20:11:05</td>
                        <td className="p-3 text-sm text-gray700">2023/5/24 20:11:05</td>
                        <td className="p-3 text-sm text-gray700">Cash wallet</td>
                        <td></td>
                        <td> 
                                <button
                             className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                                 Note
                                </button> 
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>


            <h1 className='head_text text-left'>
                <span className='blue_gradient hidden md:block'>
                    Orders History
                </span>
            </h1>

            <div className="overflow-auto ronded-lg hidden md:block">
                <table className="w-full mt-10">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                        <th className="w-20 p-3 text-sm font-semibold teacking-wide text-left">ID</th>
                        <th className="p-3 text-sm font-semibold teacking-wide text-left">ORder</th>
                        <th className="w-24 p-3 text-sm font-semibold teacking-wide text-left">Status</th>
                        <th className="w-32 p-3 text-sm font-semibold teacking-wide text-left">Price</th>
                        <th className="w-20 p-3 text-sm font-semibold teacking-wide text-left">Date</th>
                        <th className="w-20 p-3 text-sm font-semibold teacking-wide text-left">End</th>
                        <th className="w-20 p-3 text-sm font-semibold teacking-wide text-left">Note</th>
                        <th className="w-20 p-3 text-sm font-semibold teacking-wide text-left">Edit Note</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 ">
                    <tr className="bg-gray-200">
                        <td>
                            <p>10001</p>
                        </td>
                        <td className="p-3 text-sm text-gray700">XXXX-XXXXXX-XXXX | 50</td>
                        <td className="p-3 text-sm text-gray700">
                            {/* custom it Doctor  for card status  */}
                            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-400">
                                Pendding
                            </span>
                        </td>
                        <td className="p-3 text-sm text-gray700 whitespace-nowrape">400000 SP</td>
                        <td className="p-3 text-sm text-gray700">2023/5/17 20:11:05</td>
                        <td className="p-3 text-sm text-gray700">2023/5/24 20:11:05</td>
                        <td></td>
                        <td> 
                                <button
                             className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                                 Note
                                </button> 
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            {/*  mobile  */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
                <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                    <div className="flex items-center space-x-2 text-sm">
                        <div className="text-blue-500 forn-bold hover:underline">ID: 1001</div>
                        <div className="text-gray-500 ">2023/5/17</div>
                        <div className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-400">Pendding</div>
                    </div>
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                        <div className="text-sm text-gray-700">CODE: XXXX-XXXXXX-ASFW</div>
                        <div className="text-sm font-medium text-black">PRICE: 400000 SP</div>
                    </div>
                    <div className="text-sm text-gray-700">order date: 2023/5/24</div>
                    <div className="text-sm text-gray-700" >Withdrawl: Syriatel Cash</div>
                    <div className="text-sm text-gray-700" >Note: </div>
                    <div>
                        <button
                        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                            Note
                        </button> 
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-left md:hidden '>
                    <span className=' head_text blue_gradient '>
                        Orders History
                    </span>
                </h1>
            </div>
            
            <div className="grid grid-cols-1 gap-4 md:hidden">
                <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                    <div className="flex items-center space-x-2 text-sm">
                        <div className="text-blue-500 forn-bold hover:underline">ID: 1001</div>
                        <div className="text-gray-500 ">2023/5/17</div>
                        <div className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-400">Pendding</div>
                    </div>
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                        <div className="text-sm text-gray-700">CODE: XXXX-XXXXXX-ASFW</div>
                        <div className="text-sm font-medium text-black">PRICE: 400000 SP</div>
                    </div>
                    <div className="text-sm text-gray-700">order date: 2023/5/24</div>
                    <div className="text-sm text-gray-700" >Withdrawl: Syriatel Cash</div>
                    <div className="text-sm text-gray-700" >Note: </div>
                    <div>
                        <button
                        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                            Note
                        </button> 
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}


export default CardHistory