import React from "react";

import HomePageHeader from "components/HomePageHeader";
import Sidebar from "components/Sidebar";
import { Img, Text, List, Button, Switch, Line } from "components";

const LightPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col mx-[auto] sm:pr-[20px] pr-[33px] pt-[33px] relative w-[100%]">
        <HomePageHeader
          className="flex flex-row flex-wrap font-akayatelivigala items-start justify-between max-w-[1347px] mx-[auto] md:px-[20px] w-[100%]"
          yolofarm="Yolo Farm"
          question="images/img_question_white_a700.svg"
          hellouser="Hello, user"
        />
        <div className="flex md:flex-col flex-row font-inter md:gap-[59px] items-start justify-between max-w-[1075px] mt-[-NaNpx] md:px-[20px] w-[100%] z-[1]">
          <Sidebar className="flex flex-col md:hidden justify-start md:mt-[0] mt-[4px] w-[225px]" />
          <div className="flex flex-1 flex-col gap-[14px] items-center justify-start w-[100%]">
            <div className="bg-bluegray_100 flex items-center justify-start p-[15px] rounded-[40px] w-[100%]">
              <div className="flex flex-col gap-[13px] items-center justify-start mb-[56px] w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_brightness.svg"
                    className="h-[24px] w-[24px]"
                    alt="brightness_One"
                  />
                  <Text
                    className="md:ml-[0] ml-[10px] text-black_900 text-left w-[auto]"
                    variant="body9"
                  >
                    Light
                  </Text>
                  <Img
                    src="images/img_vector.svg"
                    className="h-[4px] md:ml-[0] ml-[2px] w-[auto]"
                    alt="vector"
                  />
                  <Text
                    className="bg-indigo_A200 h-[53px] justify-center md:ml-[0] ml-[557px] px-[3px] py-[19px] rounded-[12px] text-center text-white_A700 w-[97px]"
                    variant="body18"
                  >
                    Add equipment
                  </Text>
                </div>
                <List
                  className="flex-col gap-[38px] grid items-center w-[94%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[45%]">
                      <div className="flex flex-row items-start justify-evenly w-[100%]">
                        <Button className="bg-gray_903 flex h-[44px] items-center justify-center mb-[34px] p-[10px] rounded-[10px] w-[44px]">
                          <Img
                            src="images/img_group25.png"
                            className="h-[24px]"
                            alt="groupTwentyFive"
                          />
                        </Button>
                        <div className="flex flex-col gap-[15px] items-center justify-start mt-[6px] w-[86%]">
                          <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
                            <div className="flex flex-row items-start justify-start w-[100%]">
                              <Text
                                className="text-bluegray_902 text-left w-[auto]"
                                variant="body15"
                              >
                                Light 1
                              </Text>
                              <Text
                                className="font-semibold ml-[118px] text-black_900 text-right w-[auto]"
                                variant="body19"
                              >
                                60%
                              </Text>
                              <Switch
                                onColor="#a0ffff"
                                offColor="#393939"
                                onHandleColor="#1a1a1a"
                                offHandleColor="#acacac"
                                value={true}
                                className="ml-[14px] mt-[2px] w-[19%]"
                              />
                            </div>
                            <Line className="h-[5px] w-[75%]" />
                          </div>
                          <div className="flex flex-row items-center justify-evenly w-[100%]">
                            <Img
                              src="images/img_clock.svg"
                              className="h-[24px] w-[24px]"
                              alt="clock"
                            />
                            <Text
                              className="text-black_900 text-left w-[auto]"
                              variant="body15"
                            >
                              Status:
                            </Text>
                            <Button
                              className="bg-bluegray_100 border-[1px] border-black_900_70 border-solid cursor-pointer flex items-center justify-center min-w-[47px] my-[2px] pl-[6px] pr-[3px] py-[5px] w-[auto]"
                              rightIcon={
                                <div className="mt-[2px] mb-[4px] ml-[13px] outline-black_900 outline-[0.5px] outline">
                                  <Img
                                    src="images/img_vector.svg"
                                    className=""
                                    alt="Vector"
                                  />
                                </div>
                              }
                            >
                              <div className="font-semibold leading-[normal] text-[8px] text-black_900 text-left">
                                60%
                              </div>
                            </Button>
                            <Text
                              className="text-black_900 text-left w-[auto]"
                              variant="body15"
                            >
                              From:
                            </Text>
                            <Button
                              className="bg-bluegray_100 border-[1px] border-black_900_70 border-solid cursor-pointer flex items-center justify-center min-w-[31px] my-[2px] px-[3px] py-[5px] w-[auto]"
                              rightIcon={
                                <div className="mt-[2px] mb-[4px] ml-[9px] outline-black_900 outline-[0.5px] outline">
                                  <Img
                                    src="images/img_vector_black_900.svg"
                                    className=""
                                    alt="Vector"
                                  />
                                </div>
                              }
                            >
                              <div className="font-semibold leading-[normal] text-[8px] text-black_900 text-left">
                                8h
                              </div>
                            </Button>
                            <Text
                              className="text-black_900 text-left w-[auto]"
                              variant="body15"
                            >
                              To:
                            </Text>
                            <Button
                              className="bg-bluegray_100 border-[1px] border-black_900_70 border-solid cursor-pointer flex items-center justify-center min-w-[31px] my-[2px] px-[3px] py-[5px] w-[auto]"
                              rightIcon={
                                <div className="mt-[2px] mb-[4px] ml-[6px] outline-black_900 outline-[0.5px] outline">
                                  <Img
                                    src="images/img_vector_black_900.svg"
                                    className=""
                                    alt="Vector"
                                  />
                                </div>
                              }
                            >
                              <div className="font-semibold leading-[normal] text-[8px] text-black_900 text-left">
                                13h
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[45%]">
                      <div className="flex flex-row items-start justify-evenly w-[100%]">
                        <Button className="bg-gray_903 flex h-[44px] items-center justify-center mb-[31px] p-[10px] rounded-[10px] w-[44px]">
                          <Img
                            src="images/img_group25.png"
                            className="h-[24px]"
                            alt="groupTwentyTwo"
                          />
                        </Button>
                        <div className="flex flex-col gap-[12px] items-center justify-start mt-[6px] w-[86%]">
                          <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
                            <div className="flex flex-row items-start justify-start w-[100%]">
                              <Text
                                className="text-bluegray_902 text-left w-[auto]"
                                variant="body15"
                              >
                                Light 4
                              </Text>
                              <Text
                                className="font-semibold ml-[114px] text-black_900 text-right w-[auto]"
                                variant="body19"
                              >
                                60%
                              </Text>
                              <Switch
                                onColor="#a0ffff"
                                offColor="#393939"
                                onHandleColor="#1a1a1a"
                                offHandleColor="#acacac"
                                value={true}
                                className="ml-[14px] mt-[2px] w-[19%]"
                              />
                            </div>
                            <Line className="h-[5px] w-[75%]" />
                          </div>
                          <div className="flex flex-row items-center justify-evenly w-[100%]">
                            <Img
                              src="images/img_clock.svg"
                              className="h-[24px] w-[24px]"
                              alt="clock_One"
                            />
                            <Text
                              className="text-black_900 text-left w-[auto]"
                              variant="body15"
                            >
                              Status:
                            </Text>
                            <Button
                              className="bg-bluegray_100 border-[1px] border-black_900_70 border-solid cursor-pointer flex items-center justify-center min-w-[47px] my-[2px] pl-[6px] pr-[3px] py-[5px] w-[auto]"
                              rightIcon={
                                <div className="mt-[2px] mb-[4px] ml-[13px] outline-black_900 outline-[0.5px] outline">
                                  <Img
                                    src="images/img_vector.svg"
                                    className=""
                                    alt="Vector"
                                  />
                                </div>
                              }
                            >
                              <div className="font-semibold leading-[normal] text-[8px] text-black_900 text-left">
                                60%
                              </div>
                            </Button>
                            <Text
                              className="text-black_900 text-left w-[auto]"
                              variant="body15"
                            >
                              From:
                            </Text>
                            <Button
                              className="bg-bluegray_100 border-[1px] border-black_900_70 border-solid cursor-pointer flex items-center justify-center min-w-[31px] my-[2px] px-[3px] py-[5px] w-[auto]"
                              rightIcon={
                                <div className="mt-[2px] mb-[4px] ml-[9px] outline-black_900 outline-[0.5px] outline">
                                  <Img
                                    src="images/img_vector_black_900.svg"
                                    className=""
                                    alt="Vector"
                                  />
                                </div>
                              }
                            >
                              <div className="font-semibold leading-[normal] text-[8px] text-black_900 text-left">
                                8h
                              </div>
                            </Button>
                            <Text
                              className="text-black_900 text-left w-[auto]"
                              variant="body15"
                            >
                              To:
                            </Text>
                            <Button
                              className="bg-bluegray_100 border-[1px] border-black_900_70 border-solid cursor-pointer flex items-center justify-center min-w-[31px] my-[2px] px-[3px] py-[5px] w-[auto]"
                              rightIcon={
                                <div className="mt-[2px] mb-[4px] ml-[6px] outline-black_900 outline-[0.5px] outline">
                                  <Img
                                    src="images/img_vector_black_900.svg"
                                    className=""
                                    alt="Vector"
                                  />
                                </div>
                              }
                            >
                              <div className="font-semibold leading-[normal] text-[8px] text-black_900 text-left">
                                13h
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[45%]">
                      <div className="flex flex-row items-start justify-evenly w-[100%]">
                        <Button className="bg-gray_903 flex h-[44px] items-center justify-center mb-[31px] p-[10px] rounded-[10px] w-[44px]">
                          <Img
                            src="images/img_group25.png"
                            className="h-[24px]"
                            alt="groupTwentyFour"
                          />
                        </Button>
                        <div className="flex flex-col gap-[12px] items-center justify-start mt-[6px] w-[86%]">
                          <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
                            <div className="flex flex-row items-start justify-start w-[100%]">
                              <Text
                                className="text-bluegray_902 text-left w-[auto]"
                                variant="body15"
                              >
                                Light 2
                              </Text>
                              <Text
                                className="font-semibold ml-[122px] text-black_900 text-right w-[auto]"
                                variant="body19"
                              >
                                0%
                              </Text>
                              <Switch
                                onColor="#a0ffff"
                                offColor="#393939"
                                onHandleColor="#1a1a1a"
                                offHandleColor="#acacac"
                                value={false}
                                className="ml-[14px] mt-[2px] w-[19%]"
                              />
                            </div>
                            <Line className="h-[5px] w-[75%]" />
                          </div>
                          <div className="flex flex-row items-center justify-evenly w-[100%]">
                            <Img
                              src="images/img_clock.svg"
                              className="h-[24px] w-[24px]"
                              alt="clock"
                            />
                            <Text
                              className="text-black_900 text-left w-[auto]"
                              variant="body15"
                            >
                              Status:
                            </Text>
                            <Button
                              className="bg-bluegray_100 border-[1px] border-black_900_70 border-solid cursor-pointer flex items-center justify-center min-w-[47px] my-[2px] pl-[6px] pr-[3px] py-[5px] w-[auto]"
                              rightIcon={
                                <div className="mt-[2px] mb-[4px] ml-[13px] outline-black_900 outline-[0.5px] outline">
                                  <Img
                                    src="images/img_vector.svg"
                                    className=""
                                    alt="Vector"
                                  />
                                </div>
                              }
                            >
                              <div className="font-semibold leading-[normal] text-[8px] text-black_900 text-left">
                                60%
                              </div>
                            </Button>
                            <Text
                              className="text-black_900 text-left w-[auto]"
                              variant="body15"
                            >
                              From:
                            </Text>
                            <Button
                              className="bg-bluegray_100 border-[1px] border-black_900_70 border-solid cursor-pointer flex items-center justify-center min-w-[31px] my-[2px] px-[3px] py-[5px] w-[auto]"
                              rightIcon={
                                <div className="mt-[2px] mb-[4px] ml-[9px] outline-black_900 outline-[0.5px] outline">
                                  <Img
                                    src="images/img_vector_black_900.svg"
                                    className=""
                                    alt="Vector"
                                  />
                                </div>
                              }
                            >
                              <div className="font-semibold leading-[normal] text-[8px] text-black_900 text-left">
                                8h
                              </div>
                            </Button>
                            <Text
                              className="text-black_900 text-left w-[auto]"
                              variant="body15"
                            >
                              To:
                            </Text>
                            <Button
                              className="bg-bluegray_100 border-[1px] border-black_900_70 border-solid cursor-pointer flex items-center justify-center min-w-[31px] my-[2px] px-[3px] py-[5px] w-[auto]"
                              rightIcon={
                                <div className="mt-[2px] mb-[4px] ml-[6px] outline-black_900 outline-[0.5px] outline">
                                  <Img
                                    src="images/img_vector_black_900.svg"
                                    className=""
                                    alt="Vector"
                                  />
                                </div>
                              }
                            >
                              <div className="font-semibold leading-[normal] text-[8px] text-black_900 text-left">
                                13h
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[44%]">
                      <div className="flex flex-row items-start justify-evenly w-[100%]">
                        <Button className="bg-gray_903 flex h-[44px] items-center justify-center mb-[31px] p-[10px] rounded-[10px] w-[44px]">
                          <Img
                            src="images/img_group25.png"
                            className="h-[24px]"
                            alt="groupTwentyOne"
                          />
                        </Button>
                        <div className="flex flex-col gap-[12px] justify-start mt-[6px] w-[86%]">
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[14px] md:w-[100%] w-[95%]">
                            <div className="flex flex-row items-start justify-start w-[100%]">
                              <Text
                                className="text-bluegray_902 text-left w-[auto]"
                                variant="body15"
                              >
                                Light 5
                              </Text>
                              <Text
                                className="font-semibold ml-[115px] text-black_900 text-right w-[auto]"
                                variant="body19"
                              >
                                60%
                              </Text>
                              <Switch
                                onColor="#a0ffff"
                                offColor="#393939"
                                onHandleColor="#1a1a1a"
                                offHandleColor="#acacac"
                                value={true}
                                className="ml-[14px] mt-[2px] w-[19%]"
                              />
                            </div>
                            <Line className="h-[5px] w-[75%]" />
                          </div>
                          <div className="flex h-[24px] items-center justify-start w-[24px]">
                            <Img
                              src="images/img_clock.svg"
                              className="h-[24px] w-[24px]"
                              alt="clock_One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[44%]">
                      <div className="flex flex-row items-start justify-evenly w-[100%]">
                        <Button className="bg-gray_903 flex h-[44px] items-center justify-center mb-[31px] p-[10px] rounded-[10px] w-[44px]">
                          <Img
                            src="images/img_group25.png"
                            className="h-[24px]"
                            alt="groupTwentyThree"
                          />
                        </Button>
                        <div className="flex flex-col gap-[12px] justify-start mt-[6px] w-[86%]">
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[14px] md:w-[100%] w-[95%]">
                            <div className="flex flex-row items-start justify-start w-[100%]">
                              <Text
                                className="text-bluegray_902 text-left w-[auto]"
                                variant="body15"
                              >
                                Light 3
                              </Text>
                              <Text
                                className="font-semibold ml-[115px] text-black_900 text-right w-[auto]"
                                variant="body19"
                              >
                                45%
                              </Text>
                              <Switch
                                onColor="#a0ffff"
                                offColor="#393939"
                                onHandleColor="#1a1a1a"
                                offHandleColor="#acacac"
                                value={true}
                                className="ml-[14px] mt-[2px] w-[19%]"
                              />
                            </div>
                            <Line className="h-[5px] w-[75%]" />
                          </div>
                          <div className="flex h-[24px] items-center justify-start w-[24px]">
                            <Img
                              src="images/img_clock.svg"
                              className="h-[24px] w-[24px]"
                              alt="clock"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[45%]">
                      <div className="flex flex-row items-start justify-evenly w-[100%]">
                        <Button className="bg-gray_903 flex h-[44px] items-center justify-center mb-[31px] p-[10px] rounded-[10px] w-[44px]">
                          <Img
                            src="images/img_group25.png"
                            className="h-[24px]"
                            alt="groupTwenty"
                          />
                        </Button>
                        <div className="flex flex-col gap-[12px] items-center justify-start mt-[6px] w-[86%]">
                          <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
                            <div className="flex flex-row items-start justify-start w-[100%]">
                              <Text
                                className="text-bluegray_902 text-left w-[auto]"
                                variant="body15"
                              >
                                Light 6
                              </Text>
                              <Text
                                className="font-semibold ml-[122px] text-black_900 text-right w-[auto]"
                                variant="body19"
                              >
                                0%
                              </Text>
                              <Switch
                                onColor="#a0ffff"
                                offColor="#393939"
                                onHandleColor="#1a1a1a"
                                offHandleColor="#acacac"
                                value={false}
                                className="ml-[14px] mt-[3px] w-[19%]"
                              />
                            </div>
                            <Line className="h-[5px] w-[75%]" />
                          </div>
                          <div className="flex flex-row items-center justify-evenly w-[100%]">
                            <Img
                              src="images/img_clock.svg"
                              className="h-[24px] w-[24px]"
                              alt="clock_One"
                            />
                            <Text
                              className="text-black_900 text-left w-[auto]"
                              variant="body15"
                            >
                              Status:
                            </Text>
                            <Button
                              className="bg-bluegray_100 border-[1px] border-black_900_70 border-solid cursor-pointer flex items-center justify-center min-w-[47px] my-[2px] pl-[6px] pr-[3px] py-[5px] w-[auto]"
                              rightIcon={
                                <div className="mt-[2px] mb-[4px] ml-[13px] outline-black_900 outline-[0.5px] outline">
                                  <Img
                                    src="images/img_vector.svg"
                                    className=""
                                    alt="Vector"
                                  />
                                </div>
                              }
                            >
                              <div className="font-semibold leading-[normal] text-[8px] text-black_900 text-left">
                                60%
                              </div>
                            </Button>
                            <Text
                              className="text-black_900 text-left w-[auto]"
                              variant="body15"
                            >
                              From:
                            </Text>
                            <Button
                              className="bg-bluegray_100 border-[1px] border-black_900_70 border-solid cursor-pointer flex items-center justify-center min-w-[31px] my-[2px] px-[3px] py-[5px] w-[auto]"
                              rightIcon={
                                <div className="mt-[2px] mb-[4px] ml-[9px] outline-black_900 outline-[0.5px] outline">
                                  <Img
                                    src="images/img_vector_black_900.svg"
                                    className=""
                                    alt="Vector"
                                  />
                                </div>
                              }
                            >
                              <div className="font-semibold leading-[normal] text-[8px] text-black_900 text-left">
                                8h
                              </div>
                            </Button>
                            <Text
                              className="text-black_900 text-left w-[auto]"
                              variant="body15"
                            >
                              To:
                            </Text>
                            <Button
                              className="bg-bluegray_100 border-[1px] border-black_900_70 border-solid cursor-pointer flex items-center justify-center min-w-[31px] my-[2px] px-[3px] py-[5px] w-[auto]"
                              rightIcon={
                                <div className="mt-[2px] mb-[4px] ml-[6px] outline-black_900 outline-[0.5px] outline">
                                  <Img
                                    src="images/img_vector_black_900.svg"
                                    className=""
                                    alt="Vector"
                                  />
                                </div>
                              }
                            >
                              <div className="font-semibold leading-[normal] text-[8px] text-black_900 text-left">
                                13h
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="bg-deep_purple_A100 flex items-center justify-start p-[21px] sm:px-[20px] rounded-[40px] w-[100%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[97%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    variant="body9"
                  >
                    Usage Status
                  </Text>
                  <Button className="bg-gray_903 flex h-[38px] items-center justify-center md:ml-[0] ml-[385px] p-[8px] rounded-[10px] w-[38px]">
                    <Img
                      src="images/img_settings.svg"
                      className="h-[21px]"
                      alt="settings"
                    />
                  </Button>
                  <Button className="bg-gradient  flex h-[38px] items-center justify-center md:ml-[0] ml-[15px] p-[8px] rounded-[10px] w-[38px]">
                    <Img
                      src="images/img_signal.svg"
                      className="h-[21px]"
                      alt="signal"
                    />
                  </Button>
                  <Button
                    className="bg-gray_903 cursor-pointer flex items-center justify-center min-w-[89px] md:ml-[0] ml-[15px] p-[10px] rounded-[10px] w-[auto]"
                    rightIcon={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="mb-[1px] ml-[10px]"
                        alt="arrow_down"
                      />
                    }
                  >
                    <div className="font-medium text-[14px] text-left text-white_A700">
                      Today
                    </div>
                  </Button>
                </div>
                <div className="flex flex-row gap-[99px] items-start justify-start mt-[16px] md:w-[100%] w-[32%]">
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body19"
                  >
                    Total spend
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body19"
                  >
                    Total hours{" "}
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between mt-[9px] md:w-[100%] w-[97%]">
                  <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                    <div className="flex flex-row gap-[62px] items-center justify-start md:w-[100%] w-[75%]">
                      <Text
                        className="text-gray_900 text-left w-[auto]"
                        variant="body9"
                      >
                        35.02Kwh
                      </Text>
                      <Text
                        className="text-gray_900 text-left w-[auto]"
                        variant="body9"
                      >
                        32h
                      </Text>
                    </div>
                    <Button className="bg-gradient  cursor-pointer font-normal leading-[normal] min-w-[52px] md:ml-[0] ml-[170px] mt-[24px] not-italic px-[10px] py-[5px] rounded-[10px] text-[12px] text-center text-gray_904 w-[auto]">
                      30kw
                    </Button>
                    <div className="flex flex-row items-end justify-between md:ml-[0] ml-[5px] mt-[12px] md:w-[100%] w-[99%]">
                      <div className="bg-gray_900_67 h-[47px] mt-[80px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[14%]"></div>
                      <div className="bg-gray_900_67 h-[68px] mt-[59px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[14%]"></div>
                      <div className="bg-gray_900_67 h-[102px] mt-[25px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[14%]"></div>
                      <div className="bg-gradient  h-[127px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[14%]"></div>
                      <div className="bg-gray_900_67 h-[80px] mt-[47px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[14%]"></div>
                    </div>
                  </div>
                  <div className="bg-gray_900_67 h-[102px] sm:mt-[0] mt-[112px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[6%]"></div>
                  <div className="bg-gray_900_67 h-[127px] sm:mt-[0] mt-[87px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[6%]"></div>
                  <div className="bg-gray_900_67 h-[99px] sm:mt-[0] mt-[115px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[6%]"></div>
                  <div className="bg-gray_900_67 h-[121px] sm:mt-[0] mt-[93px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[6%]"></div>
                  <div className="bg-gray_900_67 h-[90px] sm:mt-[0] mt-[124px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[6%]"></div>
                  <div className="bg-gray_900_67 h-[159px] sm:mt-[0] mt-[55px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[6%]"></div>
                </div>
                <Line className="bg-gray_801 h-[1px] rotate-[-180deg] w-[100%]" />
                <div className="flex sm:flex-col flex-row gap-[40px] items-center justify-center max-w-[722px] mt-[13px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body19"
                  >
                    9:00
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body19"
                  >
                    10:00
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body19"
                  >
                    11:00
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body19"
                  >
                    12:00
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body19"
                  >
                    13:00
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body19"
                  >
                    14:00
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body19"
                  >
                    15:00
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body19"
                  >
                    16:00
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body19"
                  >
                    17:00
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body19"
                  >
                    18:00
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[27px] items-center justify-start mb-[auto] ml-[auto] mr-[18px] mt-[-NaNpx] md:px-[20px] w-[20%] z-[1]">
          <div className="bg-bluegray_100 flex flex-col gap-[6px] items-center justify-end rounded-[45px] w-[100%]">
            <Text
              className="font-inter mt-[21px] not-italic text-black_900 text-center w-[auto]"
              variant="body7"
            >
              Air temperature
            </Text>
            <Text
              className="font-microsoftyahei text-black_900 text-center text-shadow-ts1 w-[100%]"
              as="h6"
              variant="h6"
            ></Text>
          </div>
          <div className="bg-bluegray_100 flex flex-col gap-[8px] items-center justify-end rounded-[45px] w-[100%]">
            <Text
              className="font-inter mt-[19px] not-italic text-black_900 text-center w-[auto]"
              variant="body7"
            >
              Air humidity
            </Text>
            <Text
              className="font-microsoftyahei text-black_900 text-center text-shadow-ts2 w-[100%]"
              as="h6"
              variant="h6"
            ></Text>
          </div>
          <div className="bg-bluegray_100 flex flex-col gap-[6px] items-center justify-end pr-[2px] pt-[2px] rounded-[45px] w-[100%]">
            <Text
              className="font-inter mt-[21px] not-italic text-black_900 text-center w-[auto]"
              variant="body7"
            >
              Light
            </Text>
            <Text
              className="font-microsoftyahei text-black_900 text-center text-shadow-ts3 w-[100%]"
              as="h6"
              variant="h6"
            ></Text>
          </div>
          <div className="bg-bluegray_100 flex flex-col gap-[8px] items-center justify-end rounded-[45px] w-[100%]">
            <Text
              className="font-inter mt-[19px] not-italic text-black_900 text-center w-[auto]"
              variant="body7"
            >
              Soid moisture
            </Text>
            <Text
              className="font-microsoftyahei text-black_900 text-center text-shadow-ts2 w-[100%]"
              as="h6"
              variant="h6"
            ></Text>
          </div>
        </div>
        <Text
          className="font-inter leading-[35.00px] ml-[auto] mr-[83px] mt-[-9px] not-italic text-black_900 text-center z-[1]"
          variant="body7"
        >
          <>
            8:45 pm
            <br />
            12/03/2023
          </>
        </Text>
      </div>
    </>
  );
};

export default LightPage;
