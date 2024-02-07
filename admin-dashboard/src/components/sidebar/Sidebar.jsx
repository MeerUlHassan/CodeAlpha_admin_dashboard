import React from "react";
import "../sidebar/sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <spaan className="logo">MesTech</spaan>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icons' />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PeopleAltOutlinedIcon className='icons' />
            <span>Users</span>
          </li>
          <li>
            <CategoryOutlinedIcon className='icons' />
            <span>Products</span>
          </li>
          <li>
            <ListAltIcon className='icons' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className='icons' />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <StackedLineChartIcon className='icons' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className='icons' />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyIcon className='icons' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyAltOutlinedIcon className='icons' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icons' />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <SupervisedUserCircleOutlinedIcon className='icons' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icons' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;
