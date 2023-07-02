import React, { useState } from "react";
import '../../Views/Home/Home.css'
import { Vision } from "./Vision/Vision";
import { Mision } from "./Mision/Mision";
import { Objetivos } from "./Objetivos/Objetivos"

function Slider(){
    const [index,setIndex]=useState(0)

    const previous = ()=>{
        if(index>0 ){
            setIndex(index-1)
        }else{
            setIndex(2)
        }
    }
    const next = ()=>{
        if(index<2){
            setIndex(index+1)
        }else{
            setIndex(0)
        }
    }
    

    return(
        <div className="row-container2">
 <Mision previous={previous} next={next} currentIndex={index} />
    <Vision previous={previous} next={next} />
    <Objetivos previous={previous} next={next} />
        </div>);}

 export default Slider;