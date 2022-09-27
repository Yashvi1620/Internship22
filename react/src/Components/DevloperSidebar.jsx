import React from "react";
import { Link } from "react-router-dom";

const sidebarMenu = [
  {
    id: 1,
    name: "User-Task",
    url: "/developerTask",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-person-video2"
        viewBox="0 0 16 16"
      >
        <path d="M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2ZM1 3a1 1 0 0 1 1-1h2v2H1V3Zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3H5Zm-4-2h3v2H2a1 1 0 0 1-1-1v-1Zm3-1H1V8h3v2Zm0-3H1V5h3v2Z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Users",
    url: "/User",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-person-fill"
        viewBox="0 0 16 16"
      >
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
    ),
  },
];
const DevloperSideBar = () => {
  return (
    <nav id="sidebar" class="sidebar js-sidebar">
      <div class="sidebar-content js-simplebar">
        <a class="sidebar-brand" href="index.html">
          <span class="align-middle">TimeTracking</span>
        </a>
        <div className="my-2 mx-3 text-white">List</div>
        {sidebarMenu.map((menu) => (
          <div className=" hover:bg-red-400">
            <Link
              className="flex mx-3 px-2 py-3 text-white gap-3"
              to={menu.url}
            >
              <div className="mr-2">{menu.icon}</div>
              <div className="">{menu.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default DevloperSideBar;
