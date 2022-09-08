import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './StoreCard.style';

const StoreCard = ({stores}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image_container} source={{uri: stores.imgURL}} />
      <View style={styles.bottom_container}>
        <Text style={styles.title_container}>{stores.title}</Text>
        <Text style={styles.price_container}>{stores.price}</Text>
        <Text style={styles.stok_container}>
          {stores.inStock ? '' : 'STOKTA YOK'}
        </Text>
      </View>
    </View>
  );
};

export default StoreCard;
