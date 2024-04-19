"use client";
import Image from "next/image";
import OnboardProgress from "../components/onboardprogress";
import styles from "./Basic-Info.module.scss";
import imageIcon from "../assets/image-icon.png";
// this is the first 'page' of the onBoarding page



export default function BasicInfo(props: {
  handleNext: () => void;
  sendData: ({}) => void;
}) {
  const { handleNext, sendData } = props;
  return (
    <div>
      <div className={styles.cpContainer}>
        <div className={styles.cpBox}>
          <p className={styles.cpInstructionText}>
            Let’s fill out some basic information about yourself.
          </p>
          <div className={styles.cpBasicInfoContainer}>
            <div className={styles.cpBasicInfoLeftContainer}>
              <input
                className={styles.longInputBox}
                placeholder="Display Name"
              ></input>
              <p className={`${styles.cpInstructionSubText} mt-4 mb-1`}>
                {" "}
                General{" "}
              </p>
              <div className={`${styles.inputContainers}`}>
                <input
                  className={styles.longInputBox}
                  placeholder="Birth Date"
                ></input>
                <input
                  className={styles.longInputBox}
                  placeholder="Location"
                ></input>
                <input
                  className={styles.longInputBox}
                  placeholder="Gender"
                ></input>
                <input
                  className={styles.longInputBox}
                  placeholder="Sexual Orientation"
                ></input>
                <input
                  className={styles.longInputBox}
                  placeholder="Height"
                ></input>
                <input
                  className={styles.longInputBox}
                  placeholder="Religion"
                ></input>
                <input
                  className={styles.longInputBox}
                  placeholder="University"
                ></input>
                <input
                  className={styles.longInputBox}
                  placeholder="Year & Major"
                ></input>
                <input
                  className={styles.longInputBox}
                  placeholder="Study Term"
                ></input>
                <input
                  className={styles.longInputBox}
                  placeholder="MBTI"
                ></input>
              </div>
              <input
                className={`${styles.longInputBox}`}
                placeholder="Tags"
              ></input>
              <p className={`${styles.cpInstructionSubText} mt-4`}>Contact</p>
              <input
                className={`${styles.shortInputBox}`}
                placeholder="Phone Number"
              ></input>
              <div className={`${styles.inputContainers}`}>
                <input
                  className={styles.longInputBox}
                  placeholder="Discord Username (optional)"
                ></input>
                <input
                  className={styles.longInputBox}
                  placeholder="Instagram Username (optional)"
                ></input>
              </div>
            </div>

            <div className={styles.cpRightSide}>
              <div className={`${styles.cpImageContainer}`}>
                <div>
                  <Image src={imageIcon} alt="Image Icon" />
                </div>
                <div className="mt-5 mx-3">
                  <p className={styles.cpPhotoInstructions}>
                    Upload or drop an image here for your{" "}
                    <span className={styles.mark}> profile picture </span>{" "}
                  </p>
                  <input
                    className={styles.imgInputBox}
                    type="file"
                    placeholder="Instagram Username (optional)"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={`${styles.cpNextButton} px-4 rounded-3 btn btn-primary mx-3`}
            onClick={() => {
              handleNext();
              sendData({"name": "test"});
            }}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
}
