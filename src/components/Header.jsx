import { Link } from "react-router-dom";
export default function Header(props){
    return(
        <>
            <div className="w-full h-screen relative">
                <img src={props.img} className="w-full h-full object-cover" />
                <div className="absolute w-full h-full inset-0 bg-black/55 "></div>
                <div className="border-1 absolute w-100 h-30 md:top-[35%] top-[25%] left-[10%] lg:left-[35%] md:left-[30%] flex items-center justify-center">
                    <h3 className="text-white text-xl md:text-2xl font-semibold">
                        <Link to="/" className="text-orange-400 font-bold">Home</Link> / {props.page}
                    </h3>
                </div>
            </div>
        </>
    );
}