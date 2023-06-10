import { useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { Modal, useModal } from "@nextui-org/react";

const ModalProvider = ({ children }) => {
  const initialConfiguration = {
    height: "50vh",
    padding: "0px",
    margin: "0px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    backgroundColor: "#00000000",
    background: "#00000000",
    width: "50vw",
  };

  const [content, setContent] = useState(null);
  const [config, setConfig] = useState(initialConfiguration);
  const { setVisible, bindings } = useModal();

  const openModal = ({ content, config = initialConfiguration }) => {
    setConfig(config);
    setContent(content);
    setVisible(true);
  };

  const closeModal = () => {
    setConfig(initialConfiguration);
    setContent(null);
    setVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      <Modal width={config.width} css={config} {...bindings}>
        {content}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
