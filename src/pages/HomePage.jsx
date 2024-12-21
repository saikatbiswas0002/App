import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../services/api";
import { addToCart } from "../Redux/cartSlice";
import ProductGrid from "../components/ProductGrid";
import Filters from "../components/Filters";

const HomePage = () => {
  const dispatch = useDispatch();

  const { data: products, isLoading } = useQuery({

    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilter = ({ priceRange, rating }) => {

    const filtered = products.filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        product.rating.rate >= rating
    );
    setFilteredProducts(filtered);
    
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
    <br></br>
      <Filters onFilter={handleFilter}/>
      <ProductGrid
        products={filteredProducts.length > 0 ? filteredProducts : products}
        addToCart={(product) => dispatch(addToCart(product))}
      />
    </>
  );
};

export default HomePage;
