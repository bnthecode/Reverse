import React from 'react';
import styles from '../assets/styles';

import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

const CardItem = (
 props: any
) => {

  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: props.variant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: props.variant ? 170 : 350,
      margin: props.variant ? 0 : 20
    }
  ];

  const nameStyle = [
    {
      paddingTop: props.variant ? 10 : 15,
      paddingBottom: props.variant ? 5 : 7,
      color: '#363636',
      fontSize: props.variant ? 15 : 30
    }
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={props.image} style={imageStyle} />

      {/* MATCHES */}
      {props.matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            {/* <Icon name="heart" /> {matches}% Match! */}
          </Text>
        </View>
      )}

      {/* NAME */}
      <Text style={nameStyle}>{props.name}</Text>

      {/* DESCRIPTION */}
      {props.description && (
        <Text style={styles.descriptionCardItem}>{props.description}</Text>
      )}

      {/* STATUS */}
      {props.status && (
        <View style={styles.status}>
          <View style={props.status === 'Online' ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{props.status}</Text>
        </View>
      )}

      {/* ACTIONS */}
      {props.actions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            <Text style={styles.star}>
              {/* <Icon name="star" /> */}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => props.onPressLeft()}>
            <Text style={styles.like}>
              {/* <Icon name="like" /> */}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => props.onPressRight()}
          >
            <Text style={styles.dislike}>
              {/* <Icon name="dislike" /> */}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}>
            <Text style={styles.flash}>
              {/* <Icon name="flash" /> */}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardItem;
