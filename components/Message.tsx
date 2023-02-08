import React from 'react';
import styles from '../assets/styles';

import { Text, View, Image } from 'react-native';

const Message = (props: any) => {
  
  return (
    <View style={styles.containerMessage}>
      <Image source={props.image} style={styles.avatar} />
      <View style={props.styles.content}>
        <Text>{props.name}</Text>
        <Text style={styles.message}>{props.lastMessage}</Text>
      </View>
    </View>
  );
};

export default Message;
