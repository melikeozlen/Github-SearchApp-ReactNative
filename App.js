import React,{useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Welcome from './components/Welcome';
const App = () => {
  const [timer, setTimer] = useState(0);

  setTimeout(() => {
    setTimer(timer + 1);
  }, 1000);

  return (
    <View  style={{flex: 1, backgroundColor: 'hsla(220, 40%, 13%, 1.0)'}}>
      {timer === 0 ? 
      <Welcome /> : 
      <>
      <Navbar/>
      <Main />
      </>
      
}
    
    </View>
  );
}





export default App;
