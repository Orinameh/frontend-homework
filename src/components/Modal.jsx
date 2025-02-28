import ReactDOM from "react-dom";

const Modal = ({ isShown, children }) => {
  const modal = (
    <div className="fixed w-full h-full top-0 left-0 bottom-0 right-0 z-[500] bg-modal animate-fadeIn">
      {children}
    </div>
  );

  return isShown ? ReactDOM.createPortal(modal, document.getElementById("modal")) : null;
};

export default Modal;
