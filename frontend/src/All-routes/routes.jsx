import Adashboard from "../component/admin/A-dashboard";
import Dashboard from "../component/dashboard";
import Home from "../component/home";
import Admin_layout from "../layout/Admin_layout";
import Web_layout from "../layout/Web_layout";

const Routes =[

    {
        element:<Home/>,
        children:[
            {path:"/", element:<Home/>}
        ]
    },

    {
        element:<Web_layout/>,
        children:[
            {path:"dashboard", element:<Dashboard/>}
        ]
    },
    {
        path:"/admin",
        element:<Admin_layout/>,
        children:[
            {path:"A-dashboard", element:<Adashboard/>}
        ]
    }

]