import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dragon from "../Assets/Dragon.png";
import Arrow from "../Assets/arrow-left.png";
import Submit from "../Assets/submit.png";
import Modal from "react-modal";
import cancel from "../Assets/취소.png";
import Middleimg from "../Assets/취소이미지.png";
import Middlewrite from "../Assets/문구.png";
import MiddleOK from "../Assets/확인.png";
import "../App.css";

// 아래 정리
const Post = () => {
    const [categorykind, setcategorykind] = useState(null);
    const [nickname, setnickname] = useState("");
    const [writefield, setwritefiled] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirmation password
    const navigate = useNavigate();

    const category = [
        { id: 1, cate: "글로벌리더십", emoji: "😭" },
        { id: 2, cate: "국제어문", emoji: "🤯" },
        { id: 3, cate: "경영경제", emoji: "🤔" },
        { id: 4, cate: "법", emoji: "🤨" },
        { id: 5, cate: "커뮤니케이션", emoji: "🤨" },
        { id: 6, cate: "공간환경시스템", emoji: "🤨" },
        { id: 7, cate: "기계제어", emoji: "🤨" },
        { id: 8, cate: "생명과학", emoji: "🤨" },
        { id: 9, cate: "전산전자", emoji: "🤨" },
        { id: 10, cate: "상담심리사회복지", emoji: "🤨" },
        { id: 11, cate: "ICT창업", emoji: "🤨" },
        { id: 12, cate: "콘텐츠융합디자인", emoji: "🤨" },
    ];
    const [activeCategoryId, setActiveCategoryId] = useState(category[0].id);

    const categoryToRoute = {
        글로벌리더십: "/gls",
        국제어문: "/Inter",
        경영경제: "/Busi",
        법: "/Law",
        커뮤니케이션: "/Commu",
        공간환경시스템: "/Spac",
        기계제어: "/March",
        생명과학: "/Life",
        전산전자: "/csee",
        상담심리사회복지: "/Psy",
        ICT창업: "/Ict",
        콘텐츠융합디자인: "/Condi",
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return; // Prevent form submission
        }

        // Here you can also handle the form submission, like sending data to an API
        // Check if any field is empty
        if (!nickname || !writefield || !categorykind) {
            alert("모든 값을 입력해야 한다."); // Show an alert to the user
            return; // Prevent form submission
        }

        const formData = {
            nickname: nickname,
            contents: writefield,
            type: categorykind,
            password: password,
        };

        try {
            const response = await axios.post("http://172.18.140.44:8080/wish2024/wishWrite", formData);
            console.log(response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
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
        const shouldProceed = window.confirm("임예진한테 죽고 싶습니까?");

        if (shouldProceed) {
            navigate(-1); // 뒤로 감
        }
    };
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <Div>
            <Updiv>
                <BackArrowImg src={Arrow} alt="화살표" onClick={openModal} />
                <Updivword>다짐을 말해봐용</Updivword>
                <DragonImg src={Dragon} alt="dragon" />
            </Updiv>
            <Line />
            <Nickname>닉네임이 뭔가용</Nickname>

            <NicknameDiv>
                <NicknameInput type="text" placeholder="닉네임" onChange={(e) => setnickname(e.target.value)} maxLength={10} required />
                <Smallword>넘어가면 속상해용..(짤려도 모름)</Smallword>
            </NicknameDiv>
            <ScholarDiv>
                <ScholarChoice>학부 선택해봐용</ScholarChoice>
                <CategoryContainer>
                    {category.map((category, index) => (
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

            <NewYear>
                <NewYearWord>새해 다짐을 적어봐용</NewYearWord>
                <NewYearInput type="text" placeholder="ex.컴활1급 자격증 따기" onChange={(e) => setwritefiled(e.target.value)} maxLength={200} required />
            </NewYear>
            <PasswordDiv>
                <Password>
                    <PasswordWord>비밀번호 적어용 (15자 이내)</PasswordWord>
                    <PasswordInput type="text" placeholder="Enter password" onChange={(e) => setpassword(e.target.value)} required />
                </Password>
                <CheckPassword>
                    <PasswordWord>비밀번호 확인해용</PasswordWord>
                    <CheckPasswordInput type="text" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                </CheckPassword>
            </PasswordDiv>
            <SubmitDiv>
                <SubmitImg src={Submit} alt="" onClick={handleSubmit} />
            </SubmitDiv>

            <Modal
                isOpen={modalIsOpen}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0,0.5)",
                    },
                    content: {
                        padding: 0,
                        color: "black",
                        background: `#D9D9D9`,
                        backgroundSize: "cover",
                        // backgroundRepeat: "no-repeat",
                        margin: "0 auto",
                        width: "855px",
                        height: "284px",
                        display: "flex",
                        border: "none",
                        //alignItems: "center",
                        overflowY: "hidden",

                        display: "flex",
                        flexDirection: "column",
                        overflowY: "auto",

                        //position: 'absolute', // absolute positioning
                        left: "50%", // center the modal horizontally
                        top: "53%", // center the modal vertically
                        transform: "translate(-50%, -50%)", // center the modal
                        //모달 내용이 부모 요소의 높이를 초과하면 자동으로 스크롤 바를 생성하도록 설정합니다. "overflowY: 'auto'"가 그 역할을 담당합니다.

                        // 또한, 모달의 높이(height)를 조정하여 모달의 내용이 충분하지 않을 경우 모달 자체의 높이를 줄일 수 있습니다.
                    },
                }}
            >
                <ModalDiv>
                    <Imgcancel src={cancel} onClick={closeModal} />
                </ModalDiv>
                <ModalMiddle>
                    <MiddleImg src={Middleimg} />
                    <MiddleWrite src={Middlewrite} />
                    <Middleok
                        src={MiddleOK}
                        onClick={() => {
                            navigate(-1);
                        }}
                    />
                </ModalMiddle>
            </Modal>
        </Div>
    );
};

