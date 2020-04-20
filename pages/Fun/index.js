import Link from "next/link";
import Router from "next/router"; 
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import "./fun.css";

const Fun = () => <div>
    <Header text="How to have fun!" fontSize={24} /> 
    <CustomButton text="Click here to have fun!" /> 
    <Link href="./index"><CustomButton text="Back to Index"></CustomButton></Link>
</div>

export default Fun; 