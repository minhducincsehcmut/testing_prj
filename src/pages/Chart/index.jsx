import React from "react";

import HomePageHeader from "components/HomePageHeader";
import Sidebar from "components/Sidebar";
import ChartChart03 from "components/ChartChart03";

const ChartPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-akayatelivigala items-center justify-end mx-[auto] sm:pr-[20px] pr-[33px] pt-[33px] w-[100%]">
        <div className="flex flex-col gap-[33px] items-center justify-start max-w-[1384px] mx-[auto] md:px-[20px] w-[100%]">
          <HomePageHeader
            className="flex flex-row items-center justify-center w-[100%]"
            yolofarm="Yolo Farm"
            question="images/img_question.svg"
            hellouser="Hello, user"
          />
          <div className="flex md:flex-col flex-row font-inter md:gap-[40px] items-start justify-between w-[100%]">
            <Sidebar className="flex flex-col md:hidden justify-start w-[225px]" />
            <ChartChart03
              className="flex flex-1 flex-col font-abeezee items-center justify-start md:mt-[0] mt-[8px] w-[100%]"
              label="Air temperature"
              label_One="Air humidity"
              eightHundred="40"
              sixHundred="30"
              fourHundred="20"
              twoHundred="10"
              zero="0"
              time={
                <>
                  3pm
                  <br />
                  Temp: 26
                  <br />
                  Humidity: 29
                </>
              }
              label_Three="%"
              eightHundred_One="100"
              sixHundred_One="75"
              fourHundred_One="50"
              twoHundred_One="25"
              zero_One="0"
              time_One="7pm"
              time_Two="12pm"
              time_Three="5am"
              time_Four="10am"
              time_Five="3pm"
              time_Six="8pm"
              chartheader="Enviroment Chart"
              time_Seven={
                <>
                  8:45 pm
                  <br />
                  12/03/2023
                </>
              }
              label_Five="Light"
              label_Six="Soid moisture"
              label_Seven="Cd"
              eightHundred_Two="100"
              sixHundred_Two="75"
              fourHundred_Two="50"
              twoHundred_Two="25"
              zero_Two="0"
              time_Eight={
                <>
                  8pm
                  <br />
                  Light: 25
                  <br />
                  Moisture: 46
                </>
              }
              label_Eight="%"
              eightHundred_Three="100"
              sixHundred_Three="75"
              fourHundred_Three="50"
              twoHundred_Three="25"
              zero_Three="0"
              time_Nine="7pm"
              time_Ten="12pm"
              time_Eleven="5am"
              time_Twelve="10am"
              time_Thirteen="3pm"
              time_Fourteen="8pm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartPage;
