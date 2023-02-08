import React from 'react';
import styles from '../assets/styles';

import {Text, View} from 'react-native';
// import Icon from './Icon';

const ProfileItem = props => {
  return (
    <View style={styles.containerProfileItem}>
      <View style={styles.matchesProfileItem}>
        <Text style={styles.matchesTextProfileItem}>
          {/* <Icon name="heart" /> {matches}% Match! */}
        </Text>
      </View>

      <Text style={styles.name}>{props.name}</Text>

      <Text style={styles.descriptionProfileItem}>
        {props.age} - {props.location}
      </Text>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>{/* <Icon name="user" /> */}</Text>
        <Text style={styles.infoContent}>{props.info1}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>{/* <Icon name="circle" /> */}</Text>
        <Text style={styles.infoContent}>{props.info2}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>{/* <Icon name="hashtag" /> */}</Text>
        <Text style={styles.infoContent}>{props.info3}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>{/* <Icon name="calendar" /> */}</Text>
        <Text style={styles.infoContent}>{props.info4}</Text>
      </View>
    </View>
  );
};

export default ProfileItem;
