import { CalendarCheck2, LayoutIcon, Settings, User } from 'lucide-react'
import React from 'react'

function SideNav() {

    const menuList=[
        {
            id:1,
            name:'Dashboard',
            icon:LayoutIcon,
            path:'/dashboard'
        },
        {
            id:2,
            name:'Employees',
            icon:User,
            path:'/dashboard/employees'
        },
                {
            id:2,
            name:'Attendance',
            icon:CalendarCheck2,
            path:'/dashboard/attendance'
        },
                {
            id:2,
            name:'Settings',
            icon:Settings,
            path:'/dashboard/settings'
        },
    ]

  return (
    <div className="border shadow-md h-screen">
      {menuList.map((menu,index)=> (
        <h2 className="flex items-center gap-3 text-md p-4 text-slate-500 hover:bg-indigo-400 hover:text-white
        cursor-pointer rounded-lg my-2">
            <menu.icon/>
            {menu.name}
        </h2>
      ))}
    </div>
  )
}

export default SideNav
