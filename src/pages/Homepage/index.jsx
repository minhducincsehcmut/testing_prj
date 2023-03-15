import React from "react";

import HomePageHeader from "components/HomePageHeader";
import { Img, Text, List } from "components";

const HomepagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-akayatelivigala items-start justify-end mx-[auto] sm:pr-[20px] pr-[33px] pt-[33px] w-[100%]">
        <div className="flex flex-col gap-[25px] items-center justify-start md:px-[20px] md:w-[100%] w-[99%]">
          <HomePageHeader
            className="flex flex-row items-center justify-center w-[100%]"
            yolofarm="Yolo Farm"
            question="images/img_question.svg"
            hellouser="Hello, user"
          />
          <div className="flex md:flex-col flex-row font-inter md:gap-[42px] items-start justify-between md:w-[100%] w-[99%]">
            <div className="bg-teal_50 flex flex-row gap-[19px] items-start justify-end md:mt-[0] mt-[8px] p-[37px] sm:px-[20px] rounded-[32px] md:w-[100%] w-[17%]">
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
                  alt="rectangleSeventeen"
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
            <div className="flex flex-col items-center justify-start md:w-[100%] w-[81%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                <Text
                  className="sm:mt-[0] mt-[3px] not-italic text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Home page
                </Text>
                <Text
                  className="leading-[35.00px] not-italic text-black_900 text-center"
                  variant="body7"
                >
                  <>
                    8:45 pm
                    <br />
                    12/03/2023
                  </>
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-[11px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[50px] w-[90%]"
                orientation="horizontal"
              >
                <div className="bg-bluegray_100 flex flex-col gap-[18px] h-[236px] items-center justify-start rounded-[39px] w-[100%]">
                  <Text
                    className="mt-[10px] not-italic text-black_900 text-left w-[auto]"
                    variant="body10"
                  >
                    Air temperature
                  </Text>
                  <div className="flex font-microsoftyahei items-center justify-start mb-[13px] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="h-[145px] relative w-[100%]">
                        <div className="absolute h-[145px] inset-[0] justify-center m-[auto] w-[74%]">
                          <div
                            className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group4.svg')",
                            }}
                          >
                            <Img
                              src="images/img_.png"
                              className="h-[145px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                              alt="One"
                            />
                          </div>
                          <Img
                            src="images/img__white_a700.png"
                            className="absolute h-[30px] object-cover right-[0] top-[23%] w-[30px]"
                            alt="Two"
                          />
                        </div>
                        <Text
                          className="absolute bottom-[30%] inset-x-[0] mx-[auto] text-black_900 text-center text-shadow-ts w-[max-content]"
                          variant="body2"
                        ></Text>
                      </div>
                      <div className="flex flex-row font-inter gap-[52px] items-center justify-center mt-[4px] md:w-[100%] w-[48%]">
                        <Text
                          className="not-italic text-black_900_7f text-left w-[auto]"
                          variant="body16"
                        >
                          16℃
                        </Text>
                        <Text
                          className="not-italic text-black_900_7f text-left w-[auto]"
                          variant="body16"
                        >
                          30℃
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[236px] relative w-[100%]">
                  <div className="absolute bg-bluegray_100 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[12px] rounded-[39px] w-[236px]">
                    <Text
                      className="mb-[187px] not-italic text-black_900 text-center w-[auto]"
                      variant="body11"
                    >
                      Air humidity
                    </Text>
                  </div>
                  <div className="absolute bottom-[6%] flex font-microsoftyahei inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="h-[145px] relative w-[100%]">
                        <div className="absolute h-[145px] inset-[0] justify-center m-[auto] w-[73%]">
                          <div
                            className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group4.svg')",
                            }}
                          >
                            <Img
                              src="images/img_.png"
                              className="h-[145px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                              alt="Three"
                            />
                          </div>
                          <Img
                            src="images/img__white_a700.png"
                            className="absolute h-[30px] object-cover right-[0] top-[23%] w-[30px]"
                            alt="Four"
                          />
                        </div>
                        <Text
                          className="absolute bottom-[27%] inset-x-[0] mx-[auto] text-black_900 text-center text-shadow-ts w-[max-content]"
                          variant="body3"
                        ></Text>
                      </div>
                      <div className="flex flex-row font-inter items-start justify-between mt-[3px] md:w-[100%] w-[52%]">
                        <Text
                          className="not-italic text-black_900_7f text-left w-[auto]"
                          variant="body17"
                        >
                          0%
                        </Text>
                        <Text
                          className="not-italic text-black_900_7f text-left w-[auto]"
                          variant="body17"
                        >
                          100%
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[236px] relative w-[100%]">
                  <div className="absolute bg-bluegray_100 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[12px] rounded-[39px] w-[236px]">
                    <Text
                      className="mb-[187px] not-italic text-black_900 text-center w-[auto]"
                      variant="body10"
                    >
                      Light
                    </Text>
                  </div>
                  <div className="absolute bottom-[7%] flex font-microsoftyahei inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="h-[145px] relative w-[100%]">
                        <div className="absolute h-[145px] inset-[0] justify-center m-[auto] w-[73%]">
                          <div
                            className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group4.svg')",
                            }}
                          >
                            <Img
                              src="images/img_.png"
                              className="h-[145px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                              alt="Five"
                            />
                          </div>
                          <Img
                            src="images/img__white_a700.png"
                            className="absolute h-[30px] object-cover right-[0] top-[23%] w-[30px]"
                            alt="Six"
                          />
                        </div>
                        <Text
                          className="absolute bottom-[30%] inset-x-[0] mx-[auto] text-black_900 text-center text-shadow-ts w-[max-content]"
                          variant="body2"
                        ></Text>
                      </div>
                      <div className="flex flex-row font-inter items-center justify-between mt-[4px] md:w-[100%] w-[52%]">
                        <Text
                          className="not-italic text-black_900_7f text-left w-[auto]"
                          variant="body16"
                        >
                          0Cd
                        </Text>
                        <Text
                          className="not-italic text-black_900_7f text-left w-[auto]"
                          variant="body16"
                        >
                          100Cd
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[236px] relative w-[100%]">
                  <div className="absolute bg-bluegray_100 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[10px] rounded-[39px] w-[236px]">
                    <Text
                      className="mb-[191px] not-italic text-black_900 text-center w-[auto]"
                      variant="body10"
                    >
                      Soil moisture
                    </Text>
                  </div>
                  <div className="absolute bottom-[6%] flex font-microsoftyahei inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="h-[145px] relative w-[100%]">
                        <div className="absolute h-[145px] inset-[0] justify-center m-[auto] w-[73%]">
                          <div
                            className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group4.svg')",
                            }}
                          >
                            <Img
                              src="images/img_.png"
                              className="h-[145px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                              alt="Seven"
                            />
                          </div>
                          <Img
                            src="images/img__white_a700.png"
                            className="absolute h-[30px] object-cover right-[0] top-[23%] w-[30px]"
                            alt="Eight"
                          />
                        </div>
                        <Text
                          className="absolute bottom-[30%] inset-x-[0] mx-[auto] text-black_900 text-center text-shadow-ts w-[max-content]"
                          variant="body2"
                        ></Text>
                      </div>
                      <div className="flex flex-row font-inter items-center justify-between mt-[4px] md:w-[100%] w-[54%]">
                        <Text
                          className="not-italic text-black_900_7f text-left w-[auto]"
                          variant="body16"
                        >
                          0%
                        </Text>
                        <Text
                          className="not-italic text-black_900_7f text-left w-[auto]"
                          variant="body16"
                        >
                          100%
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between mt-[11px] md:w-[100%] w-[97%]">
                <Img
                  src="images/img_image2.png"
                  className="h-[462px] sm:h-[auto] object-cover rounded-[70px] md:w-[100%] w-[auto]"
                  alt="imageTwo"
                />
                <div className="bg-blue_A100_68 flex flex-col gap-[12px] items-center justify-end mb-[11px] md:mt-[0] mt-[39px] p-[28px] sm:px-[20px] rounded-[39px] md:w-[100%] w-[auto]">
                  <Text
                    className="mt-[12px] not-italic text-black_900 text-center w-[auto]"
                    variant="body4"
                  >
                    Equipment
                  </Text>
                  <div className="md:h-[260px] h-[291px] relative w-[73%]">
                    <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                      <div className="flex flex-col gap-[48px] items-end justify-start w-[100%]">
                        <Text
                          className="not-italic text-gray_900 text-left w-[auto]"
                          variant="body22"
                        >
                          Active for 3 hours
                        </Text>
                        <div className="flex flex-col font-alegreyasans items-start justify-start w-[100%]">
                          <div className="flex items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[99%]">
                            <div className="flex flex-row gap-[29px] items-start justify-between w-[100%]">
                              <div className="flex flex-col items-center justify-start w-[32%]">
                                <Img
                                  src="images/img_light1.png"
                                  className="h-[63px] md:h-[auto] object-cover w-[100%]"
                                  alt="lightOne"
                                />
                                <Text
                                  className="font-bold text-bluegray_401 text-center w-[auto]"
                                  variant="body14"
                                >
                                  Light
                                </Text>
                              </div>
                              <div className="flex flex-col justify-start mt-[15px] w-[auto]">
                                <Text
                                  className="font-abhayalibreextrabold font-extrabold md:ml-[0] ml-[15px] text-center text-gray_902 w-[auto]"
                                  variant="body12"
                                >
                                  0/10
                                </Text>
                                <Text
                                  className="font-inter mt-[4px] not-italic text-gray_900 text-left w-[auto]"
                                  variant="body22"
                                >
                                  Active for 3 hours
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row font-abhayalibreextrabold gap-[40px] items-center justify-start mt-[21px] md:w-[100%] w-[84%]">
                            <Img
                              src="images/img_pump1.png"
                              className="h-[63px] md:h-[auto] object-cover w-[43%]"
                              alt="pumpOne"
                            />
                            <Text
                              className="font-extrabold text-center text-gray_902 w-[auto]"
                              variant="body12"
                            >
                              0/10
                            </Text>
                          </div>
                          <Text
                            className="font-bold md:ml-[0] ml-[4px] mt-[2px] text-bluegray_401 text-center w-[auto]"
                            variant="body14"
                          >
                            Pumper
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
                      <div className="flex flex-col gap-[171px] md:gap-[40px] justify-start w-[100%]">
                        <div className="flex flex-row gap-[42px] items-start justify-start mr-[27px] md:w-[100%] w-[84%]">
                          <div className="font-alegreyasans md:h-[57px] h-[76px] relative w-[41%]">
                            <Text
                              className="absolute bottom-[0] font-bold inset-x-[0] mx-[auto] text-bluegray_401 text-center w-[max-content]"
                              variant="body14"
                            >
                              Fan
                            </Text>
                            <Img
                              src="images/img_fan1.png"
                              className="absolute h-[57px] inset-x-[0] mx-[auto] object-cover top-[0] w-[57px]"
                              alt="fanOne"
                            />
                          </div>
                          <Text
                            className="font-abhayalibreextrabold font-extrabold mt-[12px] text-center text-gray_902 w-[auto]"
                            variant="body12"
                          >
                            0/10
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[84px] not-italic text-gray_900 text-left w-[auto]"
                          variant="body22"
                        >
                          Active for 3 hours
                        </Text>
                      </div>
                    </div>
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

export default HomepagePage;
