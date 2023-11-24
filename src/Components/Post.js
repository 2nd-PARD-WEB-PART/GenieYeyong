import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
const Post=()=>{

    const [categorykind,setcategorykind]= useState(null);
    const [nickname,setnickname] = useState("");
    const [writefield,setwritefiled] = useState("");
    const navigate = useNavigate();




    const category=[  { cate: "글로벌 리더십 학부", emoji: "😭" },
    { cate: "국제어문학부", emoji: "🤯" },
    { cate: "경영경제학부", emoji: "🤔" },
    { cate: "법학부", emoji: "🤨" },
    { cate: "커뮤니케이션학부", emoji: "🤨" },
    { cate: "공간환경시스템학부", emoji: "🤨" },
    { cate: "기계제어공학부", emoji: "🤨" },
    { cate: "생명과학부", emoji: "🤨" },
    { cate: "전산전자공학부", emoji: "🤨" },
    { cate: "상담심리사회복지학부", emoji: "🤨" },
    { cate: "ICT창업학부", emoji: "🤨" },

];

const categoryToRoute = {
    "글로벌 리더십 학부": "/GLS",
    "국제어문학부": "/Inter",
    "경영경제학부": "/Busi",
    "법학부": "/Law",
    "커뮤니케이션학부": "/Commu",
    "공간환경시스템학부": "/Spac",
    "기계제어공학부": "/March",
    "생명과학부": "/Life",
    "전산전자공학부": "/csee",
    "상담심리사회복지학부": "/Psy",
    "ICT창업학부": "/Ict",

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can also handle the form submission, like sending data to an API

    // Navigate to the corresponding route
    const route = categoryToRoute[categorykind];
    if (route) {
      navigate(route);
    }
  };
    console.log(categorykind);
    console.log(nickname);
    console.log(writefield);
    return(<div>
        <input type="text" onChange={(e)=>
        setnickname(e.target.value)
        
        }
        maxLength={10}
        />
        <div>{category.map((category,index)=>(
            <div 
            key={index}
            onClick={()=>{setcategorykind(category.cate)}}
            >
                {category.cate}{category.emoji}

            </div>
        ))}</div>

        <textarea onChange={(e)=>
        setwritefiled(e.target.value)} 
        maxLength={200}
        />
    <button onClick={handleSubmit}>제출</button>

  




        

    </div>)
}

export default Post;
