import Header from "../components/Header";
import PartnersSlider from "../components/logoSlider";
import NavBar from "../components/navbar";
import aboutHeader from '../images/sharps/pressed (3).webp'
import ServicesComponents from "../components/services";
import Values from "../components/values";
import Footer from "../components/footer";
import { useEffect } from "react";

export default function Services(){
    useEffect(() =>{
        document.title = 'Services | Structura_Construction'
    }, []);
    return(
        <>
            <NavBar />
            <Header 
            img = {aboutHeader}
            page = 'Services'
            />
            <ServicesComponents />
            <Values />
            <PartnersSlider />
            <Footer />
        </>
    );
}