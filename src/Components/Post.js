import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
const Post=()=>{

    const [categorykind,setcategorykind]= useState(null);
    const [nickname,setnickname] = useState("");
    const [writefield,setwritefiled] = useState("");
    const [password,setpassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirmation password
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
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; // Prevent form submission
    }

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
        "password":password
       
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

    const handleCancelClick = () => {
        const shouldProceed = window.confirm(
          "임예진한테 죽고 싶습니까?"
        );
    
        if (shouldProceed) {
          navigate(-1); // 뒤로 감
        }
      };
    return(<div>
        <FormDiv>
        <div>닉네임이 뭔가용</div>
        <NicknameDiv>
        <NicknameInput type="text" placeholder="갯춰크레용" onChange={(e)=>
        setnickname(e.target.value)
        
        }
        maxLength={10}

        required/>
        <div>넘어가면 속상해용..(짤려도 모름)</div>
        </NicknameDiv>
        <ScholarDiv>
          <div>학부 선택해봐용</div>
          <ScholarChoiceDiv>
            {category.map((category,index)=>(
                <div 
                key={index}
                onClick={()=>{setcategorykind(category.cate)}}
                >
                    {category.cate}{category.emoji}

                </div>
            ))}
          </ScholarChoiceDiv>
        </ScholarDiv>
        <div>새해 다짐을 적어봐용</div>
        <textarea onChange={(e)=>
        setwritefiled(e.target.value)} 
        maxLength={200}
        required
        />
          <input
                type="text"
                placeholder="Enter password"
                onChange={(e) => setpassword(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
        </FormDiv>
    <button onClick={handleSubmit}>제출</button>
    <button onClick={()=>{navigate(-1)}}>취소</button>

  




        

    </div>)
}

export default Post;


const FormDiv = styled.div`
  width: calc(100vw-170px) ;
  height: 60vh;
  margin-left: 170px;
  background-color: pink;
  display: flex;
  flex-direction: column;
  color: #737373;
  font-family: DungGeunMo;
  font-size: 32.5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

`;

const NicknameDiv = styled.div`
  width: calc(100vw-170px);
  height: 80px;
  background-color: aliceblue;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  color: #737373;
  font-family: DungGeunMo;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ScholarDiv = styled.div`
  width: calc(100vw-170px);
  height: 20vh;
  background-color: gainsboro;
  display: flex;
  flex-direction: column;
`;

const ScholarChoiceDiv = styled.div`
  width: calc(100vw-170px);
  height: 20vh;
  background-color: rebeccapurple;
  display: flex;
  flex-direction: row;
`;




const NicknameInput = styled.input`
  width: 500px;
  height: 60px;
  border: 4px solid #FFB800;
  background: #FFF;
  color: #737373;
  font-family: DungGeunMo;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;