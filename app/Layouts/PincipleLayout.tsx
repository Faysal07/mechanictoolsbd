import { Outlet } from "react-router";
import Footer from "~/Components/Footer";
import Header from "~/Components/Header";

export default function PincipleLayout() {
    return(
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}