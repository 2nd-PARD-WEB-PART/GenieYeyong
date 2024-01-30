/* disable-eslint */

import React, { useEffect } from "react";
import HomeProblem from "./HomeProblem";
import styled, { keyframes, css } from "styled-components";
import { useState } from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
// Keyframes for moving up animation

const Home = () => {
    return (
        <>
            <MainDiv>
                <TitleDiv>
                    <TitleText>새해 다짐을 공유해봐용</TitleText>
                    <TitleImg src={"./img/YYE.png"} />
                </TitleDiv>
                <MoveBox>
                    <FirstLinket to="/gls">
                        <LinkImage src={"./img/GLS.png"} />
                    </FirstLinket>
                    <FirstLinket to="/Inter">
                        <LinkImage src={"./img/INT.png"} />
                    </FirstLinket>
                    <FirstLinket to="/Busi">
                        <LinkImage src={"./img/ECO.png"} />
                    </FirstLinket>
                    <FirstLinket to="/Commu">
                        <LinkImage src={"./img/COM.png"} />
                    </FirstLinket>
                    <FirstLinket to="/csee">
                        <LinkImage src={"./img/CSEE.png"} />
                    </FirstLinket>
                    <FirstLinket to="/Ict">
                        <LinkImage src={"./img/ICT.png"} />
                    </FirstLinket>
                    <FirstLinket to="/Law">
                        <LinkImage src={"./img/LAW.png"} />
                    </FirstLinket>
                    <FirstLinket to="/Life">
                        <LinkImage src={"./img/LIFE.png"} />
                    </FirstLinket>
                    <FirstLinket to="/March">
                        <LinkImage src={"./img/MEC.png"} />
                    </FirstLinket>
                    <FirstLinket to="/Psy">
                        <LinkImage src={"./img/COU.png"} />
                    </FirstLinket>
                    <FirstLinket to="/Spac">
                        <LinkImage src={"./img/BUL.png"} />
                    </FirstLinket>
                    <FirstLinket to="/Condi">
                        <LinkImage src={"./img/CON.png"} />
                    </FirstLinket>
                </MoveBox>
                <BottomDiv>당신의 학부 페이지에서 나의 다짐을 작성하세요!</BottomDiv>
            </MainDiv>
        </>
    );
};

export default Home;

const FirstLinket = styled(Link)`
    margin-left: 60px;
    text-align: center;
    color: #000;
    font-family: DungGeunMo;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 284px;
    height: 98px;
    flex-shrink: 0;
    stroke-width: 2px;
    stroke: #000;
    text-decoration: none; /* 텍스트에 밑줄 제거 */
`;

const MainDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("/img/HomeBack.jpeg");
    display: flex;
    flex-direction: column;
`;

const TitleDiv = styled.div`
    width: 100vw;
    height: 20vh;
    text-align: center;
    padding-top: 60px;
    font-size: 60px;
    color: #796f66;
    font-family: DungGeunMo;
    display: flex;
    flex-direction: row;
    justify-content: center; // 수직 중앙 정렬 추가
    align-items: center; // 수평 중앙 정렬 추가
`;

const TitleText = styled.div`
    margin-right: 1%;
`;
const TitleImg = styled.img`
    width: 56px; // 이미지를 링크 박스에 꽉 차게 표시
    height: 59px; // 이미지를 링크 박스에 꽉 차게 표시
    object-fit: cover; // 이미지가 링크 박스에 가득 차게 표시
    margin-bottom: 10px;
`;

const BottomDiv = styled.div`
    width: 100vw;
    height: 20vh;
    text-align: center;
    font-size: 50px;
    color: #69635d;
    font-family: DungGeunMo;
`;

const MoveBox = styled.div`
    width: 80%;
    height: 90%;
    margin: 0 auto;
    padding: 15%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5%;
    margin-bottom: 150px;
`;

const MoneButton = styled.button`
    color: #000;
    font-family: DungGeunMo;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 250px;
    height: 60px;
    flex-shrink: 0;
    background-color: #8f50df;
    stroke-width: 2px;
    stroke: #000;
`;

const LinkImage = styled.img`
    width: 100%; // 이미지를 링크 박스에 꽉 차게 표시
    height: 100%; // 이미지를 링크 박스에 꽉 차게 표시
    object-fit: cover; // 이미지가 링크 박스에 가득 차게 표시
    border-bottom: 2px solid #000; // 이미지 아래에 선 추가
`;
