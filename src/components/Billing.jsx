import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
        Easily Control Your <br className="sm:block hidden" /> Billing &
        Invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolor ipsa
        omnis sit. Nostrum nihil soluta non natus, maiores blanditiis.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="Apps_store"
          className="w-[128px] h-[42px] object-contain"
        />
        <img
          src={google}
          alt="Google_store"
          className="w-[128px] h-[42px] object-contain"
        />
      </div>
    </div>
  </section>
);

export default Billing;
