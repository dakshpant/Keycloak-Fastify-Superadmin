import React from 'react';
import { FiUserCheck, FiUserPlus, FiUsers, } from "react-icons/fi";
import { RiBuildingLine, RiUserStarLine } from 'react-icons/ri';
import { MdAccessTime, MdCreditCard } from 'react-icons/md';
import ChartFour from '../components/Charts/ChartFour';
import ChartFive from '../components/Charts/ChartFive';
import TableFour from '../components/Tables/TableFour';
import TableFive from '../components/Tables/TableFive';

const infoCard = [
  {id: '0', Name: "Total Users(All organizations overall users)", Count: '600', icon: <FiUsers size="16px" className='text-primary'/>},
  {id: '1', Name: "Active Users ( Active within the last 30 days)", Count: '500', icon: <FiUserCheck  size="16px" className='text-primary'/>},
  {id: '2', Name: "Total Organization (Org. using the HRMS system)", Count: '100', icon: <RiBuildingLine size="16px" className='text-primary'/>},
  {id: '3', Name: "Total Subscription (Number of active plans)", Count: '80', icon: <MdCreditCard size="16px" className='text-primary'/>},
  {id: '4', Name: "Pending Payments (Total due amount)", Count: '$12345', icon: <MdCreditCard size="16px" className='text-primary'/>},
  {id: '5', Name: "Subscription expiring soon", Count: '10', icon: <MdAccessTime size="16px" className='text-primary'/>},
  {id: '6', Name: "New Customers (Last 30 days)", Count: '10', icon: <FiUserPlus size="16px" className='text-primary'/>},
  {id: '7', Name: "Retained Customers (Org. renewing subscriptions)", Count: '80', icon: <RiUserStarLine size="16px" className='text-primary'/>},
  ];

const Dashboard: React.FC = () => {
  return (
    <>
      {/* <Breadcrumb pageName="Dashboard"/> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {infoCard.map((ele, item) => {
        return(
        
            <div className='dashcardbox flex justify-center items-center bg-white shadow-xs rounded-sm relative overflow-hidden dark:border-strokedark dark:bg-boxdark'>
                <div className='icon-area w-[100%] sm:w-[100%] md:w-[90%] lg:w-[80%] xl:w-[80%] h-full dark:text-white'><div className='icon-section w-full flex items-center justify-center relative h-full'>{ele.icon}</div></div>
                <div className='text-section grow ml-[-10px] h-full p-[10px] dark:text-white'>
                    <h3 className='text-sm leading-[1.4em] text-black text-right dark:text-white'>{ele.Name}</h3>
                    <p className='text-2xl font-bold text-primary text-right dark:text-white'>{ele.Count}</p>
                </div>
            </div>
        
        );
      })
      }
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:mt-6 2xl:mt-7.5">
      <ChartFour />
      </div>
      <div className="mt-4 grid grid-cols-1 md:mt-6 2xl:mt-7.5">
      <ChartFive />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <div className="col-span-12 xl:col-span-7">
          <TableFour />
        </div>
        <div className="col-span-12 xl:col-span-5"><TableFive /></div>
        {/* <ChartOne />
        
        <ChartTwo />
        
        <ChartThree />
        <MapOne /> */}
        
        
      </div>
    </>
  );
};

export default Dashboard;
