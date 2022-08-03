import React from 'react'

const Id = ({data}) => {
  return (
<> 
 {data.title}
</>
  )
}

export async function getStaticPaths(context) {

    const res = await fetch("https://jsonplaceholder.typicode.com/photos")
    const data =await res.json()


    const paths=data.map((elem)=>{
        return{
            params:{id:elem.id.toString()}
        }
            
            
            
        
    })


    return {
      paths,
      fallback:false
    }
  }

  export async function getStaticProps(context) {

    const id=context.params.id

    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const data =await res.json()
    return {
      props: {data}, // will be passed to the page component as props
    }
  }

export default Id