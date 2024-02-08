import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./CartSlice";
import { getProducts } from "./productSlice";

export default function Product() {
  const dispatch = useDispatch();
  const {data: products } = useSelector(state => state.products)
useEffect(() => {
      dispatch(getProducts());
   /*  fetch(`https://fakestoreapi.com/products`)
      .then((data) => data.json())
      .then((result) => setProducts(result)); */
  }, []);

  const removeItem =(id) => {
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div className="col-md-3" key={product.id}>
      <div class="card " style={{ width: "18rem" }}>
        <div class="text-center">
          <img
            class="card-img-top"
            src={product.image}
            alt="productImage"
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">INR:{product.price}</p>
        </div>
        <div class="footer">
          <button
            class="btn btn-primary"
             onClick={()=>removeItem(product.id)}
          >
            RemoveItem
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
}
