import React, { createContext } from 'react';
import { StackActions } from '@react-navigation/native';

const Context = createContext();
const { Provider, Consumer: MainConsumer } = Context;

const navigationRef = React.createRef();

class MainProvider extends React.Component {
  /*
   * 하위 컴포넌트에서 사용할 값 초기화
   */
  state = {
    stackCount: 0,
    tabNavigationCount: 0,
    memberToken: null,
  };

  /*
   * 아래에 값을 변경하는 함수 정의
   */
  action = {
    initStackCount: () => {
      const promise = new Promise((resolve) => {
        this.setState(
          {
            stackCount: 0,
          },
          () => {
            resolve();
          },
        );
      });

      return promise;
    },
    addTabNavigationCount: () => {
      this.setState({
        stackNavigationCount: this.state.stackNavigationCount + 1,
      });
    },
    subTabNavigationCount: () => {
      this.setState({ tabNavigationCount: this.state.tabNavigationCount - 1 });
    },
    memberToken: (memberToken) => {
      const promise = new Promise((resolve) => {
        this.setState(
          {
            memberToken,
          },
          () => {
            resolve(memberToken);
          },
        );
      });

      return promise;
    },
  };

  render() {
    const navigation = {
      addListener: (...args) => {
        navigationRef.current?.addListener(...args);
      },
      canGoBack: () => navigationRef.current?.canGoBack(),
      goBack: (...args) => {
        if (this.state.tabNavigationCount > 0) {
          this.action.subTabNavigationCount();
          navigationRef.current?.goBack(...args);
        }
      },
      navigate: (...args) => {
        this.action.addTabNavigationCount();
        navigationRef.current?.navigate(...args);
      },
      setParams: (...args) => {
        navigationRef.current?.setParams(...args);
      },
      replace: (...args) => {
        navigationRef.current?.dispatch(StackActions.replace(...args));
      },
      push: (...args) => {
        this.setState({
          stackCount: this.state.stackCount + 1,
        });

        navigationRef.current?.dispatch(StackActions.push(...args));
      },
      pop: (...args) => {
        if (this.state.stackCount === 0) {
          return;
        }

        this.setState({
          stackCount: this.state.stackCount - 1,
        });

        navigationRef.current?.dispatch(StackActions.pop(...args));
      },
      reset: (...args) => {
        if (this.state.stackCount === 0) {
          return;
        }

        this.setState({
          stackCount: 0,
        });

        navigationRef.current?.dispatch(StackActions.reset(...args));
      },
      popToTop: (...args) => {
        if (this.state.stackCount === 0) {
          return;
        }

        this.setState({
          stackCount: 0,
        });

        navigationRef.current?.dispatch(StackActions.popToTop(...args));
      },
    };

    const { state, action } = this;
    const context = { state, action, navigation };

    return <Provider value={context}>{this.props.children}</Provider>;
  }
}

function use(WrappedComponent) {
  return (data = { data: {} }) => (
    <MainConsumer>
      {(context) => (
        <WrappedComponent
          $state={context.state}
          $action={context.action}
          $navigation={context.navigation}
          $data={data.data}
        />
      )}
    </MainConsumer>
  );
}

export { MainProvider, MainConsumer, use, navigationRef };
