"use client";

import React, { useState, useCallback, ChangeEvent } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import styles from "./Basic-Info.module.scss";
import imageIcon from "../assets/image-icon.png";
// this is the first 'page' of the onBoarding page

function InputBox(props: {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string; // default type will be reg. input box
  options?: string[];
}) {
  const { placeholder, onChange } = props;
  const [value, setValue] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  if (props.type === "select") {
    return (
      <select
        className={`${styles.longInputBox} ${
          value === "" ? styles.defaultSelect : ""
        }`}
        value={value}
        onChange={handleChange}
      >
        <option className={styles.disabledOption} value="" disabled>
          {placeholder}
        </option>
        {props.options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  } else {
    return (
      <input
        className={styles.longInputBox}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    );
  }
}
const Terms = [
  "1A",
  "1B",
  "2A",
  "2B",
  "3A",
  "3B",
  "4A",
  "4B",
  "5A",
  "5B",
  "Other",
];
const mbtiTypes = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];
const locations = [
  "Toronto",
  "Waterloo",
  "Brampton",
  "Markham",
  "Oakville",
  "Missisauga",
  "Vancouver",
  "Edmonton",
  "Calgary",
  "Other (in Canada)",
  "Other (outside of Canada)",
  "Piss middle of nowhere",
];
const sexualOrientations = [
  "straight",
  "gay",
  "bisexual",
  "pansexual",
  "other",
];
const gender = ["male", "female", "other"];

export default function BasicInfo(props: {
  handleNext: () => void;
  sendData: ({}) => void;
}) {
  const { handleNext, sendData } = props;

  const [data, setData] = useState({
    displayName: "",
    birthDate: "",
    location: "",
    gender: "",
    sexualOrientation: "",
    height: "",
    religion: "",
    university: "",
    yearAndMajor: "",
    studyTerm: "",
    mbti: "",
    tags: "",
    phoneNumber: "",
    discordUsername: "",
    instagramUsername: "",
  });
  const [photo, setPhoto] = useState<File | undefined>(undefined);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    if (acceptedFiles.length > 6) {
      acceptedFiles = acceptedFiles.slice(0, 6);
    }
    setPhoto(acceptedFiles[0]);
  }, []);

  const { getRootProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxSize: 1920 * 1080,
  });
  return (
    <div className={styles.main}>
      <div className={styles.cpContainer}>
        <div className={styles.cpBox}>
          <p className={styles.cpInstructionText}>
            Let’s fill out some basic information about yourself.
          </p>
          <div className={styles.cpBasicInfoContainer}>
            <div className={styles.cpBasicInfoLeftContainer}>
              <InputBox
                placeholder="Display Name"
                onChange={(e) =>
                  setData({ ...data, displayName: e.target.value })
                }
              />
              <p className={`${styles.cpInstructionSubText} mt-4 mb-1`}>
                {" "}
                General{" "}
              </p>
              <div className={`${styles.inputContainers}`}>
                <InputBox
                  placeholder="Birth Date"
                  onChange={(e) =>
                    setData({ ...data, birthDate: e.target.value })
                  }
                />
                <InputBox
                  placeholder="Location"
                  type={"select"}
                  options={locations}
                  onChange={(e) =>
                    setData({ ...data, location: e.target.value })
                  }
                />
                <InputBox
                  placeholder="Gender"
                  type={"select"}
                  options={gender}
                  onChange={(e) => setData({ ...data, gender: e.target.value })}
                />
                <InputBox
                  placeholder="Sexual Orientation"
                  type={"select"}
                  options={sexualOrientations}
                  onChange={(e) =>
                    setData({ ...data, sexualOrientation: e.target.value })
                  }
                />
                <InputBox
                  placeholder="Height"
                  onChange={(e) => setData({ ...data, height: e.target.value })}
                />
                <InputBox
                  placeholder="Religion"
                  onChange={(e) =>
                    setData({ ...data, religion: e.target.value })
                  }
                />
                <InputBox
                  placeholder="University"
                  onChange={(e) =>
                    setData({ ...data, university: e.target.value })
                  }
                />
                <InputBox
                  placeholder="Year & Major"
                  onChange={(e) =>
                    setData({ ...data, yearAndMajor: e.target.value })
                  }
                />
                <InputBox
                  type={"select"}
                  options={Terms}
                  placeholder="Study Term"
                  onChange={(e) =>
                    setData({ ...data, studyTerm: e.target.value })
                  }
                />
                <InputBox
                  placeholder="MBTI"
                  type={"select"}
                  options={mbtiTypes}
                  onChange={(e) => setData({ ...data, mbti: e.target.value })}
                />
              </div>
              <InputBox
                placeholder="Tags"
                onChange={(e) => setData({ ...data, tags: e.target.value })}
              />

              <p className={`${styles.cpInstructionSubText} mt-4`}>Contact</p>
              <input
                className={`${styles.shortInputBox}`}
                placeholder="Phone Number"
              ></input>
              <div className={`${styles.inputContainers}`}>
                <InputBox
                  placeholder="Discord Username (optional)"
                  onChange={(e) =>
                    setData({ ...data, discordUsername: e.target.value })
                  }
                />
                <InputBox
                  placeholder="Instagram Username (optional)"
                  onChange={(e) =>
                    setData({ ...data, instagramUsername: e.target.value })
                  }
                />
              </div>
            </div>

            <div className={styles.cpRightSide}>
              <div className={`${styles.cpImageContainer}`} {...getRootProps()}>
                {photo ? (
                  <Image
                    src={URL.createObjectURL(photo)} // this is the image that is uploaded
                    alt="profile"
                    className={styles.cpProfilePic}
                    height={120}
                    width={120}
                  />
                ) : (
                  <>
                    <div>
                      <Image src={imageIcon} alt="Image Icon" />
                    </div>
                    <div className="mt-5 mx-3 ">
                      <p className={styles.cpPhotoInstructions}>
                        Upload or drop an image here for your{" "}
                        <span className={styles.mark}> profile picture </span>{" "}
                      </p>
                    </div>
                  </>
                )}
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
              sendData({ ...data, profilePhoto: photo });
            }}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
}
