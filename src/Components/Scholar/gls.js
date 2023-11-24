import React from "react";
import { useState } from "react";
import Modal from "react-modal";

const Gls=()=>{
    const [modalIsOpen, setModalIsOpen] = useState(false);
    

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
    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
    setModalIsOpen(false);
};
    return(
        <>
        {WishList.map((inform)=>
        (
            <div key={inform.id} onClick={openModal}>
                {inform.type}
            </div>

        ))}
        <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
                    style={{
                      overlay: {
                        backgroundColor: "rgba(0, 0, 0,0.5)",
                      },
                      content: {
                        color: "black",
                        background: `white`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        margin: "0 auto",
                        width: "60%",
                        height: "70%",
                        display: "flex",
                        border: "none",
                        alignItems: "center",
                        overflowY: "hidden",
                        borderRadius: "13px",
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
   
          {WishList && (
            <>
              <h2>{WishList.type}</h2>
              <p>{WishList.nickname}</p>
              <p>{WishList.text}</p>
              {/* 여기에 이미지와 비디오 등의 추가적인 내용을 표시할 수 있습니다. */}
            </>
          )}
          
          <button onClick={closeModal}>Close</button>

      </Modal>
        
        </>
    )
}


export default Gls;