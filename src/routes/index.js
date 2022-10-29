import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages";
import Signin from "../pages/signin";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth";
import ListCourses from "../pages/courses"

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item/> : <Signin/> ;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes >
                <Route path = "/home" element = { < Private Item = { Home }/> } exact/>
                <Route path = "/courses" element = {<ListCourses />} exact/>
                <Route path = "/" element = {<Signin/>} />
                <Route path = "/signup" element = {< Signup />} exact /> 
                <Route path = "*" element = {< Signin />} />
            </Routes > 
        </Fragment> 
    </BrowserRouter >
   );
};
export default RoutesApp;