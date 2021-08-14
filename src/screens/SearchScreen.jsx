import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import Icons from "../config/Icons";
import AppTextInput from "../components/AppTextInput";

const SearchScreen = () => {
  const [values, setValues] = useState({ country: "", state: "", city: "" });
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
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
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default SearchScreen;
