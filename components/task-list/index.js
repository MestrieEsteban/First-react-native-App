import React from 'react';
import { ListItem, Badge } from 'react-native-elements';
import { View, Text, LinearGradient } from 'react-native';
import TouchableScale from 'react-native-touchable-scale'; 


const TaskList = ({ taskList }) => (

    <View>
        {taskList.map(task => (
        <ListItem
        Component={TouchableScale}
        friction={90} //
        tension={100} // These props are passed to the parent component (here TouchableScale)
        activeScale={0.95} //
        linearGradientProps={{
          colors: ['#926AA4', '#493452'],
          start: [1, 0],
          end: [0.2, 0],
        }}
        ViewComponent={LinearGradient}
        key={task.id}
        title={task.content}
        titleStyle={{ color: 'white', fontWeight: 'bold' }}
        subtitleStyle={{ color: 'white' }}
        subtitle={task.statut}
        chevron={{ color: 'white' }}
        bottomDivider
        topDivider
      />
        ))}
    </View>
);

export default TaskList;