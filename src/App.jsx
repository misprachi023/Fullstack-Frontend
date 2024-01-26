import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./components/login";
import Notes from "./components/notes";
import Register from "./components/register";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
	return (
		<>
    <Navbar />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/notes" element={<Notes />} />
			</Routes>
		</>
	);
}

export default App;
