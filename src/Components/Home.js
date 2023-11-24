/* disable-eslint */

import React, { useEffect } from "react";
import HomeProblem from "./HomeProblem";
import styled, { keyframes,css } from 'styled-components';
import { useState } from "react";
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
        <div>
          <h4>{WishList.length} 개의 소원이 있습니다</h4>
          <BigBox>
            {WishList.map((it) => (
              <PListBox key={it.id} type={it.type}>
                <StarBox>
                  <ListName>{it.text}</ListName>
                  <ListName>by {it.nickname}</ListName>
                </StarBox>
              </PListBox>
            ))}
          </BigBox>
        </div>
      );
}


export default Home;

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