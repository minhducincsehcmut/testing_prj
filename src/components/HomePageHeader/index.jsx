import React from "react";

import { Img, Text } from "components";

const HomePageHeader = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-[19px] items-center justify-start md:w-[100%] w-[22%]">
          <div className="h-[83px] relative w-[83px]">
            <Img
              src="images/img_yolofarm1.png"
              className="h-[83px] m-[auto] rounded-[50%] w-[83px]"
              alt="yolofarmOne"
            />
            <Img
              src="images/img_yolofarm2.png"
              className="absolute h-[83px] inset-[0] justify-center m-[auto] object-cover rounded-[40px] w-[83px]"
              alt="yolofarmTwo"
            />
          </div>
          <Text
            className="font-akayatelivigala not-italic text-black_900_cc text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            {props?.yolofarm}
          </Text>
        </div>
        <ul className="flex flex-row sm:hidden items-start justify-between mb-[35px] md:ml-[0] ml-[725px] md:mt-[0] mt-[13px] md:w-[100%] w-[25%] common-row-list">
          <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[2px]">
            <Img src={props?.question} className="h-[30px]" alt="question" />
          </li>
          <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[2px]">
            <Img
              src="images/img_image1.png"
              className="h-[30px] md:h-[auto] object-cover"
              alt="imageOne"
            />
          </li>
          <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
            <Img
              src="images/img_notification.svg"
              className="h-[33px]"
              alt="notification"
            />
          </li>
          <li className="mt-[3px] sm:w-[100%] sm:my-[10px] w-[auto]">
            <a
              className="cursor-pointer font-inter font-normal not-italic sm:text-[21px] md:text-[23px] text-[25px] text-gray_900 text-left"
              href="javascript:"
            >
              {props?.hellouser}
            </a>
          </li>
          <li className="mt-[2px] mb-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
            <Img src="images/img_user.svg" className="h-[30px]" alt="user" />
          </li>
        </ul>
      </header>
    </>
  );
};

HomePageHeader.defaultProps = {
  yolofarm: "Yolo Farm",
  question: "images/img_question.svg",
  hellouser: "Hello, user",
};

export default HomePageHeader;
