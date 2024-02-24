import {
  Box,
  Button,
  Drawer,
  Grid,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useContext, useEffect } from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import style from './style.js';
import './vendor.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import ReorderIcon from '@mui/icons-material/Reorder';
import BadgeIcon from '@mui/icons-material/Badge';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AuthContext from '../../../../context/auth/authContext.js';

import listing from '../../../../assets/listing.png';
import ordersCompleted from '../../../../assets/ordersCompleted.png';
import pending from '../../../../assets/pending.png';
import { VendorDashboardSideBar } from '../../../common';

// import Inventory from '../Inventory.jsx';
// import Orders from '../Orders.jsx';
// import Products from '../Products.jsx';
// import Profile from '../Profile.jsx';

const VendorHomeDefault = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, isLoading, user, getUser } = authContext;
  const isWideScreen = useMediaQuery('(min-width:1200px)');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  useEffect(() => {
    getUser();
  }, []);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const orderData = [
    ['ID', 'Product Name', 'Delivery City', 'Customer Name', 'Price'],
    [1, 'Nike Air Max', 'New York', 'John Doe', '$100'],
    [2, 'Jordan 1', 'London', 'Liam Livingstone', '$150'],
    [3, 'Puma Super', 'Tokyo', 'David Smith', '$85'],
    [4, 'Jordan2', 'Paris', 'Colin Munro', '$90'],
    [5, 'Jordan2', 'Paris', 'Colin Munro', '$90'],
  ];
  return (
    <VendorDashboardSideBar>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h4"
          style={{ color: '#8833fd', padding: '20px', fontWeight: 700 }}
        >
          Hello {user?.name}
        </Typography>
      </Box>
      <div className="boxes">
        <div className="orders dataBox">
          <img src={ordersCompleted} alt="completed orders" />
          <h3>Completed orders</h3>
          <h1>170</h1>
        </div>
        <div className="items dataBox">
          <img src={listing} alt="listing" />
          <h3>Items listed</h3>
          <h1>123</h1>
        </div>
        <div className="pending dataBox">
          <img src={pending} alt="pending" />
          <h3>Orders pending</h3>
          <h1>27</h1>
        </div>
      </div>

      <Typography
        variant="h4"
        style={{ color: '#8833fd', padding: '20px', fontWeight: 700 }}
      >
        Recent Orders
      </Typography>
      {/* item lisitng table */}
      <Grid className="orderData">
        <table
          style={{
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
          }}
        >
          <thead>
            <tr>
              {orderData[0].map((column) => (
                <th
                  key={column}
                  style={{
                    backgroundColor: '#31046b',
                    color: 'white',
                  }}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orderData.slice(1).map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td
                    key={cell}
                    style={{ textAlign: 'center', padding: '10px 0px' }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Grid>
    </VendorDashboardSideBar>
  );
};

export default VendorHomeDefault;
