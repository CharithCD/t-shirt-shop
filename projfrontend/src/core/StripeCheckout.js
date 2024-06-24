import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";

const StripeCheckout = ({
  products,
  SetReload = (f) => f,
  reload = undefined,
}) => {
  return (
    <div>
      <h3 className="text-white">Stripe Checkout Loaded</h3>
    </div>
  );
};

export default StripeCheckout;
