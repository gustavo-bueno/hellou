import React from "react";
import { H2 } from "../Text";

import { ButtonProps } from "./interfaces";
import { CustomButton } from "./styles";

const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <CustomButton {...rest}>
      <H2 color="white">{title}</H2>
    </CustomButton>
  );
};

export default Button;
