import React from "react";
import { ListItem, Badge } from "react-native-elements";
import { View, Text, LinearGradient } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import { TASK } from "../../model";

const TaskList = ({ onPressCallBack, taskList }) => (
  <View>
    {taskList.map(task => (
      <ListItem
        onPress={() => onPressCallBack(task)}
        Component={TouchableScale}
        activeScale={0.97} //
        linearGradientProps={{
          colors: ["#926AA4", "#493452"],
          start: [1, 0],
          end: [0.2, 0]
        }}
        ViewComponent={LinearGradient}
        key={task.id}
        title={task.content}
        titleStyle={{ color: "white", fontWeight: "bold" }}
        subtitle={task.statut}
        subtitleStyle={
          task.statut === TASK.todoStatus
            ? { color: "#69B83E" }
            : { color: "#B8513E" }
        }
        chevron={{ color: "white" }}
        bottomDivider
        topDivider
      />
    ))}
  </View>
);

export default TaskList;
