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





    const category=[  { id:1, cate: "글로벌 리더십", emoji: "😭" },
    { id:2,cate: "국제어문", emoji: "🤯" },
    { id:3,cate: "경영경제", emoji: "🤔" },
    { id:4,cate: "법", emoji: "🤨" },
    { id:5,cate: "커뮤니케이션", emoji: "🤨" },
    { id:6,cate: "공간환경시스템", emoji: "🤨" },
    { id:7,cate: "기계제어", emoji: "🤨" },
    { id:8,cate: "생명과학", emoji: "🤨" },
    { id:9,cate: "전산전자", emoji: "🤨" },
    { id:10,cate: "상담심리사회복지", emoji: "🤨" },
    { id:11,cate: "ICT창업", emoji: "🤨" },

];
const [activeCategoryId, setActiveCategoryId] = useState(category[0].id);

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
    return(<Div>
        <Updiv>
        <button onClick={()=>{navigate(-1)}}>취소</button>
        <Updivword>소원을 말해봐용</Updivword>
        <img/>

        </Updiv>
        <Line/>
        <Nickname>닉네임이 뭔가용</Nickname>

        <NicknameDiv>
        <NicknameInput type="text" placeholder="닉네임" onChange={(e)=>
        setnickname(e.target.value)
        
        }
        maxLength={10}

        required/>
        <Smallword>넘어가면 속상해용..(짤려도 모름)</Smallword>
        </NicknameDiv>
        <ScholarDiv>
          <div>학부 선택해봐용</div>
          <CategoryContainer>
            {category.map((category,index)=>(
                <CategoryButton
                key={category.id}
                activeCategoryId={activeCategoryId === category.id}
                onClick={() => {
                  setcategorykind(category.cate);
                  setActiveCategoryId(category.id);
                }}
                >
                    {category.cate}

                </CategoryButton>
            ))}
          </CategoryContainer>
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
       
    <button onClick={handleSubmit}>제출</button>


  




        

    </Div>)
}

export default Post;

const CategoryContainer = styled.div`
  display: flex;
  //background: #f3f3f3; // Replace with the color you want
  padding: 10px;
  border-radius: 5px; // Adjust as needed
`;

const CategoryButton = styled.button`
  background: ${({activeCategoryId})=> activeCategoryId ? "#FFB800" : "#D3D3D3"};
  color: ${({activeCategoryId}) => activeCategoryId ? "#FFF" : "#000"};
  text-align: center;
font-family: DungGeunMo;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background: #FFB800;
    color: #FFF;
  }

  &:focus {
    outline: none;
  }
`;

const Div =styled.div`
display: flex;
flex-direction: column;
background-color: #FEFAF8;;

`

const Updiv= styled.div`
display: flex;
flex-direction: row;
width:100%;
height: 95px;
`
const Updivword=styled.div`
width:353px;
padding-left: 31px;
color: #000;
font-family: DungGeunMo;
font-size: 47px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const Line= styled.div`
height: 1px;

background-color: #936A00;
`
const Nickname =styled.div`
margin-top: 67px;
color: #737373;
font-family: DungGeunMo;
font-size: 29px;
font-style: normal;
font-weight: 400;
line-height: normal;
width:218px;
margin-left:140px;
`

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
display: flex;
flex-direction: row;
width: 100%;
`;
const Smallword=styled.div`
margin-left: 12px;
color: #737373;
font-family: DungGeunMo;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 463px;
padding-top: 35px;
`

const ScholarDiv = styled.div`
margin-top: 50px;
  display: flex;
  flex-direction: column;
  margin-left:136px ;
`;

const ScholarChoiceDiv = styled.div`
width:100%;
  display: flex;
  flex-direction: row;
`;

const Scholars = styled.div`
color: #FFF;
text-align: center;
font-family: DungGeunMo;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
  width: auto;
  margin: 5px;
  background-color: aqua;
`;




const NicknameInput = styled.input`
margin-left: 136px;
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