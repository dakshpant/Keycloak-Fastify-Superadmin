import { useState } from 'react'
import { BsStars } from 'react-icons/bs';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { RiCloseCircleFill, RiExpandUpDownFill } from 'react-icons/ri';
import ContactView from '../Popups/ContactView';
import { MdArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md';

const contactFormList = [
    { RequestId: '#66677', Name: 'Nisha Singh', phone: '9876543210', email: 'nishasingh@company1.com', requestDate: '20 may 2025', message: 'Lorem ipsum dolor sit amet consectetur. Aliquet egestas nulla faucibus', status: 'New', statusText: 'New' },
    { RequestId: '#66677', Name: 'Nisha Singh', phone: '9876543210', email: 'nishasingh@company1.com', requestDate: '20 may 2025', message: 'Lorem ipsum dolor sit amet consectetur. Aliquet egestas nulla faucibus', status: 'Contacted', statusText: 'Contacted' },
    { RequestId: '#66677', Name: 'Nisha Singh', phone: '9876543210', email: 'nishasingh@company1.com', requestDate: '20 may 2025', message: 'Lorem ipsum dolor sit amet consectetur. Aliquet egestas nulla faucibus', status: 'Scheduled', statusText: 'Scheduled for demo' },
    { RequestId: '#66677', Name: 'Nisha Singh', phone: '9876543210', email: 'nishasingh@company1.com', requestDate: '20 may 2025', message: 'Lorem ipsum dolor sit amet consectetur. Aliquet egestas nulla faucibus', status: 'Not_Responded', statusText: 'Not Responded' },
    { RequestId: '#66677', Name: 'Nisha Singh', phone: '9876543210', email: 'nishasingh@company1.com', requestDate: '20 may 2025', message: 'Lorem ipsum dolor sit amet consectetur. Aliquet egestas nulla faucibus', status: 'Closed', statusText: 'Closed' },
    { RequestId: '#66677', Name: 'Nisha Singh', phone: '9876543210', email: 'nishasingh@company1.com', requestDate: '20 may 2025', message: 'Lorem ipsum dolor sit amet consectetur. Aliquet egestas nulla faucibus', status: 'Converted', statusText: 'Converted' },
]

const TableSeven = () => {

    const [editPopup, setEditpopup] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const [searchQuery, setSearchQuery] = useState("");

    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleSort = (key) => {
        setSortConfig((prev) => ({
            key,
            direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
        }));
    };

    const filteredUsers = contactFormList.filter((contactform) =>
        contactform.RequestId.toLowerCase().includes(searchQuery) ||
        contactform.Name.toLowerCase().includes(searchQuery) ||
        contactform.phone.toLowerCase().includes(searchQuery) ||
        contactform.requestDate.toLowerCase().includes(searchQuery) ||
        contactform.message.toLowerCase().includes(searchQuery) ||
        contactform.status.toLowerCase().includes(searchQuery)
    );

    const sortedContactForm = [...filteredUsers].sort((a, b) => {
        if (!sortConfig.key) return 0; // No sorting initially

        const valueA = a[sortConfig.key].toLowerCase();
        const valueB = b[sortConfig.key].toLowerCase();

        if (sortConfig.direction === "asc") {
            return valueA > valueB ? 1 : -1;
        } else {
            return valueA < valueB ? 1 : -1;
        }
    });

    const getStatusClass = (status) => {
        const statusClasses = {
            New: "bg-blue-500",
            Contacted: "bg-green-500",
            Scheduled: "bg-blue-900",
            Not_Responded: "bg-orange-500",
            Closed: "bg-red",
            Converted: "bg-yellow-500",
        };
        return statusClasses[status] || "bg-gray"; // Default class if status not found
    };

    const getStatusIcon = (status) => {
        const setIcon = {
            New: <BsStars />,
            Contacted: <FaCheckCircle />,
            Scheduled: <FaCheckCircle />,
            Not_Responded: <FaInfoCircle />,
            Closed: <RiCloseCircleFill />,
            Converted: <BsStars />,
        }
        return setIcon[status] || <BsStars />;
    };

    const totalPages = Math.ceil(sortedContactForm.length / itemsPerPage);

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };


    return (
        <>
            <div className='mb-4 shadow-md sm:rounded-lg rounded-lg border border-stroke border-tablebg bg-white px-5 py-3 shadow-default dark:border-strokedark dark:bg-boxdark'>
                <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                        Request List
                    </h2>
                    <div className='flex gap-2 items-center'>
                        <div className='flex items-center relative z-20 bg-transparent py-1 pl-3  py-2 border border-solid border-[#DEE1E6] rounded-lg text-sm font-medium outline-none'>
                            <span>Status:</span>
                            <div className="relative z-20 inline-block">
                                <select
                                    name="#"
                                    id="#"
                                    className="relative appearance-none outline-none inline-flex px-2 pr-8"
                                >
                                    <option value="" className='dark:bg-boxdark selected disabled'>All</option>
                                    <option value="" className='dark:bg-boxdark'>Active </option>
                                    <option value="" className='dark:bg-boxdark'>Deactive</option>
                                </select>
                                <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                                    <svg
                                        width="10"
                                        height="6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                                            fill="#637381"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                                            fill="#637381"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center relative z-20 bg-transparent py-1 pl-3  py-2 border border-solid border-[#DEE1E6] rounded-lg text-sm font-medium outline-none'>
                            <span>Date:</span>
                            <input type="date" className='outline-none ml-2' />
                        </div>
                        <button className="bg-transparent py-1 px-3 py-2 border border-solid border-[#DEE1E6] rounded-lg text-sm font-medium outline-none">Export</button>
                    </div>
                </div>
            </div>

            <div className='shadow-md sm:rounded-lg rounded-lg border border-stroke border-tablebg bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark'>
                <div className="mb-4 flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    <div className='flex items-center gap-2'>
                        <p>Show</p>
                        <div className="relative z-20 inline-block">
                            <select
                                value={itemsPerPage}
                                onChange={handleItemsPerPageChange}
                                className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 py-2 border border-solid border-[#DEE1E6] rounded-lg text-sm font-medium outline-none"
                            >
                                <option value="10" className='dark:bg-boxdark'>10</option>
                                <option value="20" className='dark:bg-boxdark'>20</option>
                                <option value="30" className='dark:bg-boxdark'>30</option>
                                <option value="40" className='dark:bg-boxdark'>40</option>
                                <option value="50" className='dark:bg-boxdark'>50</option>
                            </select>
                            <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                                <svg
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                                        fill="#637381"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                                        fill="#637381"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input
                            id="table-search"
                            type="text"
                            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for items"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-tablebg dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 cursor-pointer text-nowrap" onClick={() => handleSort('RequestId')}>
                                    <div className='flex items-center '>Request ID  {sortConfig.key === "RequestId" ? (sortConfig.direction === "asc" ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />) : <RiExpandUpDownFill />}</div>

                                </th>
                                <th scope="col" className="px-6 py-3 cursor-pointer text-nowrap" onClick={() => handleSort('Name')}>
                                    <div className='flex items-center '>Name {sortConfig.key === "Name" ? (sortConfig.direction === "asc" ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />) : <RiExpandUpDownFill />}</div>
                                </th>
                                <th scope="col" className="px-6 py-3 cursor-pointer text-nowrap" onClick={() => handleSort('phone')}>
                                    <div className='flex items-center '>Contact Person info {sortConfig.key === "phone" ? (sortConfig.direction === "asc" ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />) : <RiExpandUpDownFill />}</div>
                                </th>
                                <th scope="col" className="px-6 py-3 cursor-pointer text-nowrap" onClick={() => handleSort('requestDate')}>
                                    <div className='flex items-center '> Registered Date {sortConfig.key === "requestDate" ? (sortConfig.direction === "asc" ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />) : <RiExpandUpDownFill />}</div>
                                </th>
                                <th scope="col" className="px-6 py-3 cursor-pointer text-nowrap" onClick={() => handleSort('message')}>
                                    <div className='flex items-center '> Message {sortConfig.key === "message" ? (sortConfig.direction === "asc" ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />) : <RiExpandUpDownFill />}</div>
                                </th>
                                <th scope="col" className="px-6 py-3 cursor-pointer text-nowrap" onClick={() => handleSort('status')}>
                                    <div className='flex items-center justify-center'> Status {sortConfig.key === "status" ? (sortConfig.direction === "asc" ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />) : <RiExpandUpDownFill />}</div>
                                </th>
                            </tr>
                        </thead>
                        {sortedContactForm.map((ele, index) => (
                            <tbody>
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4 font-normal text-gray-900 dark:text-white">
                                        <p className="text-nowrap text-primary font-bold">{ele.RequestId}</p>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <p>{ele.Name}</p>
                                    </td>
                                    <td className="px-6 py-4 font-normal text-gray-900 dark:text-white">
                                        <p>{ele.phone}</p>
                                        <p>{ele.email}</p>
                                    </td>
                                    <td className="px-6 py-4 font-normal text-gray-900 dark:text-white">
                                        <p>{ele.requestDate}</p>
                                    </td>
                                    <td className="px-6 py-4 font-normal text-gray-900 dark:text-white">
                                        <p className="w-[20em]">{ele.message} <button className='underline text-red-500' onClick={() => { setEditpopup(true) }}>View More</button></p>
                                    </td>
                                    <td className="px-6 py-4 font-normal text-gray-900 dark:text-white">
                                        <button className={`flex items-center m-auto text-white gap-1 py-1 px-4 rounded-full font-semibold ${getStatusClass(ele.status)}`}> {getStatusIcon(ele.status)} {ele.statusText}</button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-gray-600">Page {currentPage} of {totalPages}</p>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
                        >
                            Next
                        </button>
                    </div>
                </div>
                {editPopup && (<ContactView editPopup={editPopup} setEditpopup={setEditpopup} />)}
            </div>
        </>
    )
};

export default TableSeven