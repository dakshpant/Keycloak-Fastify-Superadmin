import { MdOutlineFactory, MdOutlineLocationOn } from 'react-icons/md';
import CustomerLogo from '../../images/customerlogo.png';
import { FiUsers } from 'react-icons/fi';
import { FaCheckCircle, FaRegCalendar } from 'react-icons/fa';
import { useState } from 'react';
import BasicInfoTab from './BasicInfoTab';
import ProductTab from './ProductTab';
import PaymentTab from './PaymentTab';
import InvoiceTab from './InvoiceTab';
import SubscriptionTab from './SubscriptionTab';
import BillingInfoTab from './BillingInfoTab';
import NotesTab from './NotesTab';

const CustomerInfoCard = () => {

    const [activeTab, setActiveTab] = useState("basicinfo");
    return (
        <>
            <div className="w-full mt-10 p-4 pb-0 bg-white dark:border-strokedark dark:bg-boxdark rounded-lg shadow-lg border border-stroke border-tablebg">
                <div className="grid grid-cols-2 mb-4">
                    <div className="flex gap-4">
                        <div><img src={CustomerLogo} alt="" /></div>
                        <div>
                            <h1 className='text-2xl font-bold text-customtext mb-3 font-[Roboto] dark:text-white'>HCL TECH</h1>
                            <div className=''>
                                <div className='flex gap-2 items-center text-customtext dark:text-white'>
                                    <MdOutlineFactory />
                                    <p>Technology, Information and Internet</p>
                                </div>
                                <div className='flex gap-2 items-center text-customtext dark:text-white'>
                                    <FiUsers />
                                    <p>10-15 employees</p>
                                </div>
                                <div className='flex gap-2 items-center text-customtext dark:text-white'>
                                    <MdOutlineLocationOn />
                                    <p>address line1, address line 2, Noida, Uttar Pradesh, 123456</p>
                                </div>
                                <div className='flex gap-2 items-center text-customtext dark:text-white'>
                                    <FaRegCalendar />
                                    <p>13 Feb, 2025</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='flex justify-end items-start gap-2'>
                        <button className='bg-success py-2 px-10 text-white font-medium font-[Roboto] rounded-lg'>Active</button>
                        <button className='border border-stroke py-2 px-10 text-customtext font-medium font-[Roboto] rounded-lg dark:text-white'>Mark As Inactive</button>
                    </div>
                </div>

                <div className='border border-[#80A6AF] p-4 rounded-lg mt-5 mb-5'>
                    <div className='flex items-start gap-5'>
                        <div className='text-center'>
                            <p className='mb-2'>Subscription Status</p>
                            <button className='bg-success m-auto py-1 px-4 text-white font-medium font-[Roboto] rounded-full flex items-center justify-center gap-2'><FaCheckCircle /> Active</button>
                        </div>
                        <div className='flex-1'>
                            <div className='flex justify-between gap-4 mb-5'>
                                <div>
                                    <p>Plan Name</p>
                                    <h3 className='text-customtext'>HR Essential</h3>
                                </div>
                                <div>
                                    <p>Employee Limit</p>
                                    <h3 className='text-customtext'>100</h3>
                                </div>
                                <div>
                                    <p>Activation Date</p>
                                    <h3 className='text-customtext'>12 May 2025</h3>
                                </div>
                                <div>
                                    <p>Expiry Date</p>
                                    <h3 className='text-customtext'>12 May 2026</h3>
                                </div>
                                <div>
                                    <p>Next renewal Date</p>
                                    <h3 className='text-customtext'>12 Jun 2026</h3>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <p>Products & Add-ons: </p>
                                <span className='text-xs bg-tablebg py-1 px-2 rounded-full text-customtext'>Attendance</span>
                                <span className='text-xs bg-tablebg py-1 px-2 rounded-full text-customtext'>Payroll Management</span>
                                <span className='text-xs bg-tablebg py-1 px-2 rounded-full text-customtext'>Live Tracking</span>
                                <span className='text-xs bg-tablebg py-1 px-2 rounded-full text-customtext'>Activity Monitoring</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex">
                        <button
                            className={`py-2 px-4 text-sm text-center ${activeTab === "basicinfo" ? "border-b-2 border-primary text-primary font-bold" : "text-black font-medium dark:text-white "}`}
                            onClick={() => setActiveTab("basicinfo")}
                        >
                            Basic Info
                        </button>
                        <button
                            className={`py-2 px-4 text-sm text-center ${activeTab === "products" ? "border-b-2 border-primary text-primary font-bold" : "text-black font-medium dark:text-white "}`}
                            onClick={() => setActiveTab("products")}
                        >
                            Products
                        </button>
                        <button
                            className={`py-2 px-4 text-sm text-center ${activeTab === "payment" ? "border-b-2 border-primary text-primary font-bold" : "text-black font-medium dark:text-white "}`}
                            onClick={() => setActiveTab("payment")}
                        >
                            Payments
                        </button>
                    </div>
                </div>
            </div>


            <div className="">
                {activeTab === "basicinfo" && <div><BasicInfoTab/> </div>}
                {activeTab === "products" && <div><ProductTab /></div>}
                {activeTab === "payment" && <div><PaymentTab /></div>}
            </div>
        </>
    )
}

export default CustomerInfoCard;