import React from "react";

import { Img, Text, Button } from "components";

const TrackingPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex font-abhayalibreextrabold items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[34px] items-center justify-between max-w-[1408px] mx-[auto] md:px-[20px] w-[100%]">
          <aside className="bg-white_A700 flex flex-col md:hidden justify-start w-[353px]">
            <div className="flex flex-col md:gap-[40px] gap-[65px] justify-start mb-[120px] md:ml-[0] ml-[57px] mr-[101px] mt-[58px] w-[55%]">
              <div className="flex items-center justify-start md:ml-[0] ml-[34px] md:w-[100%] w-[83%]">
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
              <div className="flex flex-row font-akayatelivigala gap-[38px] items-start justify-between mr-[6px] md:w-[100%] w-[97%]">
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
          <div className="flex flex-1 flex-col font-akayatelivigala justify-start w-[100%]">
            <div className="flex flex-row gap-[29px] items-center justify-end ml-[auto] md:w-[100%] w-[17%]">
              <Button className="bg-white_A700 flex h-[69px] items-center justify-center p-[16px] rounded-[34px] w-[69px]">
                <Img
                  src="images/img_notification.svg"
                  className="h-[35px]"
                  alt="notification"
                />
              </Button>
              <Img
                src="images/img_yolofarm2_71x71.png"
                className="h-[71px] md:h-[auto] rounded-[50%] w-[71px]"
                alt="yolofarmTwo"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-[41px] items-center justify-between mt-[28px] w-[100%]">
              <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[23px] sm:px-[20px] rounded-[40px] md:w-[100%] w-[57%]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between mb-[10px] md:w-[100%] w-[93%]">
                  <div className="flex flex-col items-start justify-start sm:mt-[0] mt-[3px] sm:w-[100%] w-[auto]">
                    <Text
                      className="not-italic text-gray_902 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      33 C
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_401 text-left w-[auto]"
                      variant="body6"
                    >
                      Một phần có mây
                    </Text>
                    <Text
                      className="font-normal mt-[95px] not-italic text-bluegray_401 text-left w-[auto]"
                      variant="body12"
                    >
                      Đông Hòa
                    </Text>
                    <Text
                      className="font-normal mt-[5px] not-italic text-bluegray_401 text-left w-[auto]"
                      variant="body12"
                    >
                      34 / 21 Cảm giác như 34
                    </Text>
                  </div>
                  <Img
                    src="images/img_weather1.png"
                    className="h-[132px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                    alt="weatherOne"
                  />
                </div>
              </div>
              <div className="flex h-[344px] justify-end relative md:w-[100%] w-[40%]">
                <div className="flex flex-col h-[100%] items-center justify-start mb-[17px] ml-[auto] mr-[43px] mt-[auto] w-[3%]">
                  <Img
                    src="images/img_group7.svg"
                    className="h-[2px] w-[auto]"
                    alt="groupSeven"
                  />
                  <Img
                    src="images/img_group7.svg"
                    className="h-[2px] mt-[102px] w-[auto]"
                    alt="groupSix"
                  />
                  <Img
                    src="images/img_group7.svg"
                    className="h-[2px] mt-[105px] w-[auto]"
                    alt="groupEight"
                  />
                </div>
                <Img
                  src="images/img_z4178282218386.png"
                  className="absolute h-[344px] inset-[0] justify-center m-[auto] object-cover rounded-[40px] w-[100%]"
                  alt="z4178282218386"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-center justify-start md:ml-[0] ml-[61px] mt-[48px] md:w-[100%] w-[90%]">
              <div className="flex flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                <Text
                  className="not-italic text-gray_902 text-left w-[auto]"
                  variant="body5"
                >
                  Nhiệt độ trong ngày
                </Text>
                <Img
                  src="images/img_group7.svg"
                  className="h-[2px] mt-[35px] w-[auto]"
                  alt="groupTen"
                />
              </div>
              <Img
                src="images/img_z4178282218386_416x890.png"
                className="h-[416px] md:h-[auto] object-cover rounded-[40px] w-[98%]"
                alt="z4178282218386_One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackingPage;
