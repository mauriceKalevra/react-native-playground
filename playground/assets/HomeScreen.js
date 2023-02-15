import React from 'react';
import { View, Button } from 'react-native';

const buttons = [
  {title: 'Favoriten'},
  {title: 'Characters'},
  {title: 'Erzähler'},
  {title: 'Zivilisten'},
  {title: 'Sonstiges'},
];

const Buttons = () => {
  return (
    <View style={{flexDirection: 'column'}}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          title={button.title}
          style={{ marginLeft: 10 }}
        />
      ))}
    </View>
  );
};

export default Buttons;

