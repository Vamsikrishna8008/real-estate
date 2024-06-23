"use client";
import Chat from "@/components/Chat";
import React from "react";

const BuyerView = () => {
  return (
    <div className="w-1/2 ml-56 ">
      <h1>Chat</h1>
      <Chat user="Buyer" />
    </div>
  );
};

export default BuyerView;
