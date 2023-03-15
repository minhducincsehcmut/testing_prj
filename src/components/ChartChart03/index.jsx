import React from "react";

import { Text, Img, Line, List } from "components";

const ChartChart03 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[728px] sm:h-[749px] h-[822px] relative w-[100%]">
          <div className="absolute h-[435px] left-[0] outline outline-[1px] outline-white_A700 shadow-bs top-[0] w-[95%]"></div>
          <div className="absolute bg-black_900 flex flex-col md:gap-[40px] gap-[61px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[7px] rounded-[8px] w-[100%]">
            <div className="md:h-[308px] h-[380px] relative md:w-[100%] w-[94%]">
              <div className="absolute bottom-[0] flex items-center justify-start left-[0] w-[96%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <div className="flex flex-row gap-[110px] items-center justify-start md:w-[100%] w-[43%]">
                    <div className="flex flex-row gap-[15px] items-start justify-start w-[40%]">
                      <div className="bg-red_400 h-[11px] my-[3px] rounded-[5px] w-[16%]"></div>
                      <Text
                        className="font-abeezee font-normal italic text-left text-white_A700 w-[auto]"
                        variant="body14"
                      >
                        {props?.label}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start w-[34%]">
                      <div className="bg-indigo_A100 h-[11px] my-[3px] rounded-[5px] w-[19%]"></div>
                      <Text
                        className="font-abeezee font-normal italic text-left text-white_A700 w-[auto]"
                        variant="body14"
                      >
                        {props?.label_One}
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] mt-[21px] md:w-[100%] w-[94%]">
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[2%]">
                      <Img
                        src="images/img_label.png"
                        className="h-[13px] md:h-[auto] object-cover sm:w-[100%] w-[12px]"
                        alt="label_Two"
                      />
                      <Text
                        className="font-abeezee not-italic text-right text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        {props?.eightHundred}
                      </Text>
                      <Text
                        className="font-abeezee mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        {props?.sixHundred}
                      </Text>
                      <Text
                        className="font-abeezee mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        {props?.fourHundred}
                      </Text>
                      <Text
                        className="font-abeezee mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        {props?.twoHundred}
                      </Text>
                      <Text
                        className="font-abeezee md:ml-[0] ml-[5px] mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        {props?.zero}
                      </Text>
                    </div>
                    <div className="md:h-[227px] h-[228px] md:ml-[0] ml-[19px] relative md:w-[100%] w-[93%]">
                      <div className="absolute bottom-[0] h-[210px] inset-x-[0] mx-[auto] w-[100%]">
                        <Img
                          src="images/img_graphlines.svg"
                          className="absolute h-[210px] inset-[0] justify-center m-[auto] w-[auto]"
                          alt="graphlines"
                        />
                        <Img
                          src="images/img_graphlines_red_401.svg"
                          className="absolute h-[159px] inset-x-[0] mx-[auto] top-[8%] w-[auto]"
                          alt="graphlines_One"
                        />
                      </div>
                      <div className="absolute flex flex-col h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[18%] w-[11%]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[51px] items-center justify-start p-[3px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_tooltip.svg')",
                          }}
                        >
                          <Text
                            className="font-abeezee leading-[10.00px] mb-[9px] not-italic text-center text-gray_700"
                            as="h3"
                            variant="h3"
                          >
                            {props?.time}
                          </Text>
                        </div>
                        <Img
                          src="images/img_selector.svg"
                          className="h-[176px] w-[auto]"
                          alt="selector"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-start md:ml-[0] ml-[14px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-inter not-italic text-center text-white_A700 w-[auto]"
                        variant="body21"
                      >
                        {props?.label_Three}
                      </Text>
                      <Text
                        className="font-abeezee md:ml-[0] ml-[2px] not-italic text-right text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        {props?.eightHundred_One}
                      </Text>
                      <Text
                        className="font-abeezee md:ml-[0] ml-[7px] mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        {props?.sixHundred_One}
                      </Text>
                      <Text
                        className="font-abeezee md:ml-[0] ml-[7px] mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        {props?.fourHundred_One}
                      </Text>
                      <Text
                        className="font-abeezee md:ml-[0] ml-[7px] mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        {props?.twoHundred_One}
                      </Text>
                      <Text
                        className="font-abeezee md:ml-[0] ml-[13px] mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        {props?.zero_One}
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end ml-[auto] mt-[18px] md:w-[100%] w-[83%]">
                    <Text
                      className="font-abeezee not-italic text-center text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      {props?.time_One}
                    </Text>
                    <Text
                      className="font-abeezee md:ml-[0] ml-[132px] not-italic text-center text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      {props?.time_Two}
                    </Text>
                    <Text
                      className="font-abeezee md:ml-[0] ml-[133px] not-italic text-center text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      {props?.time_Three}
                    </Text>
                    <Text
                      className="font-abeezee md:ml-[0] ml-[132px] not-italic text-center text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      {props?.time_Four}
                    </Text>
                    <Text
                      className="font-abeezee md:ml-[0] ml-[135px] not-italic text-center text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      {props?.time_Five}
                    </Text>
                    <Text
                      className="font-abeezee md:ml-[0] ml-[137px] not-italic text-center text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      {props?.time_Six}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between left-[0] top-[0] w-[81%]">
                <Text
                  className="font-akayatelivigala mb-[16px] not-italic text-left text-white_A700 w-[auto]"
                  variant="body1"
                >
                  {props?.chartheader}
                </Text>
                <div className="flex flex-row items-center justify-start sm:mt-[0] mt-[21px] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col items-center justify-start pt-[2px] w-[34%]">
                    <Text
                      className="font-abeezee font-normal not-italic text-center text-indigo_A201 w-[auto]"
                      variant="body12"
                    >
                      {props?.label_Four}
                    </Text>
                    <Line className="bg-indigo_A201 h-[5px] mt-[2px] w-[100%]" />
                  </div>
                  <List
                    className="sm:flex-col flex-row grid grid-cols-2 w-[67%]"
                    orientation="horizontal"
                  >
                    <div className="flex items-center justify-start p-[2px] w-[100%]">
                      <Text
                        className="font-abeezee font-normal mb-[5px] not-italic text-center text-indigo_A201 w-[auto]"
                        variant="body12"
                      >
                        {props?.label}
                      </Text>
                    </div>
                    <div className="flex items-center justify-start pb-[9px] px-[9px] w-[100%]">
                      <Text
                        className="font-abeezee font-normal not-italic text-center text-indigo_A201 w-[auto]"
                        variant="body12"
                      >
                        {props?.label}
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
              <Text
                className="absolute font-inter leading-[35.00px] not-italic right-[0] text-center text-white_A700 top-[5%]"
                variant="body7"
              >
                {props?.time_Seven}
              </Text>
            </div>
            <div className="flex items-center justify-start mb-[56px] md:w-[100%] w-[89%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row gap-[191px] items-start justify-start md:w-[100%] w-[44%]">
                  <div className="flex flex-row gap-[16px] items-start justify-between w-[20%]">
                    <div className="bg-yellow_300 h-[11px] my-[3px] rounded-[5px] w-[32%]"></div>
                    <Text
                      className="font-abeezee font-normal italic text-left text-white_A700 w-[auto]"
                      variant="body14"
                    >
                      {props?.label_Five}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start justify-start w-[35%]">
                    <div className="bg-indigo_A100 h-[11px] my-[3px] rounded-[5px] w-[18%]"></div>
                    <Text
                      className="font-abeezee font-normal italic text-left text-white_A700 w-[auto]"
                      variant="body14"
                    >
                      {props?.label_Six}
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end ml-[auto] mt-[21px] md:w-[100%] w-[95%]">
                  <div className="flex flex-col items-start justify-start md:w-[100%] w-[3%]">
                    <Text
                      className="font-inter h-[13px] md:ml-[0] ml-[5px] not-italic text-center text-white_A700 w-[auto]"
                      variant="body21"
                    >
                      {props?.label_Seven}
                    </Text>
                    <Text
                      className="font-abeezee not-italic text-right text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      {props?.eightHundred_Two}
                    </Text>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] mt-[42px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-abeezee not-italic text-right text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        {props?.sixHundred_Two}
                      </Text>
                      <Text
                        className="font-abeezee mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        {props?.fourHundred_Two}
                      </Text>
                      <Text
                        className="font-abeezee mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        {props?.twoHundred_Two}
                      </Text>
                      <Text
                        className="font-abeezee md:ml-[0] ml-[5px] mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        {props?.zero_Two}
                      </Text>
                    </div>
                  </div>
                  <div className="h-[210px] md:ml-[0] ml-[19px] md:mt-[0] mt-[23px] relative md:w-[100%] w-[92%]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] py-[14px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_graphlines.svg')",
                      }}
                    >
                      <Img
                        src="images/img_graphlines_yellow_301.svg"
                        className="h-[160px] mt-[21px] w-[auto]"
                        alt="graphlines_Two"
                      />
                    </div>
                    <div className="absolute bottom-[1%] flex flex-col items-center justify-start right-[0] w-[11%]">
                      <div
                        className="bg-cover bg-no-repeat flex h-[51px] items-center justify-start p-[3px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_tooltip.svg')",
                        }}
                      >
                        <Text
                          className="font-abeezee leading-[10.00px] mb-[9px] not-italic text-center text-gray_700"
                          as="h3"
                          variant="h3"
                        >
                          {props?.time_Eight}
                        </Text>
                      </div>
                      <Img
                        src="images/img_selector.svg"
                        className="h-[138px] w-[auto]"
                        alt="selector_One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-start md:ml-[0] ml-[15px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-inter not-italic text-center text-white_A700 w-[auto]"
                      variant="body21"
                    >
                      {props?.label_Eight}
                    </Text>
                    <Text
                      className="font-abeezee md:ml-[0] ml-[2px] not-italic text-right text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      {props?.eightHundred_Three}
                    </Text>
                    <Text
                      className="font-abeezee md:ml-[0] ml-[7px] mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      {props?.sixHundred_Three}
                    </Text>
                    <Text
                      className="font-abeezee md:ml-[0] ml-[7px] mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      {props?.fourHundred_Three}
                    </Text>
                    <Text
                      className="font-abeezee md:ml-[0] ml-[7px] mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      {props?.twoHundred_Three}
                    </Text>
                    <Text
                      className="font-abeezee md:ml-[0] ml-[13px] mt-[42px] not-italic text-right text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      {props?.zero_Three}
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end ml-[auto] mt-[18px] md:w-[100%] w-[83%]">
                  <Text
                    className="font-abeezee not-italic text-center text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    {props?.time_Nine}
                  </Text>
                  <Text
                    className="font-abeezee md:ml-[0] ml-[132px] not-italic text-center text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    {props?.time_Ten}
                  </Text>
                  <Text
                    className="font-abeezee md:ml-[0] ml-[133px] not-italic text-center text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    {props?.time_Eleven}
                  </Text>
                  <Text
                    className="font-abeezee md:ml-[0] ml-[132px] not-italic text-center text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    {props?.time_Twelve}
                  </Text>
                  <Text
                    className="font-abeezee md:ml-[0] ml-[135px] not-italic text-center text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    {props?.time_Thirteen}
                  </Text>
                  <Text
                    className="font-abeezee md:ml-[0] ml-[137px] not-italic text-center text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    {props?.time_Fourteen}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ChartChart03.defaultProps = {
  label: "Air temperature",
  label_One: "Air humidity",
  eightHundred: "40",
  sixHundred: "30",
  fourHundred: "20",
  twoHundred: "10",
  zero: "0",
  time: (
    <>
      3pm
      <br />
      Temp: 26
      <br />
      Humidity: 29
    </>
  ),
  label_Three: "%",
  eightHundred_One: "100",
  sixHundred_One: "75",
  fourHundred_One: "50",
  twoHundred_One: "25",
  zero_One: "0",
  time_One: "7pm",
  time_Two: "12pm",
  time_Three: "5am",
  time_Four: "10am",
  time_Five: "3pm",
  time_Six: "8pm",
  chartheader: "Enviroment Chart",
  label_Four: "Daily",
  label: "Monthly",
  label: "All time",
  time_Seven: (
    <>
      8:45 pm
      <br />
      12/03/2023
    </>
  ),
  label_Five: "Light",
  label_Six: "Soid moisture",
  label_Seven: "Cd",
  eightHundred_Two: "100",
  sixHundred_Two: "75",
  fourHundred_Two: "50",
  twoHundred_Two: "25",
  zero_Two: "0",
  time_Eight: (
    <>
      8pm
      <br />
      Light: 25
      <br />
      Moisture: 46
    </>
  ),
  label_Eight: "%",
  eightHundred_Three: "100",
  sixHundred_Three: "75",
  fourHundred_Three: "50",
  twoHundred_Three: "25",
  zero_Three: "0",
  time_Nine: "7pm",
  time_Ten: "12pm",
  time_Eleven: "5am",
  time_Twelve: "10am",
  time_Thirteen: "3pm",
  time_Fourteen: "8pm",
};

export default ChartChart03;
