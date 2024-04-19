"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import styles from "./Basic-Info.module.scss";
import imageIcon from "../assets/image-icon.png";
import e from "express";
// this is the first 'page' of the onBoarding page

function InputBox(props: {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { placeholder, onChange } = props;
  return (
    <input
      className={styles.longInputBox}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
}

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
    <div>
      <div className={styles.cpContainer}>
        <div className={styles.cpBox}>
          <p className={styles.cpInstructionText}>
            Let’s fill out some basic information about yourself.
          </p>
          <div className={styles.cpBasicInfoContainer}>
            <div className={styles.cpBasicInfoLeftContainer}>
            <InputBox placeholder="Display Name" onChange={(e) => setData({...data, displayName: e.target.value})} />
              <p className={`${styles.cpInstructionSubText} mt-4 mb-1`}>
                {" "}
                General{" "}
              </p>
              <div className={`${styles.inputContainers}`}>
                <InputBox placeholder="Birth Date" onChange={(e) => setData({...data, birthDate: e.target.value})} />
                <InputBox placeholder="Location" onChange={(e) => setData({...data, location: e.target.value})} />
                <InputBox placeholder="Gender" onChange={(e) => setData({...data, gender: e.target.value})} />
                <InputBox placeholder="Sexual Orientation" onChange={(e) => setData({...data, sexualOrientation: e.target.value})} />
                <InputBox placeholder="Height" onChange={(e) => setData({...data, height: e.target.value})} />
                <InputBox placeholder="Religion" onChange={(e) => setData({...data, religion: e.target.value})} />
                <InputBox placeholder="University" onChange={(e) => setData({...data, university: e.target.value})} />
                <InputBox placeholder="Year & Major" onChange={(e) => setData({...data, yearAndMajor: e.target.value})} />
                <InputBox placeholder="Study Term" onChange={(e) => setData({...data, studyTerm: e.target.value})} />
                <InputBox placeholder="MBTI" onChange={(e) => setData({...data, mbti: e.target.value})} />
              </div>
              <InputBox placeholder="Tags" onChange={(e) => setData({...data, tags: e.target.value})} />
              
              <p className={`${styles.cpInstructionSubText} mt-4`}>Contact</p>
              <input
                className={`${styles.shortInputBox}`}
                placeholder="Phone Number"
              ></input>
              <div className={`${styles.inputContainers}`}>
                <InputBox placeholder="Discord Username (optional)" onChange={(e) => setData({...data, discordUsername: e.target.value})} />
                <InputBox placeholder="Instagram Username (optional)" onChange={(e) => setData({...data, instagramUsername: e.target.value})} />
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
              sendData({...data, profilePhoto: photo});
            }}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
}
