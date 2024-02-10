import React, { useEffect } from 'react'
import {Box, Button, Heading } from '@chakra-ui/react'

/**
* @author
* @function Notes
**/

const Notes = (props) => {
  const [notes,setNotes]=React.useState([])


  useEffect(()=>{
    const getData=async()=>{
      try{
        const res=await fetch("https://tiny-cyan-squid-gown.cyclic.app/posts",{
          method:"GET",
          mod:"cors",
          credentials:"include"
        })
        const data= await res.json();
        console.log(data);
        setNotes(data)
      }
      catch(err){
        console.log(err);
      }
    }
    getData();
  },[])
  return(
    <>
    {notes?notes.map((item)=>{
      <Box key={item._id}>
        <Heading>{item.email}</Heading>
        <Heading>{item.title}</Heading>
        <p>{item.content}</p>
        <Button>Delete</Button> 
        <Button>Edit</Button>
      </Box>
    }):<Heading>Data could not fetch</Heading>}
    </>
  
   )
  }
export default Notes;