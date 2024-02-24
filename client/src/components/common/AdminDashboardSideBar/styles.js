const style = {
  navbarcontainer: {
    backgroundColor: 'bisque',
  },
  navItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    rowGap: '30px',
    width: '350px',
  },
  menuButton: {
    fontSize: '40px',
    color: 'black',
  },
  listItems: {
    display: 'flex',
    alignItems: 'center',

    textDecoration: 'none',
    backgroundColor: 'white',
    color: '#8a33fd',
    listStyle: 'none',
    marginLeft: '20px',
    padding: '5px 0',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',

    '& :hover': {
      transition: '0.1s all ease-in',
      textDecoration: 'underline',
    },
  },

  button: {
    backgroundColor: 'white',
    color: '#8a33fd',
    fontFamily: 'inherit',
    fontWeight: 700,
    padding: '5px 20px',
    gap: '7px',
    '&:hover': { backgroundColor: '#7a2fdc', color:'white' },
  },
  buttonIcons: {
    color: 'white',
    fontSize: '30px',
  },
  '@media only screen and (max-width:800px)': {
    navItems: {
      display: 'none',
      alignItems: 'center',
    },
  },
};

export default style;
