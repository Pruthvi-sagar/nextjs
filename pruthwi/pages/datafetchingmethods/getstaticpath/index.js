import React from 'react'
import Link from 'next/link'

const GetSataicprops = ({data}) => {
    console.log(data);
  
    return (
      <>
      {data.map((elem)=>{
          return(
              <>
              <div class="card" >
            
     
    <div class="container">
      
      <Link href={'/datafetchingmethods/getstaticpath/'+ elem.id}><u> {elem.thumbnailUrl}</u></Link> 
    </div>
  </div>
              </>
          )
      })}
      </>
    )
  }
  

export async function getStaticProps(context) {

    const res = await fetch("https://jsonplaceholder.typicode.com/photos")
    const data =await res.json()
    return {
      props: {data}, // will be passed to the page component as props
    }
  }

export default GetSataicprops