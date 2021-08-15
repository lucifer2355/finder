import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import SvgUri from "react-native-svg-uri";

const SearchResultScreen = () => {
  const { searchResult } = useSelector((state) => state.searchReducer);

  if (searchResult.length === 0) {
    return (
      <SvgUri
        width='100%'
        height='100%'
        source={require("../../assets/svg/noData.svg")}
      />
    );
  }

  return (
    <View>
      <Text>Search Result Screen</Text>
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({});
