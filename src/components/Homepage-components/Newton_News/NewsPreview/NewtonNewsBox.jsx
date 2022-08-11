import react from "react";
import NewtonNewsCard from "./NewtonNewsCard";
import { NewsData } from "../../../../datas/NewsData";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export default function NewsBox() {
  return (
    <div>
      <div className="newsCard">
        {NewsData.map((NewsData) => (
          <NewtonNewsCard
            title={NewsData.title}
            description={
              NewsData.description.length > 140
                ? NewsData.description.substring(0, 139) + "..."
                : NewsData.description
            }
            id={NewsData.id}
            Click
          />
        ))}

        {/* <NewtonNewsCard title="I KILLED UR DAD :)))))" description="sfjiadspfjlasfuka" id="1" Click />
          <NewtonNewsCard title="I KILLED UR DAD :)))))" description="sfjiadspfjlasfuka" id="2" Click />
          <NewtonNewsCard title="I KILLED UR DAD :)))))" description="sfjiadspfjlasfuka" id="3" Click /> */}
      </div>
    </div>
  );
}
