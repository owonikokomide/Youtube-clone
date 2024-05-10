import React from 'react';
import './SidebarRow.css';



function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sides ${selected && "selected"}`}>
      <Icon className="sidebar__icons" />
      <h2 className="sidebar__title">{title}</h2> 
    </div>
  );
}                        

export default SidebarRow
