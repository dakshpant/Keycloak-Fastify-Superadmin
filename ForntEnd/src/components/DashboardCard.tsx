import React from 'react';
import { FiUsers } from 'react-icons/fi';


const DashboardCard: React.FC = () => {
  return (
    <>
<div className='flex justify-center items-center bg-white shadow-xs rounded-sm relative overflow-hidden'>
    <div className='icon-area w-[40%] h-full'><div className='icon-section w-full flex items-center justify-center relative h-full'><FiUsers size="2em"/></div></div>
    <div className='grow border-b-10 border-solid ml-[-10px] h-full p-[10px]'>
        <h3 className='text-sm leading-[1.4em] text-black'>Title</h3>
        <p className='text-2xl font-bold text-primary'>Count</p>
    </div>
</div>
</>
 );
};

export default DashboardCard;