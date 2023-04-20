import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={styles.menu}>
        
          <NavLink to="" className={styles.link}>
          <img
              className={styles.img}
              src="https://cdn.icon-icons.com/icons2/1511/PNG/512/searchsymbolinblackcircularbutton_104758.png"
              alt="search"
            />
            {/* <div className={styles.div}>HOME</div> */}
          </NavLink>
          <NavLink to="/home" className={styles.link}>
          <img
              className={styles.img}
              src="https://cdn.icon-icons.com/icons2/1511/PNG/512/homecircularbuttonwithhouseoutlineshape_104751.png"
              alt="home"
            />
            {/* <div className={styles.div}>HOME</div> */}
          </NavLink>
        
          <NavLink to="/create" className={styles.link}>
          <img
              className={styles.img}
              src="https://cdn.icon-icons.com/icons2/1511/PNG/512/addblackcircularbutton_104741.png"
              alt="crear"
            />
          </NavLink>
           {/* <div className={styles.div}>CREATE</div> */}
         
        
        <div className={styles.logo}>
          <NavLink to="/" style={{ textDecoration: "none", color: "red" }}>
            {" "}
            <img
              className={styles.img}
              src="https://cdn.icon-icons.com/icons2/1511/PNG/512/backleftarrowoutlinesymbolinblackcircularbutton_104747.png"
              alt="exit"
            />
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
