"use client";
import Chat from "@/components/Chat";
import React from "react";

const SellerView = () => {
  return (
    <div className="container">
      <h1>Messages</h1>
      <Chat user="Seller" />
    </div>
  );
};

export default SellerView;
