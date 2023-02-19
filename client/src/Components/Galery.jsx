import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Vectors_React from "./assets/vectors";
import s from "./Galery.module.css";



export function Galery (){

  let allGames = useSelector(state => state.videogamesListCOMPLETE).slice();
  
  allGames = allGames.sort(function (a, b) {
    if (a.released < b.released) {
      return 1;
    }
    if (a.released > b.released) {
      return -1;
    }
    return 0;
});
  
  const images = [
    allGames[0],
    allGames[1],
    allGames[2],
    allGames[3],
    allGames[5],
    allGames[6],
    allGames[7],
    allGames[8],
    allGames[9],
    allGames[10],
    allGames[11],
    allGames[12],
    allGames[13],
    allGames[14],
    allGames[15],
  ]

  return(
  <React.Fragment>
  <section className={s.galery}>
    {images.map((i)=> {
      return(
      <>
      <img src={i.image} alt="Img Not Found" className={s.image} title={i.name}/>
      </>
      )
    })}
  
  </section>
  </React.Fragment>
  )
};
