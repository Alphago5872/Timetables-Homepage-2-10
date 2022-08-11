const Modal = (props) => {
  console.log(props);
  return (
    <>
      {/* <div className="overlay"></div */}
      {/* <div className="modal__content"></div> */}
      {props.children}
    </>
  );
};

export default Modal;
