import React from "react";

import { Img, Text } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="flex flex-row gap-[19px] items-center justify-center mb-[377px] mt-[58px] mx-[auto] w-[67%]">
          <div className="flex flex-col gap-[44px] items-center justify-start w-[17%]">
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
          <div className="flex flex-col gap-[44px] items-start justify-start self-stretch w-[auto]">
            <Text
              className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
              variant="body6"
            >
              Home
            </Text>
            <Text
              className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
              variant="body6"
            >
              Humidity
            </Text>
            <Text
              className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
              variant="body6"
            >
              Light
            </Text>
            <Text
              className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
              variant="body6"
            >
              Air
            </Text>
            <Text
              className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
              variant="body6"
            >
              Chart
            </Text>
            <Text
              className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
              variant="body6"
            >
              Growth
            </Text>
            <Text
              className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
              variant="body6"
            >
              Chat
            </Text>
          </div>
        </div>
      </aside>
    </>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
