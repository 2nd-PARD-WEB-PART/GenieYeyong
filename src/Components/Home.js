/* disable-eslint */

import React, { useEffect } from "react";
import HomeProblem from "./HomeProblem";
import styled, { keyframes,css } from 'styled-components';
import { useState } from "react";
// Keyframes for moving up animation

const WishList = [
    {
        id: 1,
        type: '건강',
        nickname: '이지윤',
        text: '다리가 부러지지 않게 해 주세요',
    },
    {
        id: 2,
        type: '연애',
        nickname: '김파드',
        text: '더 이상 혼자이고 싶지 않아요',
    },
    {
        id: 3,
        type: '재물',
        nickname: '강산길',
        text: '돈을 많이 벌게 해 주세요',
    },
    {
        id: 4,
        type: '수면',
        nickname: '김파드',
        text: '잠 좀 자게 해주세요',
    },
];

const Home=()=>{
    return(
        <>
            <HomeProblem problem={WishList} />
        </>
    )
}


export default Home;
