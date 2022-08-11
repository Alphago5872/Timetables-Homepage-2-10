import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const ErrorPage = (props) => {
  const [errorMessage, setErrorMessage] = useState();
  const [errorHeader, setErrorHeader] = useState();
  const [errorCode, setErrorCode] = useState(props.errorCode);
  const location = useLocation();

  switch (errorCode) {
    case 404:
      setErrorMessage(`The page ${location.pathname} does not exist`);
      setErrorHeader("Not Found");
      break;
    default:
      setErrorMessage(`The page ${location.pathname} does not exist`);
      setErrorHeader("Fallback Error Page");
      break;
  }

  return (
    <>
      <h1 className="Error__Code">
        {errorCode} - {errorHeader}
      </h1>
      <p className="Error__Message">{errorMessage}</p>
      <Link to="/">
        <button className="Error__Button">Go Home</button>
      </Link>
    </>
  );
};

export default ErrorPage;
