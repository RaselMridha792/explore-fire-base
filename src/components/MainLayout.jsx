import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
        <div>
            <ul>
                <NavLink to='/'>home</NavLink>
                <NavLink to='/about'>about us</NavLink>
                <NavLink to='/contact'>Contact us</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </ul>
            <Outlet></Outlet>
        </div>            
        </>
    );
};

export default MainLayout;