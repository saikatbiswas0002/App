import React from "react";
import { AppBar, Toolbar, Typography, Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <AppBar position="static" color="primary" sx={{backgroundColor:" #9966ff"}}>

      <Toolbar>
      
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white",fontWeight:1000 }}>
          VistaCart
          </Link>
        </Typography>

      
        <IconButton component={Link} to="/" color="inherit">
          <HomeIcon />
          <Typography variant="button" marginLeft={0.5}>
            Home
          </Typography>
        </IconButton>

        <IconButton component={Link} to="/cart" color="inherit">
        
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCartIcon />
          </Badge>
          <Typography variant="button" marginLeft={0.5}>
            Cart
          </Typography>

        </IconButton>

      </Toolbar>

    </AppBar>
  );
};

export default Header;
