import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-[48px] md:text-[48px] text-[96px]",
  h2: "font-normal sm:text-[48px] md:text-[48px] text-[90px]",
  h3: "font-normal text-[9.15px]",
  h4: "font-normal sm:text-[38px] md:text-[44px] text-[48px]",
  h5: "font-normal sm:text-[36px] md:text-[38px] text-[40px]",
  h6: "font-bold sm:text-[33.91px] md:text-[35.91px] text-[37.91px]",
  body1: "font-normal sm:text-[29.28px] md:text-[31.28px] text-[33.28px]",
  body2:
    "font-bold sm:text-[28.659999999999997px] md:text-[30.659999999999997px] text-[32.66px]",
  body3: "font-bold sm:text-[28.54px] md:text-[30.54px] text-[32.54px]",
  body4: "font-normal sm:text-[28px] md:text-[30px] text-[32px]",
  body5: "font-normal sm:text-[26px] md:text-[28px] text-[30px]",
  body6: "sm:text-[21px] md:text-[23px] text-[25px]",
  body7: "font-normal sm:text-[20px] md:text-[22px] text-[24px]",
  body8: "font-normal sm:text-[18px] md:text-[20px] text-[22px]",
  body9: "font-semibold sm:text-[17px] md:text-[19px] text-[21px]",
  body10: "font-normal sm:text-[16.41px] md:text-[18.41px] text-[20.41px]",
  body11: "font-normal sm:text-[16.34px] md:text-[18.34px] text-[20.34px]",
  body12: "text-[20px]",
  body13: "font-normal text-[18px]",
  body14: "text-[16px]",
  body15: "font-semibold text-[14px]",
  body16: "font-normal text-[13.06px]",
  body17: "font-normal text-[13.02px]",
  body18: "font-medium text-[12.27px]",
  body19: "text-[12px]",
  body20: "font-extrabold text-[11px]",
  body21: "font-normal text-[10.31px]",
  body22: "font-normal text-[10px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
