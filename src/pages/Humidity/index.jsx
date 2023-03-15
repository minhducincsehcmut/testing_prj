import React from "react";

import { Img, Text } from "components";

const HumidityPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] pb-[899px] w-[100%]">
        <header className="bg-blue_A100 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-center md:px-[20px] w-[100%]">
          <Img
            src="images/img_yolofarm1.png"
            className="h-[83px] md:h-[auto] sm:ml-[0] ml-[24px] sm:mt-[0] my-[21px] rounded-[50%] w-[83px]"
            alt="yolofarmOne"
          />
          <ul className="flex md:flex-1 md:flex-col flex-row gap-[48px] md:hidden items-start justify-start mb-[44px] sm:ml-[0] ml-[101px] sm:mt-[0] mt-[47px] self-stretch md:w-[100%] w-[auto] common-row-list">
            <li className="mt-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                className="cursor-pointer font-normal not-italic sm:text-[21px] md:text-[23px] text-[25px] text-left text-white_A700"
                href="javascript:"
              >
                Humidity
              </a>
            </li>
            <li className="mt-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                className="cursor-pointer font-normal not-italic sm:text-[21px] md:text-[23px] text-[25px] text-bluegray_400 text-left hover:text-white_A700"
                href="javascript:"
              >
                Light
              </a>
            </li>
            <li className="mb-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                className="cursor-pointer font-normal not-italic sm:text-[21px] md:text-[23px] text-[25px] text-bluegray_400 text-left hover:text-white_A700"
                href="javascript:"
              >
                Air
              </a>
            </li>
            <li className="mb-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                className="cursor-pointer font-normal not-italic sm:text-[21px] md:text-[23px] text-[25px] text-bluegray_400 text-left hover:text-white_A700"
                href="javascript:"
              >
                Environmental chart
              </a>
            </li>
            <li className="mb-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                className="cursor-pointer font-normal not-italic sm:text-[21px] md:text-[23px] text-[25px] text-bluegray_400 text-left hover:text-white_A700"
                href="javascript:"
              >
                Growth
              </a>
            </li>
            <li className="mb-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                className="cursor-pointer font-normal not-italic sm:text-[21px] md:text-[23px] text-[25px] text-bluegray_400 text-left hover:text-white_A700"
                href="javascript:"
              >
                Chat
              </a>
            </li>
          </ul>
          <Img
            src="images/img_image1.png"
            className="h-[30px] md:h-[auto] sm:ml-[0] ml-[78px] sm:mt-[0] my-[47px] object-cover w-[30px]"
            alt="imageOne"
          />
          <Img
            src="images/img_notification_white_a700.svg"
            className="h-[33px] sm:ml-[0] ml-[21px] sm:mt-[0] my-[46px] w-[33px]"
            alt="notification"
          />
          <Text
            className="font-normal mb-[44px] sm:ml-[0] ml-[24px] sm:mt-[0] mt-[49px] not-italic text-left text-white_A700 w-[auto]"
            variant="body6"
          >
            Hello, user
          </Text>
          <Img
            src="images/img_location.svg"
            className="h-[30px] sm:ml-[0] ml-[17px] mr-[59px] sm:mt-[0] my-[47px] w-[auto]"
            alt="location"
          />
        </header>
      </div>
    </>
  );
};

export default HumidityPage;
