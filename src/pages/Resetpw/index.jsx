import React from "react";

import { Img, Text, Line, Button } from "components";

const ResetpwPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-akayatelivigala sm:gap-[40px] md:gap-[40px] gap-[70px] items-start mx-[auto] w-[100%]">
        <div className="h-[914px] md:mt-[0] mt-[92px] md:px-[20px] relative md:w-[100%] w-[30%]">
          <Img
            src="images/img_ellipse1.png"
            className="h-[914px] m-[auto] object-cover w-[100%]"
            alt="ellipseOne"
          />
          <div className="absolute bg-light_blue_A100 h-[76px] left-[28%] rounded-[50%] top-[8%] w-[76px]"></div>
        </div>
        <div className="h-[1024px] md:h-[735px] md:px-[20px] relative md:w-[100%] w-[66%]">
          <div className="absolute flex flex-col inset-y-[0] my-[auto] right-[0] sm:w-[100%] w-[60%]">
            <Img
              src="images/img_bg.png"
              className="h-[735px] mx-[auto] object-cover w-[auto]"
              alt="bg"
            />
            <Img
              src="images/img_bg_indigo_a700.png"
              className="h-[375px] ml-[auto] mt-[-86.67px] object-cover w-[auto] z-[1]"
              alt="bg_One"
            />
          </div>
          <div className="absolute flex flex-col items-start justify-start left-[0] top-[15%] w-[60%]">
            <Text
              className="not-italic text-gray_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Reset password
            </Text>
            <Text
              className="mt-[96px] not-italic text-gray_901 text-left sm:w-[100%] w-[95%]"
              variant="body8"
            >
              Enter the email address associated with your account and we&#39;ll
              send you a OTP code to reset your password.
            </Text>
            <div className="flex flex-col gap-[17px] items-start justify-start mt-[37px] md:w-[100%] w-[95%]">
              <Text
                className="not-italic text-gray_700 text-left w-[auto]"
                variant="body7"
              >
                Email
              </Text>
              <Line className="bg-gray_900 h-[3px] w-[100%]" />
            </div>
            <Button className="bg-indigo_A700 cursor-pointer font-normal leading-[normal] mt-[97px] not-italic sm:px-[20px] px-[239px] md:px-[40px] py-[10px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[531px]">
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetpwPage;
