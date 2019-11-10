import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Header from './components/header';
import TaskList from './components/task-list';

const taskList = [
  {
    id: 0,
    content: 'Pain',
    statut: 'En cours'
  },
  {
    id: 1,
    content: 'Lait',
    statut: 'En cours'
  },
  {
    id: 2,
    content: 'Chocolat',
    statut: 'En cours'
  }
];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskList };
  } 
  onPressButton = () => {
    this.setState({myText: 'Nouveau text'});
    
    
    console.log('Coucou');
    
  }
  render() {
    return (
      <View>
        <Header content='Liste de tâches' />
        <TaskList taskList={this.state.taskList} />
      
      </View>
    );
  }
}
