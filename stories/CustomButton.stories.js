import React from "react"; 
import CustomButton from "../comps/CustomButton";
import Header from "../comps/Header";
import Input from "../comps/Input";
import Chat from "../comps/Chat";
import ChatPage from "../pages/ChatPage";


export default {
    title:"My comps",
    component:CustomButton 
};

export const MyCustomButton = () => <CustomButton />; 

export const MyCustomButtonWithOptions = () => <CustomButton 
color="#999"
text="Cancel"
onClick={CancelClick}
/>; 

export const MyHeader = () => <Header />; 

export const MyInput = () => <Input />; 

export const MyInputWithPlaceholder = () => <Input 
    placeholder="Custom Placeholder"
/>; 

export const MyChat = () => <Chat />; 

export const MyChatPage = () => <ChatPage />; 



// export const PageWithCustomButtons = () => <div>
//     <Header 
//     fontSize={15}
//     color="#ABC"
//     onMouseOver={CancelClick}
//     />


//     <Header 
//     fontSize={25}
//     color="#red"
//     onMouseOver={CancelClick}
//     />

//     <CustomButton 
//         color="#999"
//         text="Cancel"
//         onClick={CancelClick}/>
//     <CustomButton 
//         color="#3F5"
//         text="OK"
//         onClick={OkClick}/> 
//     <CustomButton 
//         color="#F3F"    
//         text="Submit"/>
//     <CustomButton 
//     text="Menu"/>  
// </div>

function CancelClick() {
    alert("Cancel"); 
}

// function OkClick() {
//     alert("Ok"); 
// }