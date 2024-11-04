
import React, { useEffect, useState } from "react";
import BreadCumb from "../HomeUi/BreadCumb";
import Filter from "../ProductUi/Filter";
import ProductCard from "../HomeUi/ProductCard";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://drou-electronics-store.onrender.com/api/v1/products");
        setProducts(response.data.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response?.data || error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <BreadCumb page1="Home" mainPage="Electronics" />
      <div className="container px-8 mx-auto flex py-11 my-11 ">
        <div className="w-[20%] flex flex-col gap-5 px-4">
          <div className="clearAll cursor-pointer text-[#444] flex items-center justify-center gap-1 rounded-md px-4 py-[10px] bg-bg_white hover:bg-my_orange">
            <i className="fa-solid fa-trash"></i>
            Clear all
          </div>
          <div className="FilterListBox flex flex-col gap-5">
            <Filter title="Brand" />
            <Filter title="Brand" />
            <Filter title="Brand" />
            <Filter title="Brand" />
            <Filter title="Brand" />
          </div>
        </div>
        <div className="w-[80%]">
          {loading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p>Error loading products: {error}</p>
          ) : (
            <div className="ProductCardList flex flex-wrap gap-4 items-center justify-center">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;