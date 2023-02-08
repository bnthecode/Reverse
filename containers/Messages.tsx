import React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList
} from 'react-native';
import Message from '../components/Message';
import {demo} from '../assets/data/demo';

const Messages = () => {
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containerMessages}>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>Messages</Text>
            <TouchableOpacity>
              <Text style={styles.icon}>
                {/* <Icon name="optionsV" /> */}
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={demo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Message
                  image={item.image}
                  name={item.name}
                  lastMessage={item.message}
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Messages;
