import React, { useState, useEffect } from "react"; 
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground} from "react-native"; 
import packets from './packets.json';


const App = () => { 
	const [counter, setCounter] = useState(10); 
  var batteryimage = <ImageBackground style={styles.battery} source={require("./assets/battery/Bat4.png")}></ImageBackground>;	
  const [packet, setPacket] = useState({
    "idMobile": 0,
    "battery": 0
  });
  var batterylvl = packet.battery;
  const idMobile = packet.idMobile; 
  
  useEffect(() => {
    setPacket(packets);
  }, []);

	const buttonPlus = () => { 
    if (counter != 20){
		setCounter(counter + 1); 
    console.log("Max. speed is: " + (counter + 1));} 
	}; 

	const buttonMinus = () => { 
    if (counter != 0){
		  setCounter(counter - 1);
      console.log("Max. speed is: " + (counter - 1)); 
      }
	};
  const buttonBrake = () => {
    console.log('You have been clicked the Brake button!');
    setPacket(prevPacket => ({ ...prevPacket, battery: 100 }));
  };


  if(batterylvl == 100){
    batteryimage = (<ImageBackground style={styles.battery} source={require("./assets/battery/FullBat.png")}> 
    <Text style={styles.batteryLabel}>{batterylvl}%</Text>
    </ImageBackground>) 
  }else if(batterylvl < 5){
    batteryimage = (<ImageBackground style={styles.battery} source={require("./assets/battery/NoBat.png")}> 
    <Text style={styles.batteryLabel}>{batterylvl}%</Text>
    </ImageBackground>) 
  }else if(batterylvl < 20){
    batteryimage = (<ImageBackground style={styles.battery} source={require("./assets/battery/Bat1.png")}> 
    <Text style={styles.batteryLabel}>{batterylvl}%</Text>
    </ImageBackground>) 
  }else if(batterylvl < 40){
    batteryimage = (<ImageBackground style={styles.battery} source={require("./assets/battery/Bat2.png")}> 
    <Text style={styles.batteryLabel}>{batterylvl}%</Text>
    </ImageBackground>) 
  }else if( batterylvl < 60){
    batteryimage = (<ImageBackground style={styles.battery} source={require("./assets/battery/Bat3.png")}> 
    <Text style={styles.batteryLabel}>{batterylvl}%</Text>
    </ImageBackground>) 
  }else if(batterylvl < 80){
    batteryimage = (<ImageBackground style={styles.battery} source={require("./assets/battery/Bat4.png")}> 
    <Text style={styles.batteryLabel}>{batterylvl}%</Text>
    </ImageBackground>) 
  }else if( batterylvl < 100){
    batteryimage = (<ImageBackground style={styles.battery} source={require("./assets/battery/Bat5.png")}> 
    <Text style={styles.batteryLabel}>{batterylvl}%</Text>
    </ImageBackground>) 
  }

	return ( 
		<View style={styles.container}>
      <Image style={styles.row} source={require("./assets/SmartBrakeName.png")}/>
      <View style={styles.row}>
        {batteryimage}
      </View>
      <View style={styles.row} >
      <TouchableOpacity
        onPress={buttonBrake}
        style={styles.roundButton}>
        <Text style={styles.buttonLabel}>BRAKE</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.vel}> Max. Speed</Text>
      <View style={styles.row}>
				<TouchableOpacity style={styles.velButton} 
								onPress={buttonMinus}> 
					<Text style={styles.velButtonLabel2}>-</Text> 
				</TouchableOpacity> 
        <Text style={styles.velLabel}>{counter}  mph </Text>
				<TouchableOpacity style={styles.velButton}
								onPress={buttonPlus}> 
					<Text style={styles.velButtonLabel1}>+</Text> 
				</TouchableOpacity> 
		  </View> 
    </View>
	); 
}; 

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageWrapper: { 
    width:"100%",
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  battery: { // With the height and width of the Battery image
    resizeMode: "cover",
    height: 93,
    width: 208,
    overflow : "hidden",
  },
  batteryLabel: {
    textAlign: 'center',
    paddingVertical: 11,
    fontSize: 45,
    color: 'black',
    fontWeight: "bold",
  },
  roundButton: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 400,
    backgroundColor: 'indianred',
  },
  buttonLabel: {
    fontSize: 50,
    color: 'black',
    fontWeight: "bold",
  },
  vel: {
    paddingVertical: 11,
    fontSize: 30,
    color: 'black',
    fontWeight: "bold",
  },
  velButton:{
    height: 70,
    width: 60,
    backgroundColor:"#2a7d8b",
  },
  velButtonLabel1: {
    fontSize: 50,
    color: 'white',
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
  velButtonLabel2: {
    fontSize: 50,
    color: 'white',
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  velLabel: {
    fontSize: 50,
    height: 70,
    color: 'black',
    fontWeight: "bold",
    backgroundColor:"white",
    paddingHorizontal: 30,
  },
});

export default App;
