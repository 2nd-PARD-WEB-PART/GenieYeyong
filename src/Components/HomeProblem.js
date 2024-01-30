/* eslint-disable */

import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import cancel from "../Assets/취소.png";

const HomeProblem = ({ problem }) => {
    const [selectedProblem, setSelectedProblem] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [filteredProblems, setFilteredProblems] = useState(null); // 추가된 부분
    const [deleteButtonActive, setDeleteButtonActive] = useState(false);
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/"); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
    };

    const openModal = (problem) => {
        setSelectedProblem(problem);
    };

    const closeModal = () => {
        setSelectedProblem(null);
    };

    const handleSearch = () => {
        const filteredProblems = searchValue ? problem.filter((it) => it.password === searchValue) : problem;

        setFilteredProblems(filteredProblems);
    };

    const handleDelete = (password, id) => {
        if (!deleteButtonActive) {
            return;
        }
        axios
            .delete(`http://172.18.140.44:8080/wish2024/deleteWish/${id}`, {
                data: { password: password },
            })
            .then((response) => {
                console.log("삭제되었습니다.", response);
                // 삭제가 완료된 후 상태 업데이트 및 페이지 리렌더링
                const updatedProblems = filteredProblems ? filteredProblems.filter((it) => it.id !== id) : problem.filter((it) => it.id !== id);

                setFilteredProblems(updatedProblems);

                // 모달 창 닫기
                closeModal();
            })
            .catch((error) => {
                console.error("삭제 중 오류가 발생했습니다.", error);
                console.error("ID", id);
                console.error("PW", password);
            });
    };

    return (
        <Back>
            <div className="Problem">
                <Header>
                    <Prev onClick={goBack} />
                    {problem.length > 0 && <Major>{problem[0].type}</Major>}
                    <TitleImg src={"./img/용용이.png"} />
                    <Dummy> </Dummy>
                    <SearchText>내가 쓴 글 찾아용</SearchText>
                    <PwdSearch>
                        <InputPwd onChange={(e) => setSearchValue(e.target.value)} />
                        <Search onClick={handleSearch} />
                    </PwdSearch>
                </Header>

                <Body>
                    <BigBox>
                        {filteredProblems
                            ? filteredProblems.map((it) => (
                                  <PListBox key={it.id} type={it.type} onClick={() => openModal(it)}>
                                      <StarBox>
                                          <ListName>{it.text}</ListName>
                                      </StarBox>
                                  </PListBox>
                              ))
                            : problem.map((it) => (
                                  <PListBox key={it.id} type={it.type} onClick={() => openModal(it)}>
                                      <StarBox>
                                          <ListName>{it.text}</ListName>
                                      </StarBox>
                                  </PListBox>
                              ))}
                    </BigBox>

                    {/* <GoPost /> */}

                    <FirstLinket to="/Post">
                        <LinkImage src={"./img/작성버튼.png"} />
                    </FirstLinket>

                    {selectedProblem && (
                        <Modal
                            isOpen={true}
                            onRequestClose={closeModal}
                            style={{
                                overlay: {
                                    backgroundColor: "transparent",
                                },
                                content: {
                                    color: "black",
                                    background: "none",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    margin: "0 auto",
                                    width: "1600px", // 가로는 60%의 viewport width
                                    height: "673px", // 세로는 60%의 viewport height
                                    display: "flex",
                                    border: "none",
                                    alignItems: "center",
                                    overflowY: "hidden",

                                    // borderRadius: "13px",
                                    display: "flex",
                                    flexDirection: "column",
                                    overflowY: "auto",
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                },
                            }}
                        >
                            {/* 여기부터는 모달 내부 내용 */}
                            <ModalBack>
                                <ModalHead>
                                    <ModalName>{selectedProblem.nickname}</ModalName>
                                    <ModalClose src={cancel} onClick={closeModal} />
                                </ModalHead>

                                <Modaltext>{selectedProblem.contents}</Modaltext>
                                <PwdSearch1>
                                    <Pwdtext>비밀번호 : </Pwdtext>
                                    <InputPwd
                                        onChange={(e) => {
                                            setSearchValue(e.target.value);
                                            // 비밀번호가 일치하는지 확인하여 Search 버튼 활성화
                                            setDeleteButtonActive(e.target.value === selectedProblem.password);
                                        }}
                                        style={{ fontFamily: "DungGeunMo", alignItems: "center", justifyContent: "center", paddingTop: "1.5%" }}
                                    />
                                    <Delete
                                        style={{ backgroundColor: deleteButtonActive ? "red" : "gray" }}
                                        onClick={() => handleDelete(selectedProblem.password, selectedProblem.id)}
                                    ></Delete>
                                </PwdSearch1>
                                <br />
                            </ModalBack>
                        </Modal>
                    )}
                </Body>
                {problem.length === 0 && (
                    <h1>
                        불러온 데이터가 없습니다
                        <br />
                        김채린 마우스 압수
                    </h1>
                )}
            </div>
        </Back>
    );
};

HomeProblem.defaultProps = {
    problem: [],
};

export default HomeProblem;

