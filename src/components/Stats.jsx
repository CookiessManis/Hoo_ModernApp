import React from "react";
import { stats } from "../constans";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex flex-row justify-start m-3 items-center"
        >
          <h4
            className={`text-white font-poppins font-semibold xs:text-[40px] text-[30px] leading-[43px]`}
          >
            {stat.value}
          </h4>
          <p
            className={` font-poppins font-semibold xs:text-[20px] text-[15px] leading-[21px] uppercase ml-3 text-gradient`}
          >
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
