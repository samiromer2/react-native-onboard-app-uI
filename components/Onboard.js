import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import AppIntroSlider from "react-native-app-intro-slider";
import colors from "../assets/colors/colors";
// import LinearGradient from "react-native-linear-gradient";
import {LinearGradient} from 'expo-linear-gradient';
const data = [
  {
    title: "Save time by tracking your studies",
    text: "Schedule your classes , assignments, quizzes and more",
    image: require("../assets/images/Onboard1.png"),
  },
  {
    title: "Stay on top of your education",
    text: "Reduce your stress,increase your productivity",
    image: require("../assets/images/Onboard2.png"),
  },
  {
    title: "Spend more time doing the things you love",
    text: "Get started within five minutes",
    image: require("../assets/images/Onboard3.png"),
  },
];
export default function Onboard(props) {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.image} source={item.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };
  const keyExtractor = (item) => item.title;
  const renderDoneButton = () => {
    return (
        <LinearGradient 
        start={{ x:0,y:0} }
        end={{ x:1,y:0 }}
        colors={['#A5C8FF', '#23286B']} style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>
          Done
        </Text>
      </LinearGradient>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };
  const handleDone = () => {
    props.handleDone();
  };
  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        onDone={handleDone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 30,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    textAlign: "center",
    fontFamily: "OpenSans-Bold",
    marginHorizontal: 35,
  },
  text: {
    fontSize: 14,
    color: colors.gray,
    textAlign: "center",
    fontFamily: "OpenSans-SemiBold",
    marginHorizontal: 60,
    marginTop: 20,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  rightText: {
    color: colors.blue,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  leftText: {
    color: colors.blue,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
  },
  dotStyle: {
    backgroundColor: colors.blueFaded,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    borderRadius: 25,
    marginRight:-50,
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    margin: 10,
    color: colors.white,
  },
});
