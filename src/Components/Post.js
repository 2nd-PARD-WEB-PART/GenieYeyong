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




    const category=[  { cate: "글로벌 리더십", emoji: "😭" },
    { cate: "국제어문", emoji: "🤯" },
    { cate: "경영경제", emoji: "🤔" },
    { cate: "법", emoji: "🤨" },
    { cate: "커뮤니케이션", emoji: "🤨" },
    { cate: "공간환경시스템", emoji: "🤨" },
    { cate: "기계제어", emoji: "🤨" },
    { cate: "생명과학", emoji: "🤨" },
    { cate: "전산전자", emoji: "🤨" },
    { cate: "상담심리사회복지", emoji: "🤨" },
    { cate: "ICT창업", emoji: "🤨" },

];

const categoryToRoute = {
    "글로벌 리더십": "/GLS",
    "국제어문": "/Inter",
    "경영경제": "/Busi",
    "법": "/Law",
    "커뮤니케이션": "/Commu",
    "공간환경시스템": "/Spac",
    "기계제어": "/March",
    "생명과학": "/Life",
    "전산전자": "/csee",
    "상담심리사회복지": "/Psy",
    "ICT창업": "/Ict",

  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    // Here you can also handle the form submission, like sending data to an API
     // Check if any field is empty
     if (!nickname || !writefield || !categorykind) {
        alert('모든 값을 입력해야 한다.'); // Show an alert to the user
        return; // Prevent form submission
    }

    const formData = {
        "nickname": nickname,
        "contents": writefield,
        "type": categorykind,
       
      };

    try{
        const response= await axios.post('http://172.18.140.44:8080/wish2024/wishWrite',formData);
        console.log(response.data);
    }catch(error){
        console.error("Error submitting form:",error);
    }

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

        required/>
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
        required
        />
    <button onClick={handleSubmit}>제출</button>

  




        

    </div>)
}

export default Post;
