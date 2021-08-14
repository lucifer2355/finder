import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import Icons from "../config/Icons";
import AppTextInput from "../components/AppTextInput";
import { colors } from "../config/colors";

const SearchScreen = () => {
  const [values, setValues] = useState({ country: "", state: "", city: "" });
  const [openDropDown, setOpenDropDown] = useState(false);
  const [age, setAge] = useState("20 - 23");
  const [items, setItems] = useState([
    { label: "20 - 23", value: "20 - 23" },
    { label: "24 - 27", value: "24 - 27" },
    { label: "28 - 34", value: "28 - 34" },
  ]);

  return (
    <View style={styles.screen}>
      <AppTextInput
        placeholder='Country'
        icon={Icons.fontAwesomeIcons("flag")}
        onChangeText={(text) =>
          setValues((preState) => ({ ...preState, country: text }))
        }
      />
      <AppTextInput
        placeholder='State'
        icon={Icons.fontAwesomeIcons("flag")}
        onChangeText={(text) =>
          setValues((preState) => ({ ...preState, state: text }))
        }
      />
      <AppTextInput
        placeholder='City'
        icon={Icons.materialCommunityIcons("city")}
        onChangeText={(text) =>
          setValues((preState) => ({ ...preState, city: text }))
        }
      />

      <DropDownPicker
        open={openDropDown}
        value={age}
        items={items}
        setOpen={setOpenDropDown}
        setValue={setAge}
        setItems={setItems}
        labelStyle={styles.dropDownLabelStyle}
        style={styles.dropDown}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
  },

  dropDown: {
    backgroundColor: colors.transparentBlack,
    borderRadius: 25,
    paddingHorizontal: 25,
  },

  dropDownLabelStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.white,
  },
});

export default SearchScreen;
