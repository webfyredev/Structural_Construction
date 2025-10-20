import Header from "../components/Header";
import PartnersSlider from "../components/logoSlider";
import NavBar from "../components/navbar";
import aboutHeader from '../images/sharps/pressed (3).webp'
import ServicesComponents from "../components/services";
import Values from "../components/values";
import Footer from "../components/footer";

export default function Services(){
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