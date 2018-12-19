import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import './App.css';

const styles = StyleSheet.create({
 
  row3: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'left',
    margin:100
  },
    row2: {
    flex: 1,
    flexDirection: 'column',
    margin:100
  },
    row1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'left',
    margin:100
  },
 
  CircleShapeViewLeft: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
    backgroundColor: 'red',
    opacity: 0.3
}
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isSank: false, opacity: 0.3 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isSank: !state.isSank,
      opacity: this.state.opacity === 0.3 ? 1 : 0.3 
    }))
  }
    render() {
      return (
        <div>
          <View className='row3'>  
            <View style={styles.CircleShapeViewLeft} className='lcup1' onClick={this.handleClick} />
            <View style={styles.CircleShapeViewLeft} className='lcup2' onClick={this.handleClick} />
            <View style={styles.CircleShapeViewLeft} />
          </View>
          <View className='row2'>
            <View style={styles.CircleShapeViewLeft} />
            <View style={styles.CircleShapeViewLeft} />
          </View>
          <View className='row1'>
            <View style={styles.CircleShapeViewLeft} />
          </View>
        </div>
      );
  }
}

export default App;
