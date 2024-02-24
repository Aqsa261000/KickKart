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
import style from './styles.js';
import './admin.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import ReorderIcon from '@mui/icons-material/Reorder';
import BadgeIcon from '@mui/icons-material/Badge';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AuthContext from '../../../../context/auth/authContext.js';
import conversion from '../../../../assets/conversion.png';
import income from '../../../../assets/income.png';
import users from '../../../../assets/users.png';
import {
  AdminDashboardSideBar,
  VendorDashboardSideBar,
} from '../../../common/index.js';

const AdminHomeDefault = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, isLoading, user, getUser, logoutHandler } =
    authContext;
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
    ['ID', 'Name', 'City', 'CNIC', 'Category'],
    [1, 'John Doe', 'New York', 6237329393, 'Sneakers'],
    [2, 'Chris Jordan', 'London', 927493474, 'Joggers'],
    [3, 'Sam dom', 'Tokyo', 32948393, 'Sports'],
    [4, 'Sarim Ali', 'Paris', 7293082, 'Loffers'],
    [5, 'Jabbar Khattak', 'Paris', 829109383, 'jordans'],
  ];
  return (
    <AdminDashboardSideBar>
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
          <img src={users} alt="users" />
          <h3>Users</h3>
          <h1>26K</h1>
        </div>
        <div className="items dataBox">
          <img src={income} alt="income" />
          <h3>Income</h3>
          <h1>$120</h1>
        </div>
        <div className="pending dataBox">
          <img src={conversion} alt="conversion" />
          <h3>Conversion Rate</h3>
          <h1>27%</h1>
        </div>
      </div>

      <Typography
        variant="h4"
        style={{ color: '#8833fd', padding: '20px', fontWeight: 700 }}
      >
        Recently Added Vendors
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
    </AdminDashboardSideBar>
  );
};

export default AdminHomeDefault;
