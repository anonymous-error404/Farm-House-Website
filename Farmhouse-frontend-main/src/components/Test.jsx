import { useEffect, useState } from "react";
import axiosInstance from "../API/Axios";
import fetchData from "../API/GetApi";

import React from 'react'
const Test = () => {

    useEffect(() => {
    const res = fetchData();
    }, []);
  return (
    <div>
        <h1>Reviews</h1>
    </div>
  )
}
export default Test;
