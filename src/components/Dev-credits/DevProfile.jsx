import { motion } from "framer-motion";

const DevProfile = (props) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 0.3,
        // stiffness: 100,
        // damping: 60,
      }}
      className="developers__profile"
    >
      <div>
        <img src={props.img} />
      </div>
      <div>
        <h1>{props.name}</h1>
        {props.jobs && props.jobs.map((job) => <h3>{job}</h3>)}
        <h2>{props.position}</h2>
      </div>
      {/* <div className="developers__social">
        <h4>Hello</h4>
        <h4>Hello</h4>
      </div> */}
      {/* <div className="developers__social"> */}
      {/* <ul> */}
      {/* <li> */}
      {/* <i class='bx bxl-instagram'></i> */}
      {/* </li> */}
      {/* </ul> */}
      {/* </div> */}
    </motion.div>
  );
};

export default DevProfile;
