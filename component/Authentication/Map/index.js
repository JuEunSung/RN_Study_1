import React from 'react';
import { View, Text } from 'react-native';

import { use } from '../../../context';

class Map extends React.Component {
  render() {
    return (
      <View>
        <Text>Map</Text>
      </View>
    );
  }
}

export default use(Map);
