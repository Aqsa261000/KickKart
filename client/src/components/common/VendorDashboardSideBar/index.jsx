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
import './styles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import ReorderIcon from '@mui/icons-material/Reorder';
import BadgeIcon from '@mui/icons-material/Badge';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AuthContext from '../../../context/auth/authContext.js';

const VendorDashboardSideBar = (props) => {
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
  return (
    <Grid container>
      {isWideScreen ? (
        <Grid
          item
          xl={3}
          lg={3}
          style={{
            height: '100vh',

            backgroundColor: '#8a33fd',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ margin: '0 auto', width: '80%' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                columnGap: '5px',
                margin: '20px 20px',
              }}
            >
              <LocalMallIcon sx={style.buttonIcons} />
              <Link to={'/vendorhome'} style={{ textDecoration: 'none' }}>
                <h1 style={{ color: 'white' }}>KickKart</h1>
              </Link>
            </Box>
            <Box style={{ textDecoration: 'none' }}>
              <h4
                style={{
                  color: 'white',
                  textAlign: 'center',
                  marginBottom: '40px',
                  fontWeight: '700',
                }}
              >
                Vendor Dashboard
              </h4>
            </Box>
            <Box component={'ul'} style={style.navItems}>
              <Box component={'li'} sx={style.listItems}>
                <Link to={'/vendorprofile'} className="linkItems">
                  <AccountCircleIcon /> My Profile
                </Link>
              </Box>
              <Box component={'li'} sx={style.listItems}>
                <Link to={'/vendorproducts'} className="linkItems">
                  <CategoryIcon /> Products
                </Link>
              </Box>
              <Box component={'li'} sx={style.listItems}>
                <Link to={'/vendororders'} className="linkItems">
                  <ReorderIcon /> Orders
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={{ margin: '30px auto', width: '70%' }}>
            <Button sx={style.button} onClick={logoutHandler}>
              <ExitToAppIcon /> Logout
            </Button>
          </Box>
        </Grid>
      ) : (
        <>
          <Button onClick={handleDrawerOpen}>
            <MenuIcon sx={style.menuButton} />
          </Button>
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
            <Grid
              item
              xl={3}
              lg={3}
              style={{
                height: '100vh',

                backgroundColor: '#8a33fd',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ margin: '0 auto', width: '80%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',

                    columnGap: '5px',
                    margin: '20px 20px',
                  }}
                >
                  <LocalMallIcon sx={style.buttonIcons} />
                  <Link to={'/vendorhome'} style={{ textDecoration: 'none' }}>
                <h1 style={{ color: 'white' }}>KickKart</h1>
              </Link>
                </Box>
                <Box style={{ textDecoration: 'none' }}>
              <h4
                style={{
                  color: 'white',
                  textAlign: 'center',
                  marginBottom: '40px',
                  fontWeight: '700',
                }}
              >
                Vendor Dashboard
              </h4>
            </Box>
                <Box component={'ul'} style={style.navItems}>
                  <Box component={'li'} sx={style.listItems}>
                    <Link to={'/vendorprofile'} className="linkItems">
                      <AccountCircleIcon /> My Profile
                    </Link>
                  </Box>
                  <Box component={'li'} sx={style.listItems}>
                    <Link to={'/vendorproducts'} className="linkItems">
                      <CategoryIcon /> Products
                    </Link>
                  </Box>
                  <Box component={'li'} sx={style.listItems}>
                    <Link to={'/vendororders'} className="linkItems">
                      <ReorderIcon /> Orders
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ margin: '30px auto', width: '70%' }}>
                <Button sx={style.button} onClick={logoutHandler}>
                  <ExitToAppIcon /> Logout
                </Button>
              </Box>
            </Grid>
          </Drawer>
        </>
      )}

      <Grid item xl={9} lg={9}>
        <Box>{props.children}</Box>
      </Grid>
    </Grid>
  );
};

export default VendorDashboardSideBar;
