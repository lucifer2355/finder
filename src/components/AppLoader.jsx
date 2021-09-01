import React from "react";
import { ActivityIndicator, View } from "react-native";

import { colors } from "../config/colors";

const AppLoader = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size='large' color={colors.primary} />
    </View>
  );
};

export default AppLoader;
