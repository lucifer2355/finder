import React from "react";
import SvgUri from "react-native-svg-uri";

const NoData = ({ length }) => {
  if (length === 0) {
    return (
      <SvgUri
        width='100%'
        height='100%'
        source={require("../../assets/svg/noData.svg")}
      />
    );
  }
  return null;
};

export default NoData;
