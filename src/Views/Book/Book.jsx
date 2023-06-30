import React from 'react'

export const Book = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if(artists.length ==0 || locations.length==0){
      dispatch(listArtists());
     

    dispatch(listLocations())
    }
    if(!currentTour || currentObras.length==0 || currentTour?.id !=id){
      dispatch(getTour(id));
      dispatch(listObrasTour(id));
      dispatch(listUsers())
      dispatch(getRatings(id))
    }
  

  }, []);

  const getArtist = (obraID) => {
    const artist=artists.filter((artist)=>artist.id==obraID)[0]
const name=artist.name
const lastname=artist.last_name !=null ? artist.last_name : ""

  
return name + " "+ lastname
  };

  const getLocation = (obraID) => {
    
    const location=locations.filter((location)=>location.id==obraID)[0]

  
return location.nombre
  };
  const getNumber=(number)=>{
    if(number.toString().length==1){
      return '0'+number.toString()
    }else{
      return number.toString()
    }

  }
  const getAverage=()=>{
    console.log('kjuhgvbhnjmk')
    let average=0;
    
    currentRatings.map((rating)=>{
      console.log(average)
      average+=rating.rating;
    })
    return parseInt(average/currentRatings.length)
  }

  const reservar=()=>{
    navigate(`/events/${id}`)
  }
  return (
    <div>Book</div>
  )
}
