import React, { useState } from "react";
import '../../Views/Home/Home.css'
import { Review } from "./Review/Review";


function Slider({ratings}){
    const [index,setIndex]=useState(0)

    const previous = ()=>{
        if(index>0 ){
            setIndex(index-1)
        }else{
            setIndex(ratings.length-1)
        }
    }
    const next = ()=>{
        if(index<ratings.length){
            setIndex(index+1)
        }else{
            setIndex(0)
        }
    }
    console.log("kjihgyfvcdfgvhbj",ratings)

    return(
        <>
        {ratings.length >0 &&
        <div className="row-container2">
            {ratings.map((rating,i)=>{
 return <Review previous={previous} next={next} currentIndex={index} index={i} title={'titulo1'} rating={rating}/>
            })}

  
        </div>}</>);}

 export default Slider;