import React from "react";
import { Icon } from "react-native-elements";
import ActionButton from "react-native-action-button";

const ButtonAddTask = () => (
  <ActionButton
    buttonColor="#3E64B8"
    icon={<Icon color="#FFF" name="add" />}
    onPress={() => onPress()}
  />
);

function onPress() {
  console.log("add");
}

export default ButtonAddTask;
