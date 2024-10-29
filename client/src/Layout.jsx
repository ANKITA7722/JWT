import Haeder from "./components/Header";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <Haeder />
            <Outlet/>
        </>
    )
}
export default Layout;