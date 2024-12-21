import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const ProductCard = ({ product, onAddToCart }) => {
  return (

    <Card sx={{ maxWidth: 300, margin: 2 }}>

      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
      />
      <CardContent>

        <Typography variant="h6" gutterBottom>
          {product.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>

        <Typography variant="body2">Rating: {product.rating.rate}</Typography>

        <Button
          variant="contained"
          sx={{backgroundColor:" #9966ff"}}
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>

      </CardContent>

    </Card>
  );
};

export default ProductCard;
