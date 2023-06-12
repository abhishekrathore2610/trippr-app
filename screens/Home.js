import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
 
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

// import { AntDesign } from '@expo/vector-icons';

import DatePicker from "react-native-datepicker";
import { useFonts } from "expo-font";



const MyComponent = () => {
  const [buttonStates1, setButtonStates1] = useState([true, false, false]);

  const handlePress1 = (index) => {
    const newButtonStates1 = [...buttonStates1];
    newButtonStates1.fill(false);
    newButtonStates1[index] = true;
    setButtonStates1(newButtonStates1);
  };

  const [buttonStates2, setButtonStates2] = useState([true, false, false]);

  const handlePress2 = (index) => {
    const newButtonStates2 = [...buttonStates1];
    newButtonStates2.fill(false);
    newButtonStates2[index] = true;
    setButtonStates2(newButtonStates2);
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const swap = () => {
    setPickup(drop);
    setDrop(pickup);
  };

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");


  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [pet, setPet] = useState(0);

  const [fontsLoaded] = useFonts({
    mosereta: require("../assets/fonts/Montserrat-Bold.ttf"),
    roboto: require("../assets/fonts/Roboto-Regular.ttf"),
    post: require("../assets/fonts/postnobillscolombo-bold.ttf"),
    porter: require("../assets/fonts/porter-sans-inline-block.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.left}>
          <EvilIcons name="navicon" size={30} color="black" />
          <Text style={styles.hometext}>Home</Text>
        </View>
        <View style={styles.right}>
          <AntDesign name="sharealt" size={24} color="black" />
          <Feather name="search" size={24} color="black" />
        </View>
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.maintext}>
          Discover the <Text style={styles.bluetext}>Best Car Rentals </Text>and{" "}
          <Text style={styles.bluetext}>Homestays</Text> in India.
        </Text>
      </View>
      <View style={styles.mainimage}>
        <Image
          source={require("../assets/background-img-home.png")}
          resizeMode="contain"
          style={styles.bigimage}
        />
        <Image
          source={require("../assets/discover.png")}
          style={styles.image1}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/tc-applied.png")}
          style={styles.image2}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/special-offer-new.png")}
          style={styles.image3}
          resizeMode="contain"
        />
        <View style={styles.getoffcontainer}>
          <Text style={styles.getofftext1}>GET</Text>
          <Text style={styles.getofftext2}>₹1500</Text>
          <Text style={styles.getofftext1}>OFF ON YOUR FIRST RIDE</Text>
        </View>
      </View>
      <View style={styles.btncontainer}>
        <TouchableOpacity
          style={[styles.button1, buttonStates1[0] && styles.activeButton1]}
          onPress={() => handlePress1(0)}
        >
          <Text style={styles.btntext}>Car</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button1, buttonStates1[1] && styles.activeButton1]}
          onPress={() => handlePress1(1)}
        >
          <Text style={styles.btntext}>Buses</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button1, buttonStates1[2] && styles.activeButton1]}
          onPress={() => handlePress1(2)}
        >
          <Text style={styles.btntext}>Homestays</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taxitab}>
        <TouchableOpacity
          style={[styles.cont1, buttonStates2[0] && styles.activeButton2]}
          onPress={() => handlePress2(0)}
        >
          <Image source={require("../assets/plane-takeoff.png")} />
          <Text>Airport Cabs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.cont1, buttonStates2[1] && styles.activeButton2]}
          onPress={() => handlePress2(1)}
        >
          <Image source={require("../assets/car-local.png")} />
          <Text>Local</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.cont1, buttonStates2[2] && styles.activeButton2]}
          onPress={() => handlePress2(2)}
        >
         <Image source={require("../assets/car-outstation.png")} />
          <Text>Outstation</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.switchcontainer}>
        <Text style={styles.switchtext}>Travel to airport</Text>
        <Switch
          trackColor={{ false: "black", true: "black" }}
          // thumbColor={isEnabled ? 'white' : 'green'}
          ios_backgroundColor="#0056FB"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.switchtext}>Travel from Airport</Text>
      </View>
      <View style={styles.pickdropbox}>
        <View style={styles.pick}>
          <Image
            source={require("../assets/gps-new.png")}
            size={10}
            resizeMode="center"
            style={styles.gps}
          />
          <TextInput
            placeholder="Pickup Location"
            style={styles.pickinput}
            onChangeText={(e) => setPickup(e)}
            value={pickup}
          ></TextInput>
        </View>
        <View style={styles.swapimagearea}>
          <TouchableOpacity onPress={swap}>
            <Image
              source={require("../assets/switch-new.png")}
              style={styles.swapimage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.drop}>
          <Image
            source={require("../assets/gps-new.png")}
            size={10}
            resizeMode="center"
            style={styles.gps}
          />
          <TextInput
            placeholder="Drop Location"
            style={styles.pickinput}
            onChangeText={(e) => setDrop(e)}
            value={drop}
          ></TextInput>
        </View>
        
      </View>
      <View style={styles.datetimecontainer}>
        <Image source={require("../assets/calender.png")} resizeMode="center" />
        <View style={styles.datetimemini}>
          <View style={styles.date}>
            <Text>Start Date</Text>
            <DatePicker
              style={styles.datePicker}
              date={selectedDate}
              mode="date"
              placeholder="Select date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={(date) => setSelectedDate(date)}
            />
          </View>

          <View style={styles.time}>
            <Text>Start Time</Text>
            <DatePicker
              style={styles.datePicker}
              date={selectedTime}
              mode="time"
              placeholder="Select time"
              format="HH:mm"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={(time) => setSelectedTime(time)}
            />
          </View>
        </View>
      </View>
      <View style={styles.passengercontainer}>
        <View style={styles.passengercontainer1}>
          <Image
            source={require("../assets/passengers.png")}
            resizeMode="center"
          />
          <Text>Passengers</Text>
        </View>

        <View style={styles.passengercontainer2}>
          <View style={styles.passengercontainermini1}>
            <Text style={styles.countertext}>Adult (16+ Yrs)</Text>
            <View style={styles.counter}>
              <TouchableOpacity onPress={() => setAdult(adult + 1)}>
                <AntDesign name="pluscircleo" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.countertext}>{adult}</Text>
              <TouchableOpacity onPress={() => setAdult(adult - 1)}>
                <AntDesign name="minuscircleo" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.passengercontainermini2}>
            <Text style={styles.countertext}>Children (2-15 Yrs)</Text>
            <View style={styles.counter}>
              <TouchableOpacity onPress={() => setChildren(children + 1)}>
                <AntDesign name="pluscircleo" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.countertext}>{children}</Text>
              <TouchableOpacity onPress={() => setChildren(children - 1)}>
                <AntDesign name="minuscircleo" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.passengercontainermini3}>
            <Text style={styles.countertext}>Pets</Text>
            <View style={styles.counter}>
              <TouchableOpacity onPress={() => setPet(pet + 1)}>
                <AntDesign name="pluscircleo" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.countertext}>{pet}</Text>
              <TouchableOpacity onPress={() => setPet(pet - 1)}>
                <AntDesign name="minuscircleo" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.searchcontainer}>
        <TouchableOpacity style={styles.searchbtn}>
          <Text style={styles.searchbtntext}>Search</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.carcontainer}>
        <View style={styles.carcontainer1}>
          <View style={styles.top1}>
              <Image source={require('./assets/swift-dezire.png')}/>
             <View style={styles.secondhalf}>
              
             </View>
          </View>
          <View style={styles.bottom1}>
            
          </View>
        </View>
        <View style={styles.carcontainer2}>
          
        </View>
      </View> */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // height:'100%',
    // backgroundColor: "red",
    padding: 8,
    gap: 10,
  },
  navbar: {
    width: "100%",
    // backgroundColor: "aqua",
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  left: {
    flexDirection: "row",
    gap: 20,
  },
  right: {
    flexDirection: "row",
    gap: 20,
  },
  hometext: {
    fontSize: 22,
    fontFamily: "roboto",
    color: "#7F7F73",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: "blue",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  textcontainer: {
    // backgroundColor: "green",
    height: 120,
    width: 310,
    marginTop: 25,
  },
  maintext: {
    color: "black",
    fontSize: 30,
    fontFamily: "mosereta",
  },
  bluetext: {
    color: "#0056FB",
  },
  mainimage: {
    // backgroundColor: "blue",
    // width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  bigimage: {
    width: "80%",
    height: 200,
    position: "relative",
  },
  image1: {
    position: "absolute",
    width: "55%",

    right: 0,
    bottom: 180,
  },
  image2: {
    position: "absolute",
    width: "35%",
    bottom: 95,
    left: 25,
  },
  image3: {
    position: "absolute",
    width: "60%",
    top: 50,
    left: 90,
  },
  getoffcontainer: {
    // backgroundColor:'red',
    width: 205,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 65,
    right: 105,
    gap:6
  },
  getofftext1: {
    fontSize: 16,
    fontFamily: "post",
    color: "white",
  },
  getofftext2: {
    fontSize: 16,
    fontFamily: "porter",
    color: "white",
  },
  btncontainer: {
    // backgroundColor: "purple",
    width: "100%",
    flexDirection: "row",
    // alignItems:'center',
    height: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 15,
  },
  button1: {
    backgroundColor: "white",
    width: "25%",
    height: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1
    // marginTop: 20,
  },
  btntext: {
    color: "black",
  },
  activeButton1: {
    backgroundColor: 'grey',
  },
  activeButton2:{
    backgroundColor:'lightblue'
  },
  taxitab: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 70,
    alignItems: "center",
    // borderWidth: 1,
    borderRadius: 10,
    shadowColor: "black",
    // shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 15,
  },
  cont1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "black",
    // borderWidth: 1,
    padding: 5,
    height: 60,
    width: "27%",
    borderRadius: 20,
  },
  switchcontainer: {
    // backgroundColor: "purple",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 60,
    marginTop: 15,
  },
  switchtext: {
    fontSize: 17,
  },
  pick: {
    flexDirection: "row",
    borderWidth: 1,
    // backgroundColor: "aqua",
    alignItems: "center",
    // justifyContent: "start",
    height: 50,
    width: "100%",
    // justifyContent:'start',
    // position: "relative",
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: "black",
    zIndex: 1,
  },
  gps: {
    // backgroundColor: "black",
    width: "10%",
    height: 50,
  },
  pickinput: {
    // backgroundColor: "purple",
    width: "90%",
    height: 50,
    color: "black",
  },

  drop: {
    flexDirection: "row",
    borderWidth: 1,
    // backgroundColor: "aqua",
    alignItems: "center",
    // justifyContent: "start",
    height: 50,
    width: "100%",
    // justifyContent:'start',
    // position: "relative",
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: "black",
    zIndex: 1,
  },
  pickdropbox: {
    // backgroundColor: "green",
    height: 160,
    width: "100%",
    // alignItems: "center",

    // position: "relative",
    // marginTop: 10,
    justifyContent: "center",
    marginTop: 15,
  },
  swapimagearea: {
    // backgroundColor:'red',
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },

  swapimage: {
    // backgroundColor:'blue',
    // width: 35,
    // height: 35
    top: 5
  },
  datetimecontainer: {
    // backgroundColor: "yellow",
    height: 70,
    // justifyContent:'flex-start',
    // alignItems:'center',
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
  },
  datetimemini: {
    // backgroundColor: "lightblue",
    flexDirection: "row",
    width: 300,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  passengercontainer: {
    // backgroundColor:'pink',
    height: 150,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
  },
  passengercontainer1: {
    // backgroundColor:'indigo',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 40,
    width: "100%",
  },
  counter: {
    flexDirection: "row",
    // backgroundColor:'grey',
    height: 33,
    width: "70%",
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: 1,
  },
  passengercontainermini1: {
    // backgroundColor:'green',
    // borderWidth:1,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  passengercontainer2: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 100,
    width: "100%",
    // backgroundColor:'orange'
  },
  passengercontainermini2: {
    // backgroundColor:'blue',
    // borderWidth:1,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  passengercontainermini3: {
    // backgroundColor:'green',
    // borderWidth:1,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  searchcontainer: {
    // backgroundColor:'red',
    height: 150,
    width: "100%",
    
    justifyContent: "center",
    alignItems: "center",
  },
  searchbtn: {
    width: "60%",
    backgroundColor: "#0056FB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    height: 45,
  },
  searchbtntext: {
    color: "white",
    fontSize: 22,
  },
  carcontainer: {
    backgroundColor: 'red',
    width:'100%',
    height: 250,
    marginTop: 20
  },
  top1:{
    backgroundColor:'aqua',
    height:150,
    width:'50%',
    paddingTop: 75,
    
    
  },
  bottom1: {
    backgroundColor:'yellow',
    height:100,
    width:'50%'
  }, 
  secondhalf: {
    height:75,
    backgroundColor:'grey',
    
  }

  
});

export default MyComponent;
