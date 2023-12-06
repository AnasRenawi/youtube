import React from 'react'
import './SidebarRow.css'
import { useNavigate } from 'react-router-dom';

function SidebarRow({ selected, Icon, title, path}) {

  const navigate = useNavigate()

  const handleRoute = () => {
    navigate(path)
  }
  return (
    <div className={`sidebarRow ${selected && 'selected'}`} onClick={handleRoute}>
        <Icon className='sidebarRow_icon' />
        <h2 className='sidebarRow_title'>{title}</h2>
    </div>  
  );
}

export default SidebarRow