import React, { useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, addToCart }) => {

  const [sortType, setSortType] = useState("price");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "price") return a.price - b.price;
    if (sortType === "name") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <Box>

      <Box sx={{ mb: 2 }}>

        <Button 
          onClick={() => setSortType("price")} 
          sx={{
            color: sortType === "price" ? '#ff6600' : '#9966ff',
            fontWeight: sortType === "price" ? 'bold' : 'normal',
            '&:hover': {
              backgroundColor: '#e6e6e6',
            }
          }} 
          aria-label="Sort by price"
        >
          Sort by Price
        </Button>

        <Button 
          onClick={() => setSortType("name")} 
          sx={{
            color: sortType === "name" ? '#ff6600' : '#9966ff',
            fontWeight: sortType === "name" ? 'bold' : 'normal',
            '&:hover': {
              backgroundColor: '#e6e6e6',
            }
          }} 
          aria-label="Sort by name"
        >
          Sort by Name
        </Button>

      </Box>

      {sortedProducts.length === 0 ? (
        <Box>No products available</Box>

      ) : (
        
        <Grid container spacing={2}>
          {sortedProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} onAddToCart={addToCart} />
            </Grid>
          ))}
        </Grid>

      )}

    </Box>
  );
};

export default ProductGrid;
