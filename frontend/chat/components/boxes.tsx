import React from 'react';
import { View, StyleSheet } from 'react-native';

const Boxes = () => {
  return (
    <View style={styles.container}>
      {/* Column A */}
      <View style={styles.leftColumn} />

      {/* Right side: B (top row) and C/D/E (bottom row) */}
      <View style={styles.rightColumn}>
        {/* Row B */}
        <View style={styles.topRow} />

        {/* Row C: columns C, D, E */}
        <View style={styles.bottomRow}>
          <View style={[styles.box, { backgroundColor: 'black' , borderColor: 'white' , borderWidth: 1, flex: 1}]} />
          <View style={[styles.box, { backgroundColor: 'black' , borderColor: 'white' , borderWidth: 1, flex: 8}]} />
          <View style={[styles.box, { backgroundColor: 'black' , borderColor: 'white' , borderWidth: 1, flex: 2}]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // L->R layout: leftColumn + rightColumn

  },
  leftColumn: {
    width: 80,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1
  },
  rightColumn: {
    flex: 1,
    flexDirection: 'column', // stack B and (C,D,E) vertically
  },
  topRow: {
    height: 80,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1
  },
  bottomRow: {
    flex: 1,
    flexDirection: 'row',

  },
  box: {
    flex: 1,
    margin: 4,
  },
});

export default Boxes;
