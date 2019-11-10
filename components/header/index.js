import React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';

const Header = (props) => (
     <View>
          <View style={style.subHeader}></View>
          <View style={style.header}>
          <Text style={style.text}>{props.content}</Text>
          </View>
     </View>
);

export default Header;