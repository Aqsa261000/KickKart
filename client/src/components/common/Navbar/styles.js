const style = {
  navbarcontainer: {
    backgroundColor: 'bisque',
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
  },
  menuButton: {
    fontSize: '40px',
    color: 'black',
  },
  listItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    position: 'relative',
    listStyle: 'none',
    columnGap: '10px',
    width: 'max-content',
    textDecoration: 'none',

    '& :hover': {
      color: '#8a33fd',
      borderBottom: '2px solid black',
      transition: '0.09s all ease-in',
    },
  },

  navButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    position: 'relative',
    listStyle: 'none',

    width: 'max-content',
  },

  button: {
    backgroundColor: '#8a33fd',
    color: 'white',
    fontFamily: 'inherit',
    fontWeight: 600,
    padding: '5px 20px',
    '&:hover': { backgroundColor: '#7a2fdc' },
  },
  buttonIcons: {
    color: '#8a33fd',
    fontSize: '30px',
  },
};

export default style;
