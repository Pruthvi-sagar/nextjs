import React from 'react'

const ServersideProps = ({data}) => {
  console.log(data);

  return (
    <>
    {data.map((elem)=>{
        return(
            <>
            <div class="card" >
          
   
  <div class="container">
    <img src={`${elem.url}`} alt="pic" style={{width:"200px"}}></img>
    <h4><b>{elem.title}</b></h4> 
    <a><u> {elem.thumbnailUrl}</u></a> 
  </div>
</div>
            </>
        )
    })}
    </>
  )
}


export async function getServerSideProps(context) {

    const res = await fetch("https://jsonplaceholder.typicode.com/photos")
    const data =await res.json()
    return {
      props: {data}, // will be passed to the page component as props
    }
  }

export default ServersideProps