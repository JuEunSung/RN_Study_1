import React from 'react';
import { View, Text } from 'react-native';

import { use } from '../../../context';

class Home extends React.Component {
  componentDidMount() {
    this.start();
  }

  async start() {
    await this.props.$action.memberToken('test');
  }

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

export default use(Home);
