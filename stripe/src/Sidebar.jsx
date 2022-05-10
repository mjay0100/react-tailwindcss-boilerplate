import React from "react";
import { useGlobal } from "./Content";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobal();
  return (
    <div>
      <aside
        className={`${
          isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
        }`}
      >
        <div className="sidebar">
          <button className="close-btn" onClick={closeSidebar}>
            X
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
