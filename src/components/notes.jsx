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
      
      {console.log("notes:"notes)}
    {notes?notes.map((item)=>{
      <Box >
        <Heading>{item.title}</Heading>
        <Heading>{item.body}</Heading>
        <p>{item.device}</p>
      </Box>
    }):null}
    </>
  
   )
  }
export default Notes;
