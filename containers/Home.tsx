import React from 'react';
import { View, ImageBackground } from 'react-native';
// import City from '../components/City';
// import Filters from '../components/Filters';
import styles from '../assets/styles';
import City from '../components/City';
import Filters from '../components/Filters';

const Home = () => {
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
          {/* <City />
          <Filters /> */}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
