import { Dimensions } from "react-native";
import { StyleSheet, Platform, StatusBar } from "react-native";
const { width, height } = Dimensions.get("window");

export const ss = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});


const COLORS = {
    // Base Colors
    primary:"#f96D41",
    secondary:"#252B2F",

    // Colors
    black:"#1E1B26",
    white:"#FFFFFF",
    lighGray:"#64676D",
    lighGray2:"#EFEFF0",
    lighGray3:"#D4D5D6",
    lighGray4:"#7D7E84",
    gray:"#2D3038",
    gray1:"#282C35",
    darkRed:"#31262F",
    lightRed:"#C5505E",
    darkBlue:"#22273B",
    lightBlue:"#424BAF",
    lightGreen:"#213432",
    darkGreen:"#31Ad66",
};

const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};

const FONTS = {
    largeTitle: { fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontSize: SIZES.body4, lineHeight: 22 },
};

export { SIZES, FONTS, COLORS };