export default Post;

const MiddleImg = styled.img`
    width: 87px;
    height: 87px;
    margin-left: 85px;
`;
const MiddleWrite = styled.img`
    padding-top: 15px;
    padding-left: 27px;
    width: 400px;
    height: 52px;
`;
const Middleok = styled.img`
    padding-left: 48px;
    width: 94px;
    height: 44px;
    cursor: pointer;
    padding-top: 12px;
`;
const CategoryContainer = styled.div`
    width: 85%;
    margin-left: -15px;
    width: 85%;
    margin-left: -15px;
    display: flex;
    flex-wrap: wrap;
    //background: #f3f3f3; // Replace with the color you want
    border-radius: 5px; // Adjust as needed
`;

const CategoryButton = styled.button`
    background: ${({ activeCategoryId }) => (activeCategoryId ? "#FFB800" : "#FFF")};
    color: ${({ activeCategoryId }) => (activeCategoryId ? "#FFF" : "#AAA")};
    border: ${({ activeCategoryId }) => (activeCategoryId ? "none" : "2px solid #BFBFBF")};
    text-align: center;
    font-family: DungGeunMo;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    margin: 10px;
    margin: 10px;
    transition: background-color 0.3s, color 0.3s;
    padding: 7px 24px;
    padding: 7px 24px;

    &:hover {
        background: #ffb800;
        color: #fff;
    }

    &:focus {
        outline: none;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fefaf8;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
`;

const ModalDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%; // This should ensure that the div takes full width
    box-sizing: border-box; // This makes sure padding and borders are included in the width
    height: 44px;
    background: #9b9b9b;
    border-bottom: 3px solid #000;
    //margin-top: -20px; // Be cautious with negative margins, they can affect the layout
`;

const ModalMiddle = styled.div`
    width: 100%;
    padding-top: 45px;
    display: flex;
    flex-direction: row;
`;
const Imgcancel = styled.img`
    padding-top: 15px;
    padding-left: 815px;
    width: 16px;
    height: 16px;
    cursor: pointer;
