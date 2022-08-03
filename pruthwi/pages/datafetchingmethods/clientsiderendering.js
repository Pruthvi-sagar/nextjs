import { useEffect, useState } from "react"


const Clientsiderendering = () => {
    const [title,setTitle]=useState()


    useEffect(()=>{

        (async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/photos")
            const data =await res.json()
            setTitle(data)
          })();

    },[])

   
  return (
    <>
    {title?.map((elem)=>{
        return(
            <>
            <div class="card" >
          
   
  <div class="container">
    <h4><b>{elem.title}</b></h4> 
    
  </div>
</div>
            </>
        )
    })}
    </>
   
  )
}

export default Clientsiderendering