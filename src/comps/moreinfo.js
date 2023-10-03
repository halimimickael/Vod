import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';



export default function MoreInfo() {
  const params = useParams();
  const nav =useNavigate();
  const[item,setItem] = useState({});


  useEffect(() =>{
    doApi();
  },[])

  const doApi = async() =>{
    let url = `https://www.omdbapi.com/?i=${params["id"]}&apikey=81334aa1`
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data); 
    setItem(data);
  }

  return (
    <div className='container p-2 text-center'>
        <img src={item.Poster} alt='' className='col-md-4 p-3 ' />
        <h2>{item.Title}</h2>
        <div>
            Runtime: {item.Runtime}
        </div>   
        <div>
            Rating: {item.imdbRating}/10
        </div>
        <div>
            Genere: {item.Genre}
        </div>
        <div className='col-md-5 mx-auto'>
            Plot: {item.Plot}
        </div>
        <button className="btn btn-secondary btn-lg mt-3" onClick = {() =>
        nav(-1)}>Return</button></div>
  )
}
