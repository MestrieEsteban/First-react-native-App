import React from "react";
import lodash from "lodash";
import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import Header from "./components/header";
import TaskList from "./components/task-list";
import ButtonAddTask from "./components/button-add-task";
import MenuTaskt from "./components/menu-task";

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
    this.state = { taskList, isMenuTaskVisible: false, currentTask: {} };
  }

  displayMenuTask = taskContent => {
    console.log("onPress", taskContent);
  };

  toggleMenuTaskVisibility = task => {
    const currentTask = task;
    if (this.state.isMenuTaskVisible) {
      currentTask = {};
    }
    this.setState({
      isMenuTaskVisible: !this.state.isMenuTaskVisible,
      currentTask
    });
  };
  deleteCurrentTask = () => {    
    const index = lodash.findIndex(this.state.taskList, {
      id: this.state.curentTask.id
    });
    console.log(index);
    
    const list = this.state.taskList;
    list.splice(index, 1);
    this.setState({ taskList: list, currentTask: {} });
    this.toggleMenuTaskVisibility();
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header content="Liste de tâches" />
        <ScrollView>
          <TaskList
            onPressCallBack={this.toggleMenuTaskVisibility}
            taskList={this.state.taskList}
          />
        </ScrollView>
        <MenuTaskt
          isVisible={this.state.isMenuTaskVisible}
          onDisapearCallBack={this.toggleMenuTaskVisibility}
          onDeleteCallBack={this.deleteCurrentTask}
        />
        <ButtonAddTask />
      </View>
    );
  }
}
