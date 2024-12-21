import React, { useState } from "react";
import { Box, Slider, Typography, Button } from "@mui/material";

const Filters = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [rating, setRating] = useState(0);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const applyFilters = () => {
    onFilter({ priceRange, rating });
  };

  return (
    <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: "8px", mb: 2, backgroundColor: " #e6e6ff" }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>


      <Typography variant="body1">Price Range</Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={500}
        step={10}
        sx={{ mb: 2, color: " #9966ff" }}
      />

      <Typography variant="body1">Minimum Rating</Typography>
      <Slider
        value={rating}
        onChange={(e, value) => setRating(value)}
        valueLabelDisplay="auto"
        min={0}
        max={5}
        step={0.5}
        sx={{ mb: 2, color: " #9966ff" }}
      />


      <Button variant="contained" sx={{ backgroundColor: " #9966ff" }} onClick={applyFilters}>
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filters;