const Pwdtext = styled.div`
    color: #000;
    text-align: center;
    font-family: DungGeunMo;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 270px;
`;
const Modaltext = styled.div`
    color: #000;
    margin-top: -80px;
    font-family: DungGeunMo;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;

    margin-left: 40px;
`;

const PwdSearch = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3vh;
    height: 50px;
`;

const PwdDelete = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3vh;
    height: 50px;
`;

const PwdSearch1 = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 370px;
    height: 50px;
`;
const InputPwd = styled.textarea`
    background-image: url("/img/입력창.png");
    background-size: cover;
    width: fit-content;
    height: fit-content;
    margin-right: 10px;
    margin-left: 10px;
    color: #000;
    text-align: center;
    font-family: DungGeunMo;
    line-height: normal;
    font-style: normal;
    font-weight: 400;
`;
const Delete = styled.button`
    height: 35px;
    width: 35px;
    background-image: url("/img/삭제버튼.png");
    background-size: 30px 30px; // 원하는 크기로 조절
`;
const Search = styled.button`
    height: 35px;
    width: 35px;
    background-image: url("/img/찾기.png");
    background-size: 30px 30px; // 원하는 크기로 조절
`;

const Header = styled.div`
    height: 9vh;
    background-color: white;
    display: flex;
    flex-direction: row;
`;
const Prev = styled.div`
    background: url("./img/back.png") no-repeat;
    background-size: cover;
    margin: 25px;
    width: 47px;
    height: 47px;
    cursor: pointer;
`;
const Major = styled.div`
    margin: 25px;
    width: auto;
    height: 47px;
    font-size: 50px;
    font-family: "DungGeunMo";
`;
const BigBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const PListBox = styled.div`
    cursor: pointer;
    color: white;
    justify-content: flex-start;
    width: 100px;
    height: 100px;
    margin: 2%;
    margin-top: 7%;
    padding: 3%;
    display: flex;
    flex-direction: row;
    background-image: ${(props) => {
        switch (props.type) {
            case "글로벌리더십":
                return 'url("/img/복주머니/Gls.png")';
            case "국제어문":
                return 'url("/img/복주머니/국제어문.png")';
            case "경영경제":
                return 'url("/img/복주머니/경경.png")';
            case "법":
                return 'url("/img/복주머니/법.png")';
            case "커뮤니케이션":
                return 'url("/img/복주머니/컴케.png")';
            case "공간환경시스템":
                return 'url("/img/복주머니/공시.png")';
            case "기계제어":
                return 'url("/img/복주머니/기계.png")';
            case "상담심리사회복지":
                return 'url("/img/복주머니/상사.png")';
            case "생명과학":
                return 'url("/img/복주머니/생명.png")';
            case "전산전자":
                return 'url("/img/복주머니/전전.png")';
            case "ICT창업":
                return 'url("/img/복주머니/ICT.png")';
            case "콘텐츠융합디자인":
                return 'url("/img/복주머니/콘융디.png")';
            default:
                return "gray";
        }
    }};
    background-size: 210px 230px;
`;
const StarBox = styled.div`
    flex-direction: column;
`;
const ListName = styled.div`
    font-weight: bolder;
    font-size: large;
`;
const Body = styled.div`
    background-color: transparent;
`;
const Back = styled.div`
    background: url("./img/학부배경.jpeg") no-repeat;
    width: 100vw; // 전체 화면 너비
    height: 100vh; // 전체 화면 높이
    background-size: cover; // 이미지가 컨테이너에 맞게 cover되도록 설정
`;
const TitleImg = styled.img`
    margin-top: 17px;
    width: 56px; // 이미지를 링크 박스에 꽉 차게 표시
    height: 59px; // 이미지를 링크 박스에 꽉 차게 표시
    object-fit: cover; // 이미지가 링크 박스에 가득 차게 표시
`;

const ModalBack = styled.div`
    background-image: url("/img/모달배경.png");
    width: 700px;
    height: 600px;
`;

const ModalHead = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 20vh;
    margin-top: 3%;
    padding-left: 5%;
    //justify-content: space-between;
`;
const LinkImage = styled.img`
    margin-top: 40vh;
    margin-left: 80vw;
    background-image: url("/img/작성버튼.png");
    background-size: cover;
    width: 284px;
    height: 98px;
`;

const GoPost = styled.button`
    margin-top: 45vh;
    margin-left: 80vw;
    background-image: url("/img/작성버튼.png");
    background-size: cover;
    width: 284px;
    height: 98px;
`;

const FirstLinket = styled(Link)``;
const SearchText = styled.div`
    margin-top: 35px;
    margin-right: 10px;
    color: #737373;
    font-size: 30px;
    font-family: "DungGeunMo";
    width: fit-content;
`;
const Dummy = styled.div`
    width: 45vw;
`;

const ModalName = styled.div`
    width: 200px;
    font-size: 30px;
    font-family: "DungGeunMo";
`;
const ModalClose = styled.img`
    cursor: pointer;
    width: 14px;
    height: 14px;
    margin-left: 420px;
    //background-image: url('/img/닫기.png');
`;
