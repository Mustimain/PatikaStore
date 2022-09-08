/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import store_data from './store_data.json';
import StoreCard from './components/StoreCard';

const App = () => {
  const renderStore = ({item}) => <StoreCard stores={item} />;
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>PATİKASTORE</Text>
        <TextInput
          style={styles.input}
          placeholder={'Ara...'}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <FlatList data={store_data} renderItem={renderStore} numColumns={2} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: 'transparent',
    margin: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
    margin: 5,
  },
  input: {
    height: 40,
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
});

export default App;
