import React from 'react';
import { View, Text } from 'react-native';

import { use } from '../../../context';

class Message extends React.Component {
  render() {
    return (
      <View>
        <Text>Message</Text>
      </View>
    );
  }
}

export default use(Message);
