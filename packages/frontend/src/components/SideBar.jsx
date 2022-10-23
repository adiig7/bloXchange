import React from "react";
import ReactDOM from "react-dom";
import "./sidebar.css";
import Product from "./svg/product.svg";
import Market from "./svg/market.svg";
import Profile from "./svg/profile.svg";
import Contact from "./svg/contact.svg";

export default function SideBar() {
  return (
    <div>
      <div className="sidebar--component fixed">
        <div className="sidebar--content">
          <div className="sidebar--col">
            <div className="flex flex-col space-y-5 mb-12">
              <a className="flex items-center" href="#">
                <div class="flex items-center">
                  <img src={Market}></img>
                  <p>Marketplace</p>
                </div>
              </a>
              <a class=" flex items-center hover:opacity-90" href="#">
                <div class="flex items-center">
                  <img src={Product}></img>
                  <p>Sell a product</p>
                </div>
              </a>
              <a class=" flex items-center hover:opacity-90" href="#">
                <div class="flex items-center">
                  <img src={Profile}></img>
                  <p>Profile</p>
                </div>
              </a>
            </div>
          </div>
          <div className="border-t border-slate-500 block mb-8"></div>
          <div className="flex items-center pl-3 mb-8 text-base">
            <img src={Contact}></img>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
