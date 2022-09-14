import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, ImageBackground, Modal, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
    <TouchableWithoutFeedback onPress={()=>{
      Alert.alert("No", "choose the modal", [{text:"I will"}])
    }}>
      <View>
        <ImageBackground source={require("./assets/2.png")} style={styles.image}/>
        <View>
          <View style={styles.flexs}>
            <Text style={styles.f1}>1</Text>
            <Text style={styles.f2}>2</Text>
            <Text style={styles.f3}>3</Text>
          </View>
        <Modal
          visible={showModal}
          animationType={'slide'}
          style={styles.modal}
        >
          <TouchableOpacity onPress={() => { setShowModal(false) }}>
            <Text style={styles.modal}> Hello </Text>
          </TouchableOpacity>
        </Modal>
        <Button title={"show Modal"}
          onPress={() => { setShowModal(true) }}
        ></Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
    <Button title={"Alert"}
          onPress={() => { Alert.alert("No", "choose the modal", [{text:"I will"}]) }}
        ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  image:{
    width:500,
    height:50
  },
  modal:{
    width:200,
    height:200,
    margin:"auto",
    backgroundColor:"pink"
  },
  flexs:{
  flexDirection:"row"
  },
  f1:{
    width:100,
    height:100,
    margin:20,
    backgroundColor:"blue"
  },
  f2:{
    width:100,
    height:100,
    margin:20,
    backgroundColor:"red"
  },

  f3:{
    width:100,
    height:100,
    margin:20,
    backgroundColor:"green"
  }
  
});
