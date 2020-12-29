import React from 'react';
import { View, Text } from 'react-native';

import { use } from '../../../context';

class Schedule extends React.Component {
  render() {
    return (
      <View>
        <Text>Schedule</Text>
      </View>
    );
  }
}

export default use(Schedule);
