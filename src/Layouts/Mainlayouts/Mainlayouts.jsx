import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Mainlayouts = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayouts;