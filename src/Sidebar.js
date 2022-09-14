import React from 'react'
import {FaFire, FaPoo} from 'react-icons/fa'
import {BsFillLightningFill, BsPlus} from 'react-icons/bs'


function Sidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 p-0 flex flex-col bg-gray-900 text-white shadow'>
        <SidebarIcon icon={ <FaFire size="28" />} />
        <SidebarIcon icon={ <BsPlus size="32" />} />
        <SidebarIcon icon={ <BsFillLightningFill size="20" />} />
        <SidebarIcon icon={ <FaPoo size="20" />} />
    </div>
  )
}

const SidebarIcon = ({ icon, text = "Tooltip 💡" }) => {
    return (
        <div className='sidebar-icon group'>
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    )
}

export default Sidebar