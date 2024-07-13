import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";

const routes = createBrowserRouter([
    {
        path: "",
        element: <Main />,
        children: [
            {
                path: "",
                element: <Home />
            }
        ]
    }
])
export default routes