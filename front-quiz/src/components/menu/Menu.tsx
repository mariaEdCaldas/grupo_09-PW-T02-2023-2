import {NavLink } from "react-router-dom";
import "./Menu.scss";
import { MenuItem } from "./MenuItems";
import { ColoredLogo } from "../../assets/images/ColoredLogo";

interface MenuProps {
    rightMenuItems: MenuItem[];
    leftMenuItems: MenuItem[];
}

export default function Menu(props: MenuProps) {
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
                <NavLink to="/">
                    <div className="logo-container">
                        
                            <ColoredLogo />
                        
                    </div>
                </NavLink>
                <div className="menu menu-left">
                    {props.leftMenuItems && (
                        <div className="menu-items">
                            {renderMenuItems(props.leftMenuItems, "r")}
                        </div>
                    )}
                </div>
                {props.rightMenuItems && (
                    <div className="menu menu-right">
                        <div className="menu-items">
                            <div className="menu-items">
                                {renderMenuItems(props.rightMenuItems, "l")}
                            </div>
                        </div>
                    </div>
                )}
            </nav>
    );
}
