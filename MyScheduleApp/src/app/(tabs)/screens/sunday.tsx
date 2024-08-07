import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Task, useTaskManager } from '../../../components/TaskManager';
import TaskListItem from '../../../components/TaskListItem';

const SundayScreen = () => {
  const { tasks, deleteTask } = useTaskManager();
  const sundayTasks = tasks.filter(task => task.dateday === '일요일');
  const groupedTasks = groupTasksByDate(sundayTasks);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sunday Schedule</Text>
      <FlatList
        data={Object.keys(groupedTasks)}
        keyExtractor={(date) => date}
        renderItem={({ item: date }) => (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{formatDate(date)}</Text>
            <FlatList
              data={groupedTasks[date]}
              keyExtractor={(task) => task.id}
              renderItem={({ item }) => (
                <TaskListItem task={item} onDelete={() => deleteTask(item.id)} />
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

const groupTasksByDate = (tasks: Task[]): { [key: string]: Task[] } => {
    return tasks.reduce((groups: { [key: string]: Task[] }, task: Task) => {
      const date = task.datetime.split(' ')[0]; // 날짜 부분만 추출
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(task);
      return groups;
    }, {});
  };

  const formatDate = (date: string): string => {
    const [month, day] = date.split('-');
    return `${month} / ${day}`;
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default SundayScreen;