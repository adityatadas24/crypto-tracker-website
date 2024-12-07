import React from "react";
import "./style.css";
import Button from "../../Common/Button";
import gradient from "../../../assets/gradient.png";
import phone from "../../../assets/phone.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Mainpages = () => {
  return (
    <div className="flex-info">
      <div className="tracker-crypto">
        <motion.h1
          className="crypto-1"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="crypto-2"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="crypto-para"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Track crypto through a public api in real time, Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          style={{
            display: "flex",
            gap: "25px",
            position: "relative",
            bottom: "100px",
          }}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div>
            <Link to="/dashboard">
              <Button text={"Dashboard"} />
            </Link>
          </div>
          <div>
            <Button  text={"Share App"} outlined={true} />
          </div>
        </motion.div>
      </div>
      <div className="gradient-mobile">
        <img src={gradient} alt="gradient" className="gradient" />
        <img src={phone} alt="phone" className="iphone" />
      </div>
    </div>
  );
};

export default Mainpages;
