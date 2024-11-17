import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layouts/Mainlayouts/Mainlayouts";
import Home from "../Pages/Home/Home";
import Alltreatment from "../Pages/Alltreatment/Alltreatment";
import Myappoinments from "../Pages/Myappoinments/Myappoinments";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayouts></Mainlayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/alltreatment',
                element:<Alltreatment></Alltreatment>
            },
            {
                path:'/myappoinments',
                element:<Myappoinments></Myappoinments>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
        ]
    }
])

export default router;