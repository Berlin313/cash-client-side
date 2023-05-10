



const CardHistory = () => {
    return(
        <>
        
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>
                    Card History
                </span>
            </h1>

            <table className="w-full">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Cods
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            End
                        </th>
                        <th>
                            cash
                        </th>
                    </tr>
                </thead>
            </table>
        </section>
        
        </>
    )
}


export default CardHistory