`;

const Updiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 95px;
    align-items: center;
`;
const BackArrowImg = styled.img`
    margin-left: 30px;
    margin-left: 30px;
    width: 47px;
    height: 47px;
    flex-shrink: 0;
`;
const Updivword = styled.div`
    width: 353px;
    padding-left: 31px;
    color: #000;
    font-family: DungGeunMo;
    font-size: 47px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const DragonImg = styled.img`
    margin-left: 20px;
    padding-bottom: 10px;
    margin-left: 20px;
    padding-bottom: 10px;
    width: 56.036px;
    height: 59.9px;
    flex-shrink: 0;
`;
const Line = styled.div`
    height: 1px;

    background-color: #936a00;
`;
const Nickname = styled.div`
    margin-top: 67px;
    color: #737373;
    font-family: DungGeunMo;
    font-size: 29px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 218px;
    margin-left: 140px;
`;

const FormDiv = styled.div`
    width: calc(100vw-170px);
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
const Smallword = styled.div`
    margin-left: 12px;
    color: #737373;
    font-family: DungGeunMo;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 463px;
    padding-top: 45px;
    padding-top: 45px;
`;

const ScholarDiv = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    margin-left: 136px;
`;

const ScholarChoice = styled.div`
    color: #737373;
    font-family: DungGeunMo;
    font-size: 29.5px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const NewYear = styled.div`
    margin-left: 136px;
    margin-top: 50px;
`;

const NewYearWord = styled.div`
    color: #737373;
    font-family: DungGeunMo;
    font-size: 29.5px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const NewYearInput = styled.textarea`
    margin-top: 10px;
    width: 794px;
    height: 190px;
    flex-shrink: 0;
    border: 4px solid #ffb800;
    background: #fff;
    padding-top: 13px;
    font-family: DungGeunMo;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    &::placeholder {
        padding-top: 13px;
        font-family: DungGeunMo;
        font-size: 34px;
        font-style: normal;
        font-weight: 400;

        color: #d1d1d1;
        padding-left: 20px;
    }
`;

const NicknameInput = styled.input`
    margin-top: 10px;
    margin-top: 10px;
    margin-left: 136px;
    width: 500px;
    height: 50px;
    height: 50px;
    border: 4px solid #ffb800;
    background: #fff;
    font-family: DungGeunMo;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::placeholder {
        color: #d1d1d1;
        padding-left: 20px;
        padding-left: 20px;
    }
`;

const PasswordDiv = styled.div`
    margin-top: 50px;
    margin-left: 136px;
    display: flex;
    flex-direction: row;
`;

const Password = styled.div`
    display: flex;
    flex-direction: column;
`;
const PasswordInput = styled.input`
    margin-top: 10px;
    margin-top: 10px;
    width: 479px;
    height: 50px;
    height: 50px;
    flex-shrink: 0;
    border: 3px solid #ffb800;
    background: #fff;
    font-family: DungGeunMo;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::placeholder {
        color: #d1d1d1;
        padding-left: 20px;
        padding-left: 20px;
    }
`;
const CheckPasswordInput = styled.input`
    margin-top: 10px;
    margin-top: 10px;
    width: 479px;
    height: 50px;
    height: 50px;
    flex-shrink: 0;
    border: 3px solid #ffb800;
    background: #fff;
    font-family: DungGeunMo;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::placeholder {
        color: #d1d1d1;
        padding-left: 20px;
        padding-left: 20px;
    }
`;

const CheckPassword = styled.div`
    margin-left: 90px;
    display: flex;
    flex-direction: column;
`;
const PasswordWord = styled.div`
    color: #737373;
    font-family: DungGeunMo;
    font-size: 29.5px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const SubmitDiv = styled.div`
    width: 100%;
`;

const SubmitImg = styled.img`
    cursor: pointer;
    margin-left: 80%;
    width: 273.267px;
    height: 84.444px;
    flex-shrink: 0;
`;
