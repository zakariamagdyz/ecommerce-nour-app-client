import React from "react";
import { useLocation } from "react-router-dom";

const OrderDetail = () => {
  const { state } = useLocation();
  console.log(state);
  return <div>OrderDetail</div>;
};

export default OrderDetail;
