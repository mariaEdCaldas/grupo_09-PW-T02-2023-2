import {NavLink } from "react-router-dom";
import "./Menu.scss";
import { MenuItem } from "./MenuItems";
import { ColoredLogo } from "../../assets/images/ColoredLogo";
import { useEffect, useState } from "react";
import { auth } from "../../services/firebaseConfig";
import SignOffBtn from "../buttons/SignOffBtn";

interface MenuProps {
    rightMenuItems: MenuItem[];
    leftMenuItems: MenuItem[];
}

export default function Menu(props: MenuProps) {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    useEffect(() => {
        //check if user is logged in
        auth.onAuthStateChanged((user) => {
            if(user){
                setIsLogged(true);
            }
        })
    }, [auth])
    const renderMenuItems = (menuItems:MenuItem[], prefix:string = "i")=> menuItems.map((item, index) => {
        return (
            <NavLink
                key={prefix+index}
                to={item.path}
                className={({isActive})=> "menu-item" + (isActive ? " active" : "")}
            >
                {item.label}
            </NavLink>
        );
    });
    return (
            <nav className="menu-container">
                <NavLink to={isLogged ? "/" : "/login"}>
                    <div className="logo-container">
                            <ColoredLogo />
                        
                    </div>
                </NavLink>
                <div className="menu menu-left">
                    { (isLogged && props.leftMenuItems) && (
                        <div className="menu-items">
                            {renderMenuItems(props.leftMenuItems, "r")}
                        </div>
                    )}
                </div>
                {((!isLogged) && props.rightMenuItems) && (
                    <div className="menu menu-right">
                        <div className="menu-items">
                            <div className="menu-items">
                                {renderMenuItems(props.rightMenuItems, "l")}
                            </div>
                        </div>
                    </div>
                )}
                {((isLogged)) && (
                    <div className="menu menu-right">
                        <div className="menu-items">
                            <div className="menu-items">
                                <div className="menu-item">
                                    <SignOffBtn isLogged={isLogged} setIsLogged={setIsLogged}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
    );
}
