import React from 'react';
import { View, Text } from 'react-native';

import { use } from '../../../context';

class Setting extends React.Component {
  render() {
    return (
      <View>
        <Text>Setting</Text>
      </View>
    );
  }
}

export default use(Setting);
