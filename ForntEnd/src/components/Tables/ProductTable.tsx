import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";
import { MdArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { RiExpandUpDownFill } from "react-icons/ri";


const productList = [
    { product: 'Attendance', accessStatus: 'Active', actionStatus: 'Mark as Inactive', planLinked: 'Starter', license: '55/100', activationDate: '12 May, 2025', expiryDate: '12 May, 2025' },
    { product: 'Attendance', accessStatus: 'Inactive', actionStatus: 'Mark as Active', planLinked: 'Starter', license: '55/100', activationDate: '12 May, 2025', expiryDate: '12 May, 2025' },
    { product: 'Attendance', accessStatus: 'Active', actionStatus: 'Mark as Inactive', planLinked: 'Starter', license: '55/100', activationDate: '12 May, 2025', expiryDate: '12 May, 2025' },
]

const addOnList = [
    { addonname: 'Payroll', addOnaccessstatus: 'Inactive', addOnactionStatus: 'Mark as Active', addOnplanLinked: 'Starter', addOnLicense: '65/100', addOnactivationdate: '12 May, 2025', addOnexpirydate: '12 May, 2025' },
    { addonname: 'Payroll', addOnaccessstatus: 'Active', addOnactionStatus: 'Mark as Active', addOnplanLinked: 'Starter', addOnLicense: '65/100', addOnactivationdate: '12 May, 2025', addOnexpirydate: '12 May, 2025' },
]

const ProductTable = () => {

    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

    const toggleDropdown = (index) => {
        if (openDropdownIndex === index) {
            setOpenDropdownIndex(null);
        } else {
            setOpenDropdownIndex(index);
        }
    };

    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    const handleSort = (key) => {
        setSortConfig((prev) => ({
            key,
            direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
        }));
    };

    const filteredUsers = productList.filter((products) =>
        products.product.toLowerCase() ||
        products.accessStatus.toLowerCase() ||
        products.actionStatus.toLowerCase() ||
        products.planLinked.toLowerCase() ||
        products.license.toLowerCase() ||
        products.activationDate.toLowerCase() ||
        products.expiryDate.toLowerCase()
    );

    const sortedUsers = [...filteredUsers].sort((a, b) => {
        if (!sortConfig.key) return 0;

        const valueA = a[sortConfig.key].toLowerCase();
        const valueB = b[sortConfig.key].toLowerCase();

        if (sortConfig.direction === "asc") {
            return valueA > valueB ? 1 : -1;
        } else {
            return valueA < valueB ? 1 : -1;
        }
    });


    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-tablebg dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 cursor-pointer text-nowrap" onClick={() => handleSort('product')}>
                                <div className='flex items-center justify-center'>
                                    Products  {sortConfig.key === "product" ? (sortConfig.direction === "asc" ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />) : <RiExpandUpDownFill />}
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 cursor-pointer text-nowrap" onClick={() => handleSort('accessStatus')}>
                                <div className='flex items-center justify-center'>
                                    Access Status {sortConfig.key === "accessStatus" ? (sortConfig.direction === "asc" ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />) : <RiExpandUpDownFill />}
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 cursor-pointer text-nowrap" onClick={() => handleSort('actionStatus')}>
                                <div className='flex items-center justify-center'>
                                    Action Status {sortConfig.key === "actionStatus" ? (sortConfig.direction === "asc" ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />) : <RiExpandUpDownFill />}
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 cursor-pointer text-nowrap" onClick={() => handleSort('planLinked')}>
                                <div className='flex items-center justify-center'>
                                    Plan Linked {sortConfig.key === "planLinked" ? (sortConfig.direction === "asc" ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />) : <RiExpandUpDownFill />}
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 cursor-pointer text-nowrap" onClick={() => handleSort('license')}>
                                <div className='flex items-center justify-center'>
                                    License {sortConfig.key === "license" ? (sortConfig.direction === "asc" ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />) : <RiExpandUpDownFill />}
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 cursor-pointer text-nowrap" onClick={() => handleSort('activationDate')}>
                                <div className='flex items-center justify-center'>
                                    Activation Date {sortConfig.key === "activationDate" ? (sortConfig.direction === "asc" ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />) : <RiExpandUpDownFill />}
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 cursor-pointer text-nowrap" onClick={() => handleSort('expiryDate')}>
                                <div className='flex items-center justify-center'>
                                    Expiry Date {sortConfig.key === "expiryDate" ? (sortConfig.direction === "asc" ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />) : <RiExpandUpDownFill />}
                                </div>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    {sortedUsers
                        .map((ele, index) => (
                            <tbody>
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" onClick={() => toggleDropdown(index)}>
                                    <td className="px-6 py-4 flex items-start flex-col">
                                        <p className="text-nowrap text-center text-primary font-bold">{ele.product}</p>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button type="button" className={`flex items-center m-auto text-white gap-1 py-1 px-4 rounded-full font-semibold ${ele.accessStatus === "Active" ? "bg-green-700" : "bg-gray-400"}`}>{ele.accessStatus === "Active" ? <FaCheckCircle /> : <FaMinusCircle />
                                        }{ele.accessStatus}</button>
                                    </th>
                                    <td className="px-6 py-4">
                                        <button className="m-auto w-full border border-[#000] font-bold text-customtext text-nowrap py-1 px-2 rounded-lg">{ele.actionStatus}</button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-center">{ele.planLinked}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-center">{ele.license}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-center">{ele.activationDate}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-center">{ele.expiryDate}</p>
                                    </td>
                                    <td>
                                        {openDropdownIndex === index ? (
                                            <BsChevronUp className="ml-2 h-4 w-4 transition-transform duration-300" />
                                        ) : (
                                            <BsChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                                        )}
                                    </td>
                                </tr>
                                {openDropdownIndex === index && (
                                    <>
                                        {addOnList.map((ele, i) => (
                                            <tr key={i} className="bg-[#DEE1E6] rounded-sm">
                                                <td className="px-6 py-4 flex items-start flex-col">
                                                    <p className="text-nowrap text-center">{ele.addonname}</p>
                                                </td>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <button type="button" className={`flex gap-1 py-1 px-4 items-center m-auto font-semibold ${ele.addOnaccessstatus === "Active" ? "text-success" : "text-gray-400"}`}>{ele.addOnaccessstatus === "Active" ? <FaCheckCircle /> : <FaMinusCircle />
                                                    } {ele.addOnaccessstatus}</button>
                                                </th>
                                                <td className="px-6 py-4">
                                                    <button className="m-auto w-full border border-[#000] text-nowrap py-1 px-2 rounded-lg">{ele.addOnactionStatus}</button>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <p className="text-center">{ele.addOnplanLinked}</p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <p className="text-center">{ele.addOnLicense}</p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <p className="text-center">{ele.addOnactivationdate}</p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <p className="text-center">{ele.addOnexpirydate}</p>
                                                </td>
                                                <td className="px-6 py-4">
                                                </td>
                                            </tr>
                                        ))}
                                    </>
                                )}
                            </tbody>
                        ))}
                </table>
            </div>
        </>
    )
}

export default ProductTable;