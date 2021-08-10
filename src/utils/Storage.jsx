import AsyncStorage from "@react-native-async-storage/async-storage";

const getItem = (key) => {
  try {
    return AsyncStorage.getItem(key);
  } catch (error) {
    console.log("Error in get item", error);
  }
};

const setItem = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log("Error in set item", error);
  }
};

const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("Error in remove item", error);
  }
};

export { getItem, setItem, removeItem };
