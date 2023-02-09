import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { createAppContainer } from "react-navigation";

const navigator = createStackNavigator({
  Home:HomeScreen
},{
  initialRouteName:"Home",
  defaultNavigationOptions:{
    title:"Business Search"
  }
})

export default createAppContainer(navigator)