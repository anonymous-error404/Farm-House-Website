import { useEffect, useState } from "react";
import axiosInstance from "../API/Axios";
import menuData from "../API/GetApi";

import React from 'react'
const Test = () => {

    useEffect(() => {
    const res = menuData();
    }, []);
  return (
    <div>
        <h1>menu</h1>
    </div>
  )
}
export default Test;
