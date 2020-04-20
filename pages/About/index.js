import Link from "next/link";
import Router from "next/router"; 
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import "./about.css";

const About = () => <div>
    <Header text="About Us!" fontSize={24} /> 
    <CustomButton text="Email" /> 
    <Link href="./index"><CustomButton text="Back to Index"></CustomButton></Link>
</div>

export default About; 