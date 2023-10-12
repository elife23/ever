import LeftSideBar from '@/components/dashboard/leftSideBar';
import AdminNavBar from '@/components/dashboard/navBar';
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

function DashboardLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-row h-screen w-screen overflow-hidden ">
        <div className='hidden lg:flex w-[20%]'>
          <LeftSideBar />
        </div>
        <div className='h-full w-full lg:[80%]'>
          <AdminNavBar />
          <div className='h-full bg-base-300 w-full overflow-y-auto'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout