import React from "react";
import HomeProblem from "../HomeProblem";


const Gls=()=>{
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

    return(
        <>
            <HomeProblem problem={WishList}></HomeProblem>
        </>
    )
}


export default Gls;