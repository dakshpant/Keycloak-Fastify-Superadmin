import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">

        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

          {/* Header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Main */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-4">
              <Outlet />   {/* 🔥 CRITICAL FIX */}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;