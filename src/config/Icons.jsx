import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

import { colors } from "./colors";

const materialCommunityIcons = (name, size = 24, color = "white") => (
  <MaterialCommunityIcons name={name} size={size} color={colors[color]} />
);

const fontAwesomeIcons = (name, size = 24, color = "white") => (
  <FontAwesome name={name} size={size} color={colors[color]} />
);

const ioniconsIcons = (name, size = 24, color = "white") => (
  <Ionicons name={name} size={size} color={colors[color]} />
);

export default { materialCommunityIcons, fontAwesomeIcons, ioniconsIcons };
