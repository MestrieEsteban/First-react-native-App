import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Button } from "react-native-elements";
import Modal from "react-native-modal";
import { style } from "./style";

const MenuTaskt = ({ isVisible, onDisapearCallBack, onDeleteCallBack, onChangeStatusCallBack }) => (
  <TouchableWithoutFeedback onPress={() => onDisapearCallBack()}>
    <Modal
      isVisible={isVisible}
      animationIn={"zoomInDown"}
      animationOut={"zoomOutUp"}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={1000}
    >
      <TouchableWithoutFeedback>
        <View style={style.modal}>
          <View style={style.textView}>
            <Text>Que souhaitez vous faire sur la tâche ?</Text>
          </View>
          <View style={style.buttonView}>
            <Button
              title="Supprimer"
              onPress={() => onDeleteCallBack()}
              buttonStyle={style.buttonDelete}
            />
            <Button
              title="Changer status"
              onPress={() => onDisapearCallBack()}
              buttonStyle={style.buttonChangeStatus}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  </TouchableWithoutFeedback>
);

export default MenuTaskt;
