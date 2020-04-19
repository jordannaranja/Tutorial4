import React from "react"; 
import CustomButton from "../comps/CustomButton";

export default {
    title:"Custom Button",
    component:CustomButton 
};

export const MyCustomButton = () => <CustomButton />; 

export const PageWithCustomButtons = () => <div>
    <CustomButton 
        color="#999"
        text="Cancel"
        onClick={CancelClick}/>
    <CustomButton 
        color="#3F5"
        text="OK"
        onClick={OkClick}/> 
    <CustomButton 
        color="#F3F"    
        text="Submit"/>
    <CustomButton 
    text="Menu"/>  
</div>

function CancelClick() {
    alert("Cancel"); 
}

function OkClick() {
    alert("Ok"); 
}