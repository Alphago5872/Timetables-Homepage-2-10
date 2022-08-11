import Quotes from "../components/Dev-credits/Quotes/Quotes";
import DevProfile from "../components/Dev-credits/DevProfile";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

const Devs = [
  {
    devName: "Dhanuphon Boriboonsub",
    img: "./images/members/earth.png",
    position: "Executive",
    jobs: ["Project Evaluator", "Operations Director", "Quality Controller"],
  },
  {
    devName: "Thonnisorn Choochaisangrat",
    position: "Supervisor",
    img: "./images/members/june.png",
    jobs: ["Project Supervisor", "Operations Director", "Quality Controller"],
  },
  {
    devName: "Prawich Thawansakdivudhi",
    position: "Year 11 - Medical",
    img: "./images/members/prawich.png",

    jobs: ["Project Director", "Lead Backend Engineer", "Operations Director"],
  },
  {
    devName: "Nutnornont Chamadol",
    position: "Year 12 - Com / AI",
    img: "./images/members/nont.png",

    jobs: ["Project Manager", "Lead Designer", "Frontend Developer"],
  },
  {
    devName: "Koramist Samorapoom",
    position: "Year 10",
    img: "./images/members/ongsa.jpg",

    jobs: ["Lead Frontend Developer", "UX / UI Designer"],
  },
  {
    devName: "Kittikhom Kriamorn",
    position: "Year 10",
    img: "./images/members/alpha.png",

    jobs: ["Frontend Developer", "UX / UI Designer"],
  },
  {
    devName: "Pattakit Charoensedtakul",
    position: "Year 12 - Com / AI",
    img: "./images/members/boss.png",

    jobs: ["Backend Developer"],
  },
  {
    devName: "Piyawat Thanut-theerapat",
    img: "./images/members/villy.jpg",
    jobs: ["Participator"],
    position: "Year 12 - Com / AI",
  },
];

const DevCredits = () => {
  return (
    <>
      <WebCard>
        <Quotes />
        <div className="developers">
          <div className="developers__wrapper">
            {Devs.map((dev) => (
              <DevProfile
                name={dev.devName}
                position={dev.position}
                jobs={dev.jobs && dev.jobs}
                img={dev.img}
              />
            ))}
          </div>
        </div>
      </WebCard>
    </>
  );
};

export default DevCredits;
