import React from "react";

import { Img, Text, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row sm:gap-[40px] md:gap-[40px] gap-[94px] items-start mx-[auto] w-[100%]">
        <div className="h-[914px] md:mt-[0] mt-[92px] md:px-[20px] relative md:w-[100%] w-[30%]">
          <Img
            src="images/img_ellipse1_914x427.png"
            className="h-[914px] m-[auto] object-cover w-[100%]"
            alt="ellipseOne"
          />
          <div className="absolute bg-light_blue_A100 h-[76px] left-[28%] rounded-[50%] top-[8%] w-[76px]"></div>
        </div>
        <div className="h-[1024px] md:h-[735px] md:px-[20px] relative md:w-[100%] w-[64%]">
          <Img
            src="images/img_bg.png"
            className="absolute h-[735px] object-cover right-[0] top-[0] w-[auto]"
            alt="bg"
          />
          <Img
            src="images/img_bg_indigo_a700.png"
            className="absolute bottom-[0] h-[375px] object-cover right-[0] w-[auto]"
            alt="bg_One"
          />
          <div className="absolute flex flex-col items-start justify-start left-[0] top-[17%] w-[58%]">
            <Text
              className="font-akayatelivigala not-italic text-gray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Login
            </Text>
            <div className="flex flex-col font-akayatelivigala gap-[17px] items-start justify-start mt-[96px] w-[100%]">
              <Text
                className="not-italic text-gray_700 text-left w-[auto]"
                variant="body7"
              >
                Username
              </Text>
              <Line className="bg-gray_900 h-[3px] w-[100%]" />
            </div>
            <div className="flex flex-col font-akayatelivigala gap-[17px] items-start justify-start mt-[50px] w-[100%]">
              <Text
                className="not-italic text-gray_700 text-left w-[auto]"
                variant="body7"
              >
                Password
              </Text>
              <Line className="bg-gray_900 h-[3px] w-[100%]" />
            </div>
            <Text
              className="common-pointer font-inter font-normal md:ml-[0] ml-[289px] mt-[20px] not-italic text-center text-gray_900"
              variant="body12"
              onClick={() => navigate("/")}
            ></Text>
            <div className="flex font-akayatelivigala items-center justify-start mt-[21px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Button
                      className="common-pointer bg-indigo_A700 cursor-pointer font-normal leading-[normal] sm:min-w-[100%] min-w-[530px] not-italic sm:px-[20px] px-[239px] md:px-[40px] py-[10px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]"
                      onClick={() => navigate("/logininvalid")}
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
