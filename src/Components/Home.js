/* disable-eslint */

import React, { useEffect } from "react";
import HomeProblem from "./HomeProblem";
import styled, { keyframes,css } from 'styled-components';
import { useState } from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
// Keyframes for moving up animation


const Home=()=>{
    const WishList = [
        {
            id: 0,
            type: '타입1',
            nickname: '이지윤',
            text: '다리가 부러지지 않게 해 주세요',
        },
        {
            id: 1,
            type: '타입2',
            nickname: '한오석',
            text: '즐겁게 살고 싶어요',
        },
        {
            id: 2,
            type: '타입3',
            nickname: '전에벤',
            text: '친구가 많아졌으면 좋겠어요',
        },
        {
            id: 3,
            type: '타입4',
            nickname: '강산길',
            text: '돈을 많이 벌게 해 주세요',
        },
        {
            id: 4,
            type: '타입5',
            nickname: '김파드',
            text: '잠 좀 자게 해주세요',
        },
        {
            id: 5,
            type: '타입6',
            nickname: '최느헴',
            text: '수업 좀 끝내주세요',
        },
        {
            id: 6,
            type: '타입7',
            nickname: '박뉴턴',
            text: '과제를 없애주세요',
        },
    ];

    return (
        <>
          <MainDiv>
            <TitleDiv>소원을 말해봐용</TitleDiv>
            <MoveBox>
              <FirstLinket to='/gls'>
                글로벌리더십
              </FirstLinket>
              <FirstLinket to='/Inter'>
                국제어문
              </FirstLinket>
              <FirstLinket to='/Busi'>
                경영경제
              </FirstLinket>
              <FirstLinket to='/Commu'>
                커뮤니케이션
              </FirstLinket>
              <FirstLinket to='/csee'>
                전산전자
              </FirstLinket>
              <FirstLinket to='/Ict'>
                ICT창업
              </FirstLinket>
              <FirstLinket to='/Law'>
                법
              </FirstLinket>
              <FirstLinket to='/Life'>
                생명과학
              </FirstLinket>
              <FirstLinket to='/March'>
                기계공학
              </FirstLinket>
              <FirstLinket to='/Psy'>
                상담심리사회복지
              </FirstLinket>
              <FirstLinket to='/Spac'>
                공간환경시스템
              </FirstLinket>
            </MoveBox>
            <BottomDiv>당신의 학부 페이지에서 나의 다짐을 작성하세요!</BottomDiv>
          </MainDiv>
        </>
      );
}


export default Home;

const FirstLinket=styled(Link)`
  margin-left: 60px;
  text-align: center;
  color: #000;
  font-family: DungGeunMo;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 300px;
  height: 100px;
  flex-shrink: 0;
  background-color: #8F50DF;
  stroke-width: 2px;
  stroke: #000;
`

const MainDiv = styled.div`
  width: 100vw;
  height:100vh;
  margin: 0;
  background-color: #00008A;
  display: flex;
  flex-direction: column;
`;

const TitleDiv = styled.div`
  width: 100vw;
  height:20vh;
  text-align: center;
  padding-top: 60px;
  font-size: 60px;
  color: #FFF;
`;

const BottomDiv = styled.div`
  width: 100vw;
  height:20vh;
  text-align: center;
  font-size: 50px;
  color: #FFF;
`;

const MoveBox = styled.div`
  width: 90vw;
  height: 40vh;
  margin: 0 0 0 -2%;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5%;
`

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
  background-color: #8F50DF;
  stroke-width: 2px;
  stroke: #000;
`;
