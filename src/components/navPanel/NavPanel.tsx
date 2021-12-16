import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';

export const NavPanel=()=>{
    return<div className="navPanel">
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={({ isActive }) => `${s.item} ${isActive? s.active :""}` }  to="/gold"  >Gold</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={({ isActive }) => `${s.item} ${isActive? s.active :""}` } to="/tech">Tech</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={({ isActive }) => `${s.item} ${isActive? s.active :""}` } to="/premium" >Premium</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={({ isActive }) => `${s.item} ${isActive? s.active :""}` } to="/provisions" >Provisions</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={({ isActive }) => `${s.item} ${isActive? s.active :""}` } to="/addProduct" >add Product</NavLink>
            </div>
           {/* <div className={`${s.item} ${s.active}`}>
                <NavLink className={({ isActive }) => `${s.item} ${isActive? s.active :""}` } to="/productsAdd" >Products add</NavLink>
            </div>*/}
        </nav>
    </div>

}
