import React, { useState } from "react";
import { FaRegEye, FaUserCheck } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const ModulCard = [
    {
        id: 1,
        title: 'Attendance',
        companyCount: '12 Companies',
        moduleIcon: <FaUserCheck className="px-3 py-3 w-[50px] h-[50px] bg-[#F69220] text-white rounded-full" />,
        discription: 'Lorem ipsum dolor sit amet, consetetur sandiscing elitr, sed diam nonumy eirmod Lorem ipsum dolor sit amet, consetetur sandiscing elitr, sed diam nonumy eirmod',
        status: 'enabled',
        editicon: <FaRegEye />,
        deleteicon: <MdDeleteOutline />
    },
    {
        id: 2,
        title: 'Payroll',
        companyCount: '12 Companies',
        moduleIcon: <FaUserCheck className="px-3 py-3 w-[50px] h-[50px] bg-[#A5CD39] text-white rounded-full" />,
        discription: 'Lorem ipsum dolor sit amet, consetetur sandiscing elitr, sed diam nonumy eirmod Lorem ipsum dolor sit amet, consetetur sandiscing elitr, sed diam nonumy eirmod',
        status: 'enabled',
        editicon: <FaRegEye />,
        deleteicon: <MdDeleteOutline />
    },
    {
        id: 3,
        title: 'Onboarding',
        companyCount: '12 Companies',
        moduleIcon: <FaUserCheck className="px-3 py-3 w-[50px] h-[50px] bg-[#00A69C] text-white rounded-full" />,
        discription: 'Lorem ipsum dolor sit amet, consetetur sandiscing elitr, sed diam nonumy eirmod Lorem ipsum dolor sit amet, consetetur sandiscing elitr, sed diam nonumy eirmod',
        status: 'enabled',
        editicon: <FaRegEye />,
        deleteicon: <MdDeleteOutline />
    },
    {
        id: 4,
        title: 'Onboarding',
        companyCount: '12 Companies',
        moduleIcon: <FaUserCheck size='1em' className="px-3 py-3 w-[50px] h-[50px] bg-[#F69220] text-white rounded-full" />,
        discription: 'Lorem ipsum dolor sit amet, consetetur sandiscing elitr, sed diam nonumy eirmod Lorem ipsum dolor sit amet, consetetur sandiscing elitr, sed diam nonumy eirmod',
        status: 'enabled',
        editicon: <FaRegEye />,
        deleteicon: <MdDeleteOutline />
    },
]




const ModulesCard: React.FC = () => {

    const [isChecked, setIsChecked] = useState(false)
    
        const handleCheckboxChange = () => {
            setIsChecked(!isChecked)
    
        }; 
    return (
        <>

            {ModulCard.map((ele, item) => {
                return (

                    <div className="rounded-md border-2 border-stroke hover:border-primary bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className=" relative px-4 py-3 border-b border-b-[#CCCCCC] border-solid">
                            <span>{ele.companyCount}</span>
                            <div className="absolute right-[20px] bottom-[-22px]">{ele.moduleIcon}</div>
                        </div>
                        <div className="px-4 py-3">
                            <h2 className="text-xl font-bold text-primary mb-3 dark:text-white">{ele.title}</h2>
                            <p className="mb-3">{ele.discription}</p>
                            <div className="flex items-center justify-between mb-3">
                                <label className='flex cursor-pointer select-none items-center'>
                                    <div className='relative'>
                                        <input
                                            type='checkbox'
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                            className='sr-only'
                                        />
                                        <div 
                                            className={`box block h-8 w-14 rounded-full ${isChecked ? 'bg-primary' : 'bg-[#A3DDCB]'
                                                }`}
                                        ></div>
                                        <div
                                            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${isChecked ? 'translate-x-full' : ''
                                                }`}
                                        ></div>
                                    </div>
                                </label>
                                <div className="flex gap-2 items-center">
                                    <button className="font-medium text-primary bg-[#D9F3EE] dark:text-primary dark:bg-[#D9F3EE] p-1.5 rounded-full dark:text-blue-500 hover:underline">{ele.editicon}</button>
                                    <button className="font-medium text-danger bg-[#FFE3E3] dark:text-danger dark:bg-[#FFE3E3] p-1.5 rounded-full dark:text-blue-500 hover:underline">{ele.deleteicon}</button>
                                </div>
                            </div>
                        </div>
                    </div>

                );
            })
            }
        </>
    )
};

export default ModulesCard
