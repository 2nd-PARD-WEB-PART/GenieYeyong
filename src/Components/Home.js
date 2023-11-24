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
            type: '글로벌리더십',
            nickname: '이지윤',
            text: '글로벌',
        },
        {
            id: 1,
            type: '국제어문',
            nickname: '한오석',
            text: '국제어문',
        },
        {
            id: 2,
            type: '경영경제',
            nickname: '전에벤',
            text: '경영경제',
        },
        {
            id: 3,
            type: '법',
            nickname: '강산길',
            text: '법',
        },
        {
            id: 4,
            type: '커뮤니케이션',
            nickname: '김파드',
            text: '컴케',
        },
        {
            id: 5,
            type: '공간환경시스템',
            nickname: '최느헴',
            text: '공시',
        },
        {
            id: 6,
            type: '기계제어',
            nickname: '박뉴턴',
            text: '기계',
        },
        {
            id: 7,
            type: '상담심리사회복지',
            nickname: '박뉴턴',
            text: '상심',
        },
        {
          id: 8,
          type: '생명과학',
          nickname: '박뉴턴',
          text: '생과',
        }, 
        {
          id: 9,
          type: '전산전자',
          nickname: '박뉴턴',
          text: '전전',
        }, 
        {
          id: 10,
          type: 'ICT창업',
          nickname: '박뉴턴',
          text: 'ICT',
        }, 
        {
          id: 11,
          type: '콘텐츠융합디자인',
          nickname: '박뉴턴',
          text: '콘융디',
        }, 
    ];

    return (
        <>
          <MoveBox>
            <Link to='/gls'>
              <MoneBtn>글로벌리더십학부</MoneBtn>
            </Link>
            <Link to='/Inter'>
              <MoneBtn>국제어문학부</MoneBtn>
            </Link>
            <Link to='/Busi'>
              <MoneBtn>경영경제학부</MoneBtn>
            </Link>
            <Link to='/Commu'>
              <MoneBtn>커뮤니케이션학부</MoneBtn>
            </Link>
            <Link to='/csee'>
              <MoneBtn>전산전자공학부</MoneBtn>
            </Link>
            <Link to='/Ict'>
              <MoneBtn>ICT 창업학부</MoneBtn>
            </Link>
            <Link to='/Law'>
              <MoneBtn>법학부</MoneBtn>
            </Link>
            <Link to='/Life'>
              <MoneBtn>생명과학부</MoneBtn>
            </Link>
            <Link to='/March'>
              <MoneBtn>기계공학부</MoneBtn>
            </Link>
            <Link to='/Psy'>
              <MoneBtn>상담심리사회복지학부</MoneBtn>
            </Link>
            <Link to='/Spac'>
              <MoneBtn>공간환경시스템공학부</MoneBtn>
            </Link>
          </MoveBox>
        </>
      );
}


export default Home;

const MoveBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5%;
`

const MoneBtn = styled.button`
  background-color: lightgray;
  margin: 10px; /* 수정: margin 값을 픽셀로 변경 */
  width: 10;  /* 수정: 일정한 간격으로 버튼 배치 */
  box-sizing: border-box; /* 수정: margin이 너비에 영향을 주지 않도록 설정 */
`

const BigBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
const PListBox = styled.div`
  color: white;
  justify-content: flex-start;
  width: 250px;
  border: 1px solid transparent;
  box-shadow: 5px 5px 10px darkgray;
  border-radius: 15px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => {
        switch (props.type) {
            case '타입1':
                return 'red';
            case '타입2':
                return 'blue';
            case '타입3':
                return 'yellow';
            case '타입4':
                return 'green';
            case '타입5':
                return 'brown';
            case '타입6':
                return 'purple';
            case '타입7':
                return 'pink';
        }
    }};
`
const StarBox = styled.div`
  flex-direction: column;
`
const ListName = styled.div`
  font-weight: bolder;
  font-size: large;
`