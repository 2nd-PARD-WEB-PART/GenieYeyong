import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState,useEffect } from "react";

const Post=()=>{

    const [categorykind,setcategorykind]= useState(null);
    const [nickname,setnickname] = useState("");
    const [writefield,setwritefiled] = useState("");




    const category=[  { cate: "사랑", emoji: "😭" },
    { cate: "가족", emoji: "🤯" },
    { cate: "우정", emoji: "🤔" },
    { cate: "성취", emoji: "🤨" },
    { cate: "재물", emoji: "🤨" },
    { cate: "건강", emoji: "🤨" },
    { cate: "행운", emoji: "🤨" },

];
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

        <input type="submit" value="제출"/>




        

    </div>)
}

export default Post;
