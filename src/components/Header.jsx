import { Link } from "react-router-dom";
export default function Header(props){
    return(
        <>
            <div className="w-full h-60 md:h-85 relative">
                <img src={props.img} className="w-full h-full object-cover" />
                <div className="absolute w-full h-full inset-0 bg-black/60 "></div>
                <div className="absolute w-100 h-30 md:top-[35%] top-[25%] left-[12%] md:left-[35%] flex items-center justify-center">
                    <h3 className="text-white text-xl md:text-2xl font-semibold">
                        <Link to="/" className="bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text font-bold">Home</Link> / {props.page}
                    </h3>
                </div>
            </div>
        </>
    );
}