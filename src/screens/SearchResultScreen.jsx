import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const SearchResultScreen = () => {
  const { searchResult } = useSelector((state) => state.searchReducer);

  console.log(searchResult);

  return (
    <View>
      <Text>Search Result Screen</Text>
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({});
