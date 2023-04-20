import React from "react";
import styles from "./Landing.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllVideogames } from "../../redux/actions/actions";

const Landing = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleOnStart = (e) => {
    e.preventDefault();
    dispatch(getAllVideogames());
    history("/home");
  };

  return (
    <div className={styles.container}>
      <div>
      </div> 
      <Link to="/home">
        <input
          type="button"
          className={styles.button}
          onClick={(e) => handleOnStart(e)}
        />
      </Link>
    </div>
  );
};

export default Landing;
