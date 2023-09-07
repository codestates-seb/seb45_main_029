import styled from 'styled-components';

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const ModalContent = styled.div`
  width: 560px;
  height: 315px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function Modal({ isModalOpen, setModalOpen, list, listIndex }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <ModalBackground onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {/* <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/ZFCuBTyW0so?si=V44HsQjYHFXdiuiT'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe> */}
            <img src={list[listIndex]} />
          </ModalContent>
        </ModalBackground>
      )}
    </div>
  );
}
