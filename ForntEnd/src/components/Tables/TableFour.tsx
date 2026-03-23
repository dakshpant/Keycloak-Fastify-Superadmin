const addedOrganization = [
    { companyId: '#123', name: 'Google', username: 'Nisha Singh', position: 'Software Developer', phone: '9878878786', email: 'nisha@vmstechs.com', date: '20 may 2025' },
    { companyId: '#234', name: 'Twiter', username: 'Nisha Singh', position: 'Software Developer', phone: '9878878786', email: 'nisha@vmstechs.com', date: '20 may 2025' },
    { companyId: '#453', name: 'Google', username: 'Nisha Singh', position: 'Software Developer', phone: '9878878786', email: 'nisha@vmstechs.com', date: '20 may 2025' },
    { companyId: '#234', name: 'Google', username: 'Nisha Singh', position: 'Software Developer', phone: '9878878786', email: 'nisha@vmstechs.com', date: '20 may 2025' },
]


const TableFour = () => {
    return (
        <div className="rounded-lg border border-stroke border-tablebg bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="mb-6 flex items-center justify-between">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    Recently Added Organization
                </h4>
                <div className="bg-transparent py-1 px-3 py-2 border border-solid border-[#DEE1E6] rounded-lg text-sm font-medium outline-none">View All</div>
            </div>
            
            <div>
            <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-tablebg dark:bg-gray-700 dark:text-gray-400">
                            <tr className="text-nowrap">
                                <th scope="col" className="px-2 py-3">
                                    Organization info
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Contact Person
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Contact Person info
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Registered Date
                                </th>
                            </tr>
                        </thead>
                        {addedOrganization.map((ele, item) => (
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-2 py-4 flex items-start flex-col">
                                <h3 className="font-bold text-black text-nowrap">{ele.name}</h3>
                                <p className="text-nowrap">{ele.companyId}</p>
                            </td>
                            <td className="px-2 py-4">
                                <h3 className="font-bold text-black text-nowrap">{ele.username}</h3>
                                <p className="text-nowrap">{ele.position}</p>
                            </td>
                            <td className="px-2 py-4">
                                <p>{ele.phone}</p>
                                <p>{ele.email}</p>
                            </td>
                            <td className="px-2 py-4">{ele.date}</td>
                        </tr>
                    </tbody>
                ))}
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableFour;
