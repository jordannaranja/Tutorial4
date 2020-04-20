import Link from "next/link";
import Router from "next/router"; 
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import "./contact.css";

const Contact = () => <div>
    <Header text="Contact Me!" fontSize={24} />
    <CustomButton text="About" />
    <Link href="./index"><CustomButton text="Back to Index"></CustomButton></Link>
</div>

export default Contact; 