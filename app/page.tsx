"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const App = () => {
  const router = useRouter();

  useEffect(() => {
    const login = localStorage.getItem("token");
    if (login) {
      router.replace("admin/");
    } else {
      router.replace("login/");
    }
  }, []);
  return <div></div>;
};

export default App;
