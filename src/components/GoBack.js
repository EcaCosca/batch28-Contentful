import React from 'react'
import { useNavigate } from "react-router-dom";

const GoBack = () => {
 const navigate = useNavigate();

 const handleBackClick = () => {
   navigate(-1);
 };
 
 const handleFrontClick = () => {
   navigate(1);
 };

 return (
   <div>
     <button onClick={handleBackClick}>GO BACK!</button>
     <button onClick={handleFrontClick}>GO FORTH!</button>
   </div>
 );
};

export default GoBack;