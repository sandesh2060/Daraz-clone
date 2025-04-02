import React from "react";

const nav = () => {
  return (
    <div className="nav">
      <div className="nav-upper">
        <a href="/">Save More on App</a>
        <a href="/"> Become a Seller</a>
        <a href="/"> Help & Support</a>
        <a href="/"> Login </a>
        <a href="/">Sign Up</a>
        <a href="/"> भाषा परिवर्तन</a>
      </div>
      <div className="nav-lower">
        <img
          src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png"
          alt=""
        />
        <div className="search-section">
          <div className="search-icon">
            <input type="text" name="" id="" placeholder="Search in Daraz" />
            <i class="ri-search-line"></i>
          </div>
          <i class="ri-shopping-cart-line"></i>
        </div>
      </div>
    </div>
  );
};

export default nav;
