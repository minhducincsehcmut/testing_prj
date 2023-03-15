import React from "react";

import HomePageHeader from "components/HomePageHeader";
import { Img, Text } from "components";

const GrowthPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-akayatelivigala gap-[33px] justify-end mx-[auto] sm:pr-[20px] pr-[33px] pt-[33px] w-[100%]">
        <div className="flex items-center mr-[26px] sm:pl-[20px] pl-[33px] md:px-[20px] md:w-[100%] w-[99%]">
          <HomePageHeader
            className="flex flex-row items-center justify-center w-[100%]"
            yolofarm="Yolo Farm"
            question="images/img_question_white_a700.svg"
            hellouser="Hello, user"
          />
        </div>
        <div className="bg-teal_50 flex flex-row font-inter gap-[19px] items-start justify-end mr-[auto] p-[37px] md:px-[20px] rounded-[32px] md:w-[100%] w-[16%]">
          <div className="flex flex-col gap-[44px] items-center justify-start mt-[25px] w-[16%]">
            <Img
              src="images/img_home.svg"
              className="h-[24px] w-[24px]"
              alt="home"
            />
            <Img
              src="images/img_rain.svg"
              className="h-[24px] w-[24px]"
              alt="rain"
            />
            <Img
              src="images/img_brightness.svg"
              className="h-[24px] w-[24px]"
              alt="brightness"
            />
            <Img
              src="images/img_rectangle17.png"
              className="h-[24px] md:h-[auto] object-cover w-[24px]"
              alt="rectangleEighteen"
            />
            <Img
              src="images/img_lineup.svg"
              className="h-[24px] w-[24px]"
              alt="lineup"
            />
            <Img
              src="images/img_carbslight.svg"
              className="h-[24px] w-[24px]"
              alt="carbslight"
            />
            <Img
              src="images/img_menu.svg"
              className="h-[24px] w-[24px]"
              alt="menu"
            />
          </div>
          <div className="flex flex-col gap-[44px] items-start justify-start mb-[340px] mt-[21px] self-stretch w-[auto]">
            <Text
              className="font-normal not-italic text-gray_900 text-left w-[auto]"
              variant="body6"
            >
              Home
            </Text>
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
              variant="body6"
            >
              Humidity
            </Text>
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
              variant="body6"
            >
              Light
            </Text>
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
              variant="body6"
            >
              Air
            </Text>
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
              variant="body6"
            >
              Chart
            </Text>
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
              variant="body6"
            >
              Growth
            </Text>
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
              variant="body6"
            >
              Chat
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrowthPage;
