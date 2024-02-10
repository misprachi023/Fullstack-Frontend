import React from "react";
import { useState } from "react";
import axios from "axios";
import cookies from "js-cookie";
import {
	FormControl,
	Box,
	FormLabel,
	Input,
	Heading,
	FormErrorMessage,
	FormHelperText,
} from "@chakra-ui/react";
/**
 * @author
 * @function Login
 **/ 

const Login = () => {
	const [userDetails, setUserDetails] = useState({
		

	});

	const handlechange = (e) => { 
		const { name, value } = e.target;
		setUserDetails({
			...userDetails, 
			[name]: value,
		})
	};  

	const handleSubmit = async (e) => {
		console.log(userDetails);
		e.preventDefault();
		const res=await axios.post("https://tiny-cyan-squid-gown.cyclic.app/auth/login",userDetails,{withCredentials:true})
		console.log(res.data);		
	}; 
	
	return (
		<Box
			padding={"2%"}
			
			boxShadow={
				"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
			}
			width={"40%"}
			margin={"auto"}
		>
			<div>
				<Heading>Login</Heading>
			</div>
			<FormControl textAlign={"left"}>
				<FormLabel>Email</FormLabel>
				<Input type="email" name="email" onChange={(e) => handlechange(e)} />
				<FormHelperText>
					Enter the email you'd like to receive the newsletter on.
				</FormHelperText>
				<FormErrorMessage>Email is required.</FormErrorMessage>
				<FormLabel>Password</FormLabel>
				<Input
					type="password"
					name="password"
					onChange={(e) => handlechange(e)}
				/>
				<FormHelperText>We'll never share your Password</FormHelperText>
				<Input
					bg={"teal"}
					color="white"
					width
					value="Login"
					type="submit"
					onClick={(e) => handleSubmit(e)}
				/>
			</FormControl>
		</Box>
	);
};
export default Login;
