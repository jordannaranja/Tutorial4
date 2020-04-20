import React, {useState} from "react";
import "./chatpage.css"; 
import Chat from "../../comps/Chat"
import CustomButton from "../../comps/CustomButton"
import Input from "../../comps/Input"
import Header from "../../comps/Header"

// var welcome_state = "Welcome to my App!"
// function setWelcome(){ 
//     welcome = "Start with sending a message."
//     document.querySelector("#welcome").innerText = welcome;
// }



const ChatPage = ({}) => {
const [welcome, setWelcome] = useState("Welcome to my App!");
const [msg, setMsg] = useState("Please type something!");
const [resp, setResp] = useState("Let me respond to you!");
const [color, setColor] = useState("#FAD");

return <div>
    <div id="welcome">
        <Header fontSize={32} text={welcome} />
    </div>
    <div id="chats" onClick={() => {setWelcome("Start with sending a message.")}}>
        <Chat name="User1" msg={msg}/>
        <p></p>
        <Chat img="https://miro.medium.com/max/4000/1*9ZvCnFHHwJxAd595SFHDgA.png" name="Chatbot" backgroundColor="#FAB" msg={resp}/>
    </div>
    <div id="controls">
        <Input onClick={(val)=>{
            setMsg(val);
            var new_resp =  CheckResponse(val);
            setResp(new_resp);
            // if(val==="hi"){
            //     setResp("I love pie!");
            // }
        }} />
    </div>
    <div id="custom_button">
        When the button is clicked, change the text and color 
    </div>
</div>
}

function CheckResponse(inp){
    switch(inp.toLowerCase()){
        case "hi": 
          return "I love pie";
        case "how are you?":
          return "Great!";
        default: 
          return "I don't understand what you're trying to say";
    }
}

export default ChatPage; 