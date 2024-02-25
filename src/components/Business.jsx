import React from "react";
import { features } from "../constans";
import styles, { layout } from "../style";
import Button from "./Button";
const Business = () => {
  return (
    <section id="features" className={`${layout.sectionInfo}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" /> we'II handle
          the money.
        </h2>
        <p className={`${styles.paragraph}`}>
          with the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market
        </p>
      </div>
    </section>
  );
};

export default Business;
