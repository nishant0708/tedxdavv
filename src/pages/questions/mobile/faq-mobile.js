import React, { useEffect, useRef, useState } from "react";
import styles from "./styleMobile.module.css";
import faq from "../FAQs.png";
import bg from "./lines(traced).png";
import gif from ".././FAQ.gif";


const StickyScroll2 = ({ content }) => {
    const videoRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState(0);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
    const handleButtonClick = (index) => {
        setSelectedQuestionIndex(index);
    };

    const handleOptionChange = (event) => {
        const selectedIndex = parseInt(event.target.value, 10);
        setSelectedOption(selectedIndex);
    };

    return (
        <div>
            <div className={styles.hero}>
                <div id="faq" className={styles.faq}>
                    <img src={faq} alt="FAQs" />
                </div>

                <div id="questions">
                    <select
                        className={styles.Question}
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <option value="0">{content[0].title}</option>
                        <option value="1">{content[1].title}</option>
                        <option value="2">{content[2].title}</option>
                        <option value="3">{content[3].title}</option>
                        <option value="4">{content[4].title}</option>
                        <option value="5">{content[5].title}</option>
                    </select>
                </div>

                <div className={styles.Answers}>
                    <div className="w-full p-1">
                        {selectedQuestionIndex !== null && (
                            <p> {content[selectedOption].description}</p>
                        )}
                    </div>
                </div>
                <div className={styles.hero_video} ref={videoRef}>
                    <div className={styles.mtopBGif}></div>
                    <img src={gif} alt="GIF.." className={styles.mgif} />
                </div>
            </div>
        </div>
    );
};

export default StickyScroll2;
