import React, { useState } from "react";
import '../../Views/Home/Home.css'
import { Review } from "./Review/Review";


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
        if(index<3){
            setIndex(index+1)
        }else{
            setIndex(0)
        }
    }
    

    return(
        <div className="row-container2">
 <Review previous={previous} next={next} currentIndex={index} index={0} title={'titulo1'}/>
 <Review previous={previous} next={next} currentIndex={index} index={1} title={'titulo2'}/>
 <Review previous={previous} next={next} currentIndex={index} index={2} title={'titulo3'}/>
 <Review previous={previous} next={next} currentIndex={index} index={3} title={'titulo4'}/>
  
        </div>);}

 export default Slider;