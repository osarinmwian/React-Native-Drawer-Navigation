import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native'
import Home from './screen/Home';
import Settings from './screen/Settings';
import FontaAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Drawer= createDrawerNavigator();
 function App() {
  return (
   
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName='Home'
      drawerPosition='left'
      drawerType='font'
      edgeWidth={100}
      overLayColor="#00000090"
      drewerStyle={{
        backgroundColor:"#e6e6e6",
        width: 250
      }}
      screenOptions={{
      headerShown: true,
      swipeEnabled: true,
      gestureEnabled: true,
      headerTitleAlign:"center",
      headerStyle:{
        backgroundColor:"#0080ff"
      },
      headerTintColor:"#e6e6e6",
      // headerTitle: ()=>null,
      headerTitleStyle:{
        fontSize:25,
        fontWeight:'bold'

      }
      }}
      >
        <Drawer.Screen
        name='home'
        component={Home}
        options={{

          title:()=> null,
          title:'Home Page',
          drawerIcon:({focused})=>(
             <FontaAwesome5
             name='home'
             size={focused ? 25: 20}
             color={focused ? '#0080ff':'#999999'}/>
          )
        }}/>
          <Drawer.Screen
        name='settings'
        component={Settings}
        options={{
          // header:()=> null,
          title:'Settings',
          drawerIcon:({focused})=>(
             <FontaAwesome5
             name='cog'
             size={focused ? 25: 20}
             color={focused ? '#0080ff':'#999999'}/>
          )
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
