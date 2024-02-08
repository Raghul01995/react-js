import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function NavBar() {
  const cartProducts = useSelector(state=>state.cart)
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Redux Toolkit
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink to="/" class="nav-link active" aria-current="page">
                  Product
                </NavLink>
              </li>
              <li class="nav-right">
                <NavLink
                  to="cart"
                  class="nav-link text-center"
                  aria-current="page"
                >
                  My bag{cartProducts.length}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
