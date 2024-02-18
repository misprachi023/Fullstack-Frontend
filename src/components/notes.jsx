import React, { useEffect , useContext	} from "react";
import { Box, Button, Heading } from "@chakra-ui/react";

import {useNavigate} from "react-router-dom"


/**
 * @author
 * @function Notes
 **/

const Notes = (props) => {
	
	
	const [notes, setNotes] = React.useState([]);

	const navigate=useNavigate();



	useEffect(() => {
		const getData = async () => {
			try {
				const res = await fetch("https://tiny-cyan-squid-gown.cyclic.app/posts",{
					method: "GET",
					credentials: "include",
				});
				const data = await res.json();
				console.log(data);
				setNotes(data);
			} catch (err) {
				console.log(err);
			}
		};
		getData();
	}, []);
	return (
		<>
			
			
			
			<Box width={"80%"} margin={"auto"}>
			<Heading>Notes</Heading>	
				{notes.map((item) => (
					<Box border={"1px solid black"} width={"30%"} margin={"auto"} key={item._id}>
						<Box>{item.title}</Box>
						<Box>{item.body}</Box>
						<Box>{item.device}</Box>
					</Box>
				))}
			</Box>
		</>
	);
};
export default Notes;
