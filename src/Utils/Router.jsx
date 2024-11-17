import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layouts/Mainlayouts/Mainlayouts";
import Home from "../Pages/Home/Home";
import Alltreatment from "../Pages/Alltreatment/Alltreatment";
import Myappoinments from "../Pages/Myappoinments/Myappoinments";
import Profile from "../Pages/Profile/Profile";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayouts></Mainlayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:async () =>{
                    const servicedata = await fetch('/Services.json')
                    const service = await servicedata.json();
                    
                    const feeddata = await fetch('/Feedback.json');
                    const feedbacks = await feeddata.json();
                    return{service,feedbacks}
                    
                }
            },
            {
                path:'/alltreatment',
                element:<Alltreatment></Alltreatment>,
                loader:() => fetch('/Services.json')
            },
            {
                path:'/myappoinments',
                element:<Myappoinments></Myappoinments>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:"/details/:id",
                element:<DetailsPage></DetailsPage>,
                loader:async({params}) => {
                    const res = await fetch('/Services.json');
                    const dataSepar = await res.json();
                    const  data= dataSepar.services;
                    
                    const singleData = data.find(d => d.id == params.id);
                    console.log(singleData);
                    
                    return{singleData}
                }
            }
        ]
    }
])

export default router;