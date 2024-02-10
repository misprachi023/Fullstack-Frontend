import React from "react";
import cookies from "js-cookie";
import { useState } from "react";
import {
	FormControl,
	Box,
	FormLabel,
	Input,
	Heading,
	FormErrorMessage,
    RadioGroup,
    Radio,
    HStack,
	FormHelperText,
} from "@chakra-ui/react"; 
/**
 * @author
 * @function Register
 **/

const Register = () => {
	const [userDetails, setUserDetails] = useState({
        name: "",
        gender: "",
        email: "",
        password: "",
    });

	const handlechange = (e) => {                    
		const { name, value } = e.target;
		setUserDetails({
			...userDetails,
			[name]: value,            
		});
	};

	const handleSubmit = async(e) => {
		e.preventDefault();   
		console.log(userDetails);
		const res= await fetch("https://tiny-cyan-squid-gown.cyclic.app/users/register",{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(
				userDetails
			)
		})
		const token = await res.json();
		console.log(token);
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
				<Heading>Register</Heading>
			</div>
			<FormControl textAlign={"left"}>
				<FormLabel>Name</FormLabel>
				<Input type="text" name="name" onChange={(e) => handlechange(e)} />
				<FormLabel>Gender </FormLabel>
			    <RadioGroup defaultValue="Itachi">
					
						<Radio onChange={(e) => handlechange(e)}  name="gender" value="male">Male</Radio>
						<Radio onChange={(e) => handlechange(e)} name="gender" value="female">Female</Radio>
					
				</RadioGroup>

                
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
					value="Register"
					type="submit"
					onClick={(e) => handleSubmit(e)}
				/>
			</FormControl>
		</Box>
	);
};
export default Register;
