//!IMPORTS:
import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem';
import FitbitIcon from '@mui/icons-material/Fitbit';

const sections = [
  {name: "Projects", ref: "#my-projects"},
  {name: "Skills", ref: "#my-skills"},
  {name: "Experience", ref: "#work-experience"},
  {name: "Education", ref: "#my-education"},    
  {name: "GitHub", ref: "https://github.com/Becquerelia"},
  {name: "LinkedIn", ref: "https://www.linkedin.com/in/evagonzalezcagigas"},
  {name: "Contact", ref: "mailto:evarteca@gmail.com"}
];

//! MAIN FUNCTION:
function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  return (
    <AppBar position="static" sx={{ backgroundColor: "#6d11ab", flexGrow: "1" }}>
    
      <Container maxWidth="xl" sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}>
        <Toolbar disableGutters  >
          <FitbitIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EVA GC
          </Typography>

          <Box sx={{ mr: 8, flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sections.map((eachSection, index) => (
                <MenuItem key={eachSection + index} onClick={handleCloseNavMenu} >
                <Button  color="secondary" href={eachSection.ref} ><Typography textAlign="center" >{eachSection.name}</Typography></Button>
                </MenuItem>
                  
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h6"
            noWrap
            component="a"            
            sx={{
              mr: 18,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EVA GC
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sections.map((eachSection, index) => (
              <Button
                key={eachSection + index}
                href={eachSection.ref}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}
              >
                {eachSection.name}
              </Button>
            ))}
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar