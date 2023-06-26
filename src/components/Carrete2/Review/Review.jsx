import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfStroke,faStar } from '@fortawesome/free-solid-svg-icons'
import {useDispatch,useSelector} from 'react-redux'

export const Review = ({previous,next,currentIndex,index,title,rating}) => {
  const { users } = useSelector((state) => ({
    ...state.user,
  }));

  const getUser =(id)=>{
    const user=users.filter((user)=>user.id==id)[0]

  
    return user.name+" "+ user.lastName
  }

  return (
    <div className="mision" style={{marginLeft:currentIndex==index ? (-index*100).toString()+"%":0}}>
      <div className='review-title'>
        <h1 className='titulos'>{getUser(rating.ID_user)}</h1>
        <div className='star-content'>
          {[...Array(rating.rating)].map((n)=>{
            return <FontAwesomeIcon icon={faStar} className='star' />
          })}
        

        </div>
        </div>
        <p className='parrafos'>{rating.feedback}</p>
        
        
        <div className="square_slider_left" onClick={()=>{previous()}}><i class="arrow left"></i></div>
        
        <div className="square_slider_right" onClick={()=>{next()}}><i class="arrow right"></i></div>
    </div>
    
  )
}

