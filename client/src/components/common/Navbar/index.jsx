import React, { useContext, useState } from 'react';
import style from './styles.js';
import './styles.css';
import {
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout.js';
import NewArrivalsImage from '../../../assets/shoeposter.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthContext from '../../../context/auth/authContext.js';
import { Dropdown } from 'react-bootstrap';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, logoutHandler } = authContext;
  const isWideScreen = useMediaQuery('(min-width:900px)');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const firstLetter = user?.name ? user?.name.charAt(0).toUpperCase() : '';
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const [isShopHovered, setShopHovered] = useState(false);

  const handleShopHover = () => {
    setShopHovered(true);
  };

  const handleShopLeave = () => {
    // setShopHovered(false);
    if (!isMouseOnBox) {
      setShopHovered(false);
    }
  };

  const handleBoxHover = () => {
    setMouseOnBox(true);
  };

  const handleBoxLeave = () => {
    setMouseOnBox(false);
    // If the mouse leaves the box, close it
    setShopHovered(false);
  };
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const handleProfileHover = () => {
    setIsProfileHovered(true);
  };

  const handleProfileLeave = () => {
    // setShopHovered(false);
    if (!isMouseOnBox) {
      setIsProfileHovered(false);
    }
  };

  const GuestUser = () => {
    return (
      <>
        <Box>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',

              // border: '1px solid black',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                // border: '1px solid black',
                height: '70px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  columnGap: '5px',
                  // border: '1px solid black',
                }}
              >
                <LocalMallIcon sx={style.buttonIcons} />
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={'/'}
                >
                  <h1>KickKart</h1>
                </Link>
              </Box>
              {isWideScreen ? (
                <>
                  <Box component={'ul'} sx={style.navItems} className="ulList">
                    <Box component={'li'} sx={style.listItems}>
                      <Link className="linkStyle">Home</Link>
                    </Box>
                    <Box component={'li'} sx={style.listItems}>
                      <Link className="linkStyle">About Us</Link>
                    </Box>
                    <Box component={'li'} sx={style.listItems}>
                      <Link className="linkStyle">Contact Us</Link>
                    </Box>
                    <Box
                      component={'li'}
                      sx={[style.listItems, style.shopItem]}
                      style={{ padding: '22px 0' }}
                      onMouseEnter={handleShopHover}
                      onMouseLeave={handleShopLeave}
                    >
                      <Link className="linkStyle">Shop</Link>
                    </Box>
                  </Box>
                  <Box sx={style.navButtons}>
                    <Box
                      component={'li'}
                      sx={{ listStyle: 'none', margin: '0 7px' }}
                      className="navButton"
                    >
                      <Button>
                        <ShoppingCartIcon
                          className="buttonIcons"
                          sx={style.buttonIcons}
                        />
                      </Button>
                    </Box>
                    <Box
                      component={'li'}
                      sx={{
                        listStyle: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                      className="navButton"
                    >
                      <Link to="/login">
                        <Button sx={style.button}>Login</Button>
                      </Link>
                      {/* <div class="dropdown">
                    <Button class="dropbtn">
                      <Avatar sx={{ bgcolor: 'orange' }}>A</Avatar>
                      {/* <AccountCircleIcon sx={style.buttonIcons} /> */}
                      {/* </Button>
                    <div class="dropdown-content">
                      <Link to={''}>My Profile</Link>
                      <Link to={''}>My Orders</Link>
                      <Link to={''}>Logout</Link>
                    </div> */}
                      {/* </div> */}
                    </Box>
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button onClick={handleDrawerOpen}>
                      <MenuIcon sx={style.menuButton} />
                    </Button>
                    <Link to="/login">
                      <Button sx={style.button}>Login</Button>
                    </Link>
                    {/* <Button>
                <Avatar sx={style.button}>A</Avatar>
              </Button> */}
                  </Box>
                  <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100vh',
                        width: '200px',
                      }}
                    >
                      <List>
                        <ListItem button>
                          <Link style={style.listItems} className="link">
                            Home
                          </Link>
                        </ListItem>
                        <ListItem button>
                          <Link style={style.listItems} className="link">
                            About Us
                          </Link>
                        </ListItem>
                        <ListItem button>
                          <Link style={style.listItems} className="link">
                            Contact Us
                          </Link>
                        </ListItem>
                        <ListItem button>
                          <Link style={style.listItems} className="link">
                            Shop
                          </Link>

                          {/* {showSubcategories && <SubCategories />} */}
                        </ListItem>
                        <ListItem
                          button
                          sx={{
                            bgcolor: 'grey',
                            display: 'flex',
                            flexDirection: 'column',
                            bgcolor: '#f2f2f2',
                          }}
                        >
                          <Link style={style.listItems} className="link">
                            {/* <ShoppingCartIcon /> */}
                            <h4>Brands</h4>
                          </Link>
                          <Link
                            style={style.listItems}
                            className="link underlinetext"
                          >
                            {/* <ShoppingCartIcon /> */}
                            Adidas
                          </Link>
                          <Link
                            style={style.listItems}
                            className="link underlinetext"
                          >
                            {/* <ShoppingCartIcon /> */}
                            Servis
                          </Link>
                          <Link
                            style={style.listItems}
                            className="link underlinetext"
                          >
                            {/* <ShoppingCartIcon /> */}
                            Bata
                          </Link>
                          <Link style={style.listItems} className="link">
                            {/* <ShoppingCartIcon /> */}
                            <h4>Categories</h4>
                          </Link>
                          <Link
                            style={style.listItems}
                            className="link underlinetext"
                          >
                            {/* <ShoppingCartIcon /> */}
                            Sports
                          </Link>
                          <Link
                            style={style.listItems}
                            className="link underlinetext"
                          >
                            {/* <ShoppingCartIcon /> */}
                            Formals
                          </Link>
                          <Link
                            style={style.listItems}
                            className="link underlinetext"
                          >
                            {/* <ShoppingCartIcon /> */}
                            Casuals
                          </Link>
                        </ListItem>
                        <ListItem button>
                          <Link style={style.listItems} className="link">
                            {/* <ShoppingCartIcon /> */}
                            My Cart
                          </Link>
                        </ListItem>
                        {/* <ListItem button>
                      <Link style={style.listItems} className="link">
                        {/* <ShoppingCartIcon /> */}
                        {/* My Orders
                      </Link>
                    </ListItem>
                    <ListItem button>
                      <Link style={style.listItems} className="link">
                        <ShoppingCartIcon /> */}
                        {/* My Profile
                      </Link> */}
                        {/* </ListItem> */}
                        {/* Add more ListItems for additional navigation items */}
                      </List>
                      {/* <List>
                    <ListItem button>
                      <Link style={style.listItems} className="link">
                        <LogoutIcon />
                        Logout
                      </Link>
                    </ListItem>
                  </List> */}
                    </Box>
                  </Drawer>
                </>
              )}
              {/* <Box sx={style.menuButton}>
          <AccountCircleIcon />
        </Box> */}
            </Box>
          </Container>
          {isShopHovered && (
            <Box
              sx={style.scnavbar}
              onMouseEnter={handleBoxHover}
              onMouseLeave={handleBoxLeave}
            >
              <Grid
                container
                sx={{
                  bgcolor: ' white ',
                  height: '300px',
                  // border: '1px solid black',
                }}
              >
                <Grid
                  item
                  xl={3}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',

                    // border: '1px solid black',
                    margin: 'auto 0',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',

                      flexDirection: 'column',
                    }}
                  >
                    <Link className="linkStyle" style={{ fontWeight: 700 }}>
                      Brands
                    </Link>
                    <Link className="linkStyle underlinetext">Adidas</Link>
                    <Link className="linkStyle underlinetext">Servis</Link>
                    <Link className="linkStyle underlinetext">Bata</Link>
                  </Box>
                </Grid>
                <Grid
                  item
                  xl={3}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100px',
                    // border: '1px solid black',
                    margin: 'auto 0',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',

                      flexDirection: 'column',
                    }}
                  >
                    <Link className="linkStyle" style={{ fontWeight: 700 }}>
                      Categories
                    </Link>
                    <Link className="linkStyle underlinetext">Sports</Link>
                    <Link className="linkStyle underlinetext">Formals</Link>
                    <Link className="linkStyle underlinetext">Casuals</Link>
                  </Box>
                </Grid>
                <Grid
                  item
                  xl={6}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{
                    height: '100%',
                    // border: '1px solid black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 'auto 0',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                    }}
                  >
                    <Box
                      component={'img'}
                      src={NewArrivalsImage}
                      sx={{
                        height: '300px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    ></Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </>
    );
  };
  const LoggedInUser = () => {
    return (
      <>
        <Box>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',

              // border: '1px solid black',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                // border: '1px solid black',
                height: '70px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  columnGap: '5px',
                  // border: '1px solid black',
                }}
              >
                <LocalMallIcon sx={style.buttonIcons} />
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={'/'}
                >
                  <h1>KickKart</h1>
                </Link>
              </Box>
              {isWideScreen ? (
                <>
                  <Box component={'ul'} sx={style.navItems} className="ulList">
                    <Box component={'li'} sx={style.listItems}>
                      <Link className="linkStyle">Home</Link>
                    </Box>
                    <Box component={'li'} sx={style.listItems}>
                      <Link className="linkStyle">About Us</Link>
                    </Box>
                    <Box component={'li'} sx={style.listItems}>
                      <Link className="linkStyle">Contact Us</Link>
                    </Box>
                    <Box
                      component={'li'}
                      sx={[style.listItems, style.shopItem]}
                      style={{ padding: '22px 0' }}
                      onMouseEnter={handleShopHover}
                      onMouseLeave={handleShopLeave}
                    >
                      <Link className="linkStyle">Shop</Link>
                    </Box>
                  </Box>
                  <Box sx={style.navButtons}>
                    <Box
                      component={'li'}
                      sx={{ listStyle: 'none', margin: '0 7px' }}
                      className="navButton"
                    >
                      <Button>
                        <ShoppingCartIcon
                          className="buttonIcons"
                          sx={style.buttonIcons}
                        />
                      </Button>
                    </Box>
                    <Box
                      component={'li'}
                      sx={{
                        listStyle: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                      className="navButton"
                    >
                      {/* <Link to="/login">
                    <Button sx={style.button}>Login</Button>
                  </Link> */}
                      {/* <div class="dropdown">
                        <div class="dropbtn">
                          <Avatar sx={{ bgcolor: 'orange' }}>
                            {firstLetter}
                          </Avatar>
                          {/* <AccountCircleIcon sx={style.buttonIcons} /> */}
                      {/* </div>
                        <div class="dropdown-content">
                          <Link to={''}>My Profile</Link>
                          <Link to={''}>My Orders</Link>
                          <a
                            onClick={logoutHandler}
                            style={{ cursor: 'pointer' }}
                          >
                            Logout
                          </a>
                        </div> */}
                      {/* </div> */}
                      {/* <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown> */}

                      <Avatar sx={{ bgcolor: 'orange' }}>{firstLetter}</Avatar>

                      <Button
                        sx={style.button}
                        onClick={logoutHandler}
                        style={{ marginLeft: '20px' }}
                      >
                        Logout
                      </Button>
                    </Box>
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button onClick={handleDrawerOpen}>
                      <MenuIcon sx={style.menuButton} />
                    </Button>

                    {/* <Link to="/login">
                      <Button sx={style.button}>Login</Button>
                    </Link> */}
                    {/* <Button>
                <Avatar sx={style.button}>A</Avatar>
              </Button> */}
                  </Box>

                  <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100vh',
                        width: '200px',
                      }}
                    >
                      <List onClick={handleDrawerClose}>
                        <ListItem button>
                          <Link style={style.listItems} className="link">
                            Home
                          </Link>
                        </ListItem>
                        <ListItem button>
                          <Link style={style.listItems} className="link">
                            About Us
                          </Link>
                        </ListItem>
                        <ListItem button>
                          <Link style={style.listItems} className="link">
                            Contact Us
                          </Link>
                        </ListItem>
                        <ListItem button>
                          <Link style={style.listItems} className="link">
                            Shop
                          </Link>

                          {/* {showSubcategories && <SubCategories />} */}
                        </ListItem>
                        <ListItem
                          button
                          sx={{
                            bgcolor: 'grey',
                            display: 'flex',
                            flexDirection: 'column',
                            bgcolor: '#f2f2f2',
                          }}
                        >
                          <Link style={style.listItems} className="link">
                            {/* <ShoppingCartIcon /> */}
                            <h4>Brands</h4>
                          </Link>
                          <Link
                            style={style.listItems}
                            className="link underlinetext"
                          >
                            {/* <ShoppingCartIcon /> */}
                            Adidas
                          </Link>
                          <Link
                            style={style.listItems}
                            className="link underlinetext"
                          >
                            {/* <ShoppingCartIcon /> */}
                            Servis
                          </Link>
                          <Link
                            style={style.listItems}
                            className="link underlinetext"
                          >
                            {/* <ShoppingCartIcon /> */}
                            Bata
                          </Link>
                          <Link style={style.listItems} className="link">
                            {/* <ShoppingCartIcon /> */}
                            <h4>Categories</h4>
                          </Link>
                          <Link
                            style={style.listItems}
                            className="link underlinetext"
                          >
                            {/* <ShoppingCartIcon /> */}
                            Sports
                          </Link>
                          <Link
                            style={style.listItems}
                            className="link underlinetext"
                          >
                            {/* <ShoppingCartIcon /> */}
                            Formals
                          </Link>
                          <Link
                            style={style.listItems}
                            className="link underlinetext"
                          >
                            {/* <ShoppingCartIcon /> */}
                            Casuals
                          </Link>
                        </ListItem>
                        <ListItem button>
                          <Link style={style.listItems} className="link">
                            <ShoppingCartIcon /> My Cart
                          </Link>
                        </ListItem>
                        <ListItem button>
                          <Link style={style.listItems} className="link">
                            {/* <ShoppingCartIcon /> */}
                            My Orders
                          </Link>
                        </ListItem>
                        <ListItem button>
                          <Link style={style.listItems} className="link">
                            My Profile
                          </Link>
                        </ListItem>
                        {/* Add more ListItems for additional navigation items */}
                      </List>
                      <List onClick={handleDrawerClose}>
                        <ListItem button onClick={logoutHandler}>
                          <Button style={style.listItems} className="linkStyle">
                            <LogoutIcon />
                            Logout
                          </Button>
                        </ListItem>
                      </List>
                    </Box>
                  </Drawer>
                </>
              )}
              {/* <Box sx={style.menuButton}>
          <AccountCircleIcon />
        </Box> */}
            </Box>
          </Container>
          {isShopHovered && (
            <Box
              sx={style.scnavbar}
              onMouseEnter={handleBoxHover}
              onMouseLeave={handleBoxLeave}
            >
              <Grid
                container
                sx={{
                  bgcolor: ' white ',
                  height: '300px',
                  // border: '1px solid black',
                }}
              >
                <Grid
                  item
                  xl={3}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',

                    // border: '1px solid black',
                    margin: 'auto 0',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',

                      flexDirection: 'column',
                    }}
                  >
                    <Link className="linkStyle" style={{ fontWeight: 700 }}>
                      Brands
                    </Link>
                    <Link className="linkStyle underlinetext">Adidas</Link>
                    <Link className="linkStyle underlinetext">Servis</Link>
                    <Link className="linkStyle underlinetext">Bata</Link>
                  </Box>
                </Grid>
                <Grid
                  item
                  xl={3}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100px',
                    // border: '1px solid black',
                    margin: 'auto 0',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',

                      flexDirection: 'column',
                    }}
                  >
                    <Link className="linkStyle" style={{ fontWeight: 700 }}>
                      Categories
                    </Link>
                    <Link className="linkStyle underlinetext">Sports</Link>
                    <Link className="linkStyle underlinetext">Formals</Link>
                    <Link className="linkStyle underlinetext">Casuals</Link>
                  </Box>
                </Grid>
                <Grid
                  item
                  xl={6}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{
                    height: '100%',
                    // border: '1px solid black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 'auto 0',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                    }}
                  >
                    <Box
                      component={'img'}
                      src={NewArrivalsImage}
                      sx={{
                        height: '300px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    ></Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </>
    );
  };
  const [isMouseOnBox, setMouseOnBox] = useState(false);
  return <>{isAuthenticated ? <LoggedInUser /> : <GuestUser />}</>;
};

export default Navbar;
