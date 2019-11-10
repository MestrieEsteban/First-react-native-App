import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import Header from "./components/header";
import TaskList from "./components/task-list";
import ButtonAddTask from "./components/button-add-task";

const taskList = [
  {
    id: 0,
    content: "Pain",
    statut: "En cours"
  },
  {
    id: 1,
    content: "Lait",
    statut: "En cours"
  },
  {
    id: 2,
    content: "Oui",
    statut: "Terminé"
  },
  {
    id: 3,
    content: "Non",
    statut: "En cours"
  },
  {
    id: 4,
    content: "ok",
    statut: "Terminé"
  },
  {
    id: 5,
    content: "salut",
    statut: "En cours"
  },
  {
    id: 6,
    content: "test",
    statut: "En cours"
  },
  {
    id: 7,
    content: "Chat",
    statut: "En cours"
  },
  {
    id: 8,
    content: "chient",
    statut: "Terminé"
  }
];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskList };
  }
  
  displayMenuTask = taskContent => {
    console.log('onPress', taskContent);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header content="Liste de tâches" />
        <ScrollView>
          <TaskList 
          onPressCallBack={this.displayMenuTask }
          taskList={this.state.taskList} />
        </ScrollView>
        <ButtonAddTask />
      </View>
    );
  }
}
