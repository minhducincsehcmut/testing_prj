import React from "react";

import { Img, Text, Button, List } from "components";

const DashboardPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex font-abhayalibreextrabold items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[59px] items-center justify-between max-w-[1396px] mx-[auto] md:px-[20px] w-[100%]">
          <aside className="bg-white_A700 flex flex-col md:hidden justify-start w-[353px]">
            <div className="flex flex-col md:gap-[40px] gap-[82px] items-end justify-start mb-[103px] md:ml-[0] ml-[59px] mr-[101px] mt-[58px] w-[55%]">
              <div className="flex items-center justify-start md:w-[100%] w-[84%]">
                <div className="flex flex-row gap-[11px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_asset1.png"
                    className="h-[79px] md:h-[auto] object-cover w-[auto]"
                    alt="assetOne"
                  />
                  <div className="flex flex-col items-end justify-start mt-[10px] w-[auto]">
                    <Text
                      className="font-extrabold text-center text-cyan_900 w-[auto]"
                      variant="body6"
                    >
                      ORCHID
                    </Text>
                    <Text
                      className="mt-[3px] text-center text-cyan_900 w-[auto]"
                      variant="body20"
                    >
                      S M A R T - F A R M
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row font-akayatelivigala gap-[38px] items-start justify-between mr-[4px] md:w-[100%] w-[98%]">
                <div className="flex flex-col items-start justify-start w-[21%]">
                  <Img
                    src="images/img_asset4.png"
                    className="h-[35px] md:h-[auto] object-cover w-[35px]"
                    alt="assetFour"
                  />
                  <Img
                    src="images/img_asset3.png"
                    className="h-[40px] md:h-[auto] mt-[55px] object-cover w-[100%]"
                    alt="assetThree"
                  />
                  <Img
                    src="images/img_asset2.png"
                    className="h-[43px] md:h-[auto] mt-[269px] object-cover w-[100%]"
                    alt="assetTwo"
                  />
                  <Img
                    src="images/img_image1.png"
                    className="h-[38px] md:h-[auto] mt-[52px] object-cover w-[38px]"
                    alt="imageOne"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-[2px] w-[60%]">
                  <div className="flex flex-col md:gap-[40px] gap-[80px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_905 text-left w-[auto]"
                      variant="body6"
                    >
                      Dashboard
                    </Text>
                    <Text
                      className="font-normal not-italic text-cyan_900 text-left w-[auto]"
                      variant="body6"
                    >
                      Theo dõi
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[45px] items-start justify-start mt-[38px] self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                      variant="body12"
                    >
                      Nhiệt độ
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                      variant="body12"
                    >
                      Độ ẩm MT
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                      variant="body12"
                    >
                      Độ ẩm đất
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                      variant="body12"
                    >
                      Ánh sáng
                    </Text>
                  </div>
                  <div className="flex flex-col md:gap-[40px] gap-[80px] items-start justify-start mt-[52px] self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                      variant="body6"
                    >
                      Cây
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                      variant="body6"
                    >
                      Điều khiển
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[45px] items-start justify-start mt-[41px] self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                      variant="body12"
                    >
                      Quạt
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                      variant="body12"
                    >
                      Đèn
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                      variant="body12"
                    >
                      Bơm nước
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col font-akayatelivigala items-center justify-start w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[97%]">
              <div className="flex flex-col gap-[20px] items-start justify-start md:mt-[0] mt-[34px] md:w-[100%] w-[auto]">
                <Text
                  className="font-normal not-italic text-bluegray_401 text-left w-[auto]"
                  variant="body6"
                >
                  Xin chào,
                </Text>
                <Text
                  className="not-italic text-gray_902 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Công Thành
                </Text>
              </div>
              <Button className="bg-white_A700 flex h-[69px] items-center justify-center mb-[61px] md:ml-[0] ml-[582px] p-[16px] rounded-[34px] w-[69px]">
                <Img
                  src="images/img_notification.svg"
                  className="h-[35px]"
                  alt="notification"
                />
              </Button>
              <Img
                src="images/img_yolofarm2_71x71.png"
                className="h-[71px] md:h-[auto] md:ml-[0] ml-[28px] rounded-[50%] w-[71px]"
                alt="yolofarmTwo"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[62px] w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[38px] items-start justify-start md:w-[100%] w-[69%]">
                <div className="bg-white_A700 flex flex-col gap-[35px] items-start justify-end p-[25px] sm:px-[20px] rounded-[40px] w-[100%]">
                  <Text
                    className="md:ml-[0] ml-[18px] mt-[19px] not-italic text-gray_902 text-left w-[auto]"
                    variant="body8"
                  >
                    Quá trình phát triển cây
                  </Text>
                  <Img
                    src="images/img_linegraph1.png"
                    className="h-[262px] sm:h-[auto] md:ml-[0] ml-[23px] object-cover md:w-[100%] w-[94%]"
                    alt="linegraphOne"
                  />
                </div>
                <Text
                  className="not-italic text-gray_902 text-left w-[auto]"
                  variant="body8"
                >
                  Độ ẩm gần đây
                </Text>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[26%]">
                <List
                  className="flex-col gap-[32px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-1 items-end justify-end my-[0] p-[10px] rounded-[38px] w-[100%]">
                    <div className="flex flex-row items-start justify-end mr-[21px] md:w-[100%] w-[76%]">
                      <Img
                        src="images/img_temp1.png"
                        className="h-[55px] md:h-[auto] object-cover w-[12%]"
                        alt="tempOne"
                      />
                      <div className="flex flex-col gap-[7px] items-start justify-start ml-[50px] mt-[5px] w-[auto]">
                        <Text
                          className="not-italic text-bluegray_401 text-left w-[auto]"
                          variant="body22"
                        >
                          Nhiệt độ
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_902 text-left w-[auto]"
                          variant="body12"
                        >
                          40 C
                        </Text>
                      </div>
                      <Img
                        src="images/img_group7.svg"
                        className="h-[2px] ml-[54px] mt-[2px] w-[auto]"
                        alt="groupSeven"
                      />
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start my-[0] p-[11px] rounded-[38px] w-[100%]">
                    <div className="flex flex-row items-center justify-between mb-[2px] md:w-[100%] w-[78%]">
                      <Img
                        src="images/img_water1.png"
                        className="h-[45px] md:h-[auto] object-cover w-[auto]"
                        alt="waterOne"
                      />
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="not-italic text-bluegray_401 text-left w-[auto]"
                            variant="body22"
                          >
                            Độ ẩm đất
                          </Text>
                          <Img
                            src="images/img_group7.svg"
                            className="h-[2px] w-[auto]"
                            alt="groupSix"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_902 text-left w-[auto]"
                          variant="body12"
                        >
                          30%
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start my-[0] p-[12px] rounded-[38px] w-[100%]">
                    <div className="flex flex-row gap-[38px] items-center justify-between mb-[4px] md:w-[100%] w-[82%]">
                      <Img
                        src="images/img_sun1.png"
                        className="h-[43px] md:h-[auto] object-cover w-[43px]"
                        alt="sunOne"
                      />
                      <div className="flex flex-col gap-[9px] items-start justify-start w-[auto]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="mt-[2px] not-italic text-bluegray_401 text-left w-[auto]"
                            variant="body22"
                          >
                            Ánh sáng
                          </Text>
                          <Img
                            src="images/img_group7.svg"
                            className="h-[2px] w-[auto]"
                            alt="groupEight"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_902 text-left w-[auto]"
                          variant="body12"
                        >
                          30%
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start my-[0] p-[14px] rounded-[38px] w-[100%]">
                    <div className="flex flex-row gap-[38px] items-center justify-between md:w-[100%] w-[83%]">
                      <Img
                        src="images/img_land1.png"
                        className="h-[35px] md:h-[auto] object-cover w-[auto]"
                        alt="landOne"
                      />
                      <div className="flex flex-col gap-[9px] items-start justify-start w-[auto]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="mt-[2px] not-italic text-bluegray_401 text-left w-[auto]"
                            variant="body22"
                          >
                            Độ ẩm đất
                          </Text>
                          <Img
                            src="images/img_group7.svg"
                            className="h-[2px] w-[auto]"
                            alt="groupTen"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_902 text-left w-[auto]"
                          variant="body12"
                        >
                          30%
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[12px] md:w-[100%] w-[97%]">
              <Img
                src="images/img_screenshot1678627717.png"
                className="h-[276px] sm:h-[auto] md:mt-[0] mt-[8px] object-cover md:w-[100%] w-[auto]"
                alt="screenshot16786"
              />
              <div className="bg-white_A700 flex items-center justify-start mb-[43px] p-[21px] sm:px-[20px] rounded-[40px] md:w-[100%] w-[auto]">
                <div className="flex flex-col items-center justify-start mb-[17px] mt-[7px] md:w-[100%] w-[98%]">
                  <Text
                    className="not-italic text-center text-gray_902 w-[auto]"
                    variant="body13"
                  >
                    Thiết bị đang hoạt động
                  </Text>
                  <div className="flex flex-row items-start justify-between mt-[33px] w-[100%]">
                    <Img
                      src="images/img_fan1.png"
                      className="h-[57px] md:h-[auto] mt-[3px] object-cover w-[57px]"
                      alt="fanOne"
                    />
                    <Img
                      src="images/img_light1.png"
                      className="h-[63px] md:h-[auto] mb-[3px] object-cover w-[auto]"
                      alt="lightOne"
                    />
                    <Img
                      src="images/img_pump1.png"
                      className="h-[63px] md:h-[auto] mt-[3px] object-cover w-[auto]"
                      alt="pumpOne"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-end ml-[auto] mt-[2px] md:w-[100%] w-[91%]">
                    <Text
                      className="not-italic text-bluegray_401 text-center w-[auto]"
                      variant="body22"
                    >
                      Quạt
                    </Text>
                    <Text
                      className="ml-[86px] not-italic text-bluegray_401 text-center w-[auto]"
                      variant="body22"
                    >
                      Đèn
                    </Text>
                    <Text
                      className="ml-[76px] not-italic text-bluegray_401 text-center w-[auto]"
                      variant="body22"
                    >
                      Máy bơm
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[12px] md:w-[100%] w-[94%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_902 w-[auto]"
                      variant="body12"
                    >
                      0/10
                    </Text>
                    <Text
                      className="font-normal not-italic text-center text-gray_902 w-[auto]"
                      variant="body12"
                    >
                      0/10
                    </Text>
                    <Text
                      className="font-normal not-italic text-center text-gray_902 w-[auto]"
                      variant="body12"
                    >
                      0/10
                    </Text>
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

export default DashboardPage;
