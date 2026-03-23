import { BsCheck2Circle, BsStars } from "react-icons/bs";

const addedOrganization = [
    { name: 'Nisha Singh', phone: '9878878786', email: 'nisha@vmstechs.com', status: 'new' },
    { name: 'Nisha Singh', phone: '9878878786', email: 'nisha@vmstechs.com', status: 'contacted' },
    { name: 'Nisha Singh', phone: '9878878786', email: 'nisha@vmstechs.com', status: 'new' },
    { name: 'Nisha Singh', phone: '9878878786', email: 'nisha@vmstechs.com', status: 'new' },
]


const TableFive = () => {
    return (
        <div className="rounded-lg border border-stroke border-tablebg bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="mb-6 flex items-center justify-between">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    Recent Request
                </h4>
                <div className="bg-transparent py-1 px-3 py-2 border border-solid border-[#DEE1E6] rounded-lg text-sm font-medium outline-none">View All</div>
            </div>

            <div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-tablebg dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Contact Info
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        {addedOrganization.map((ele, item) => (
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td className="px-6 py-4"><h3 className="font-bold text-black text-nowrap">{ele.name}</h3></td>
                            <td className="px-6 py-4 flex flex-col">{ele.phone} {ele.email}</td>
                            <td className="px-6 py-4"><button className={`flex items-center m-auto text-white gap-1 py-1 px-4 rounded-full font-semibold ${ele.status==="new"?"bg-blue-600":"bg-green-700"}`}> {ele.status==="new"?<BsStars/>:<BsCheck2Circle />
 } {ele.status}</button> </td>
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

export default TableFive;
