import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import VodStrip from "./vodStrip";
import VodList from "./vodList";

import "./home.css";


export default function Home() {
  const [querys] =useSearchParams();
  const [ar,setAr] = useState([]);

  useEffect( ()=>{
    let searchQ = querys.get("s") || "avengers";
    doApi(searchQ)
  },[querys])

  const doApi = async(_searchQ) =>{
    let myUrl = ` https://www.omdbapi.com/?s=${_searchQ}&apikey=81334aa1`;
    let resp = await fetch(myUrl);
    let data = await resp.json();
    console.log(data);
    if (data.Search) {
      setAr(data.Search);
    } else {
      setAr([]); 
    }
  }
  return (
    <React.Fragment>
      <VodStrip />
      <VodList  vod_ar = {ar}/>
    </React.Fragment>
  );
}
