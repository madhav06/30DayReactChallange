import React, {useState, useEffect} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom"; 
import './Sidebar.css'
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
   return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      <div className='navbar'>
        <Link to="#" className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return(
                    <li className={item.cName} key={index}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
