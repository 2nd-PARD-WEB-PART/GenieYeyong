import React from "react";
import HomeProblem from "../HomeProblem";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const Condi=()=>{
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get("http://172.18.140.44:8080/wish2024/findTypeWish/콘텐츠융합디자인")
          .then((response) => {
            console.log("response: " + JSON.stringify(response.data.data));
            setData(response.data.data);
          })
          .catch((error) => console.log("error: " + error));
      }, []); 

    return(
        <>
            <HomeProblem problem={data}></HomeProblem>
        </>
    )
}


export default Condi;