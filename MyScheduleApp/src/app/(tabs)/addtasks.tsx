import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet } from 'react-native';
import AddButton from '../../components/AddSchedule';
import { useTaskManager } from '../../components/TaskManager';

const AddTasks = () => {
  const { addTask } = useTaskManager();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      <SafeAreaView style={styles.ScreenStyle}>
        <AddButton onAddTask={addTask} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  ScreenStyle: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default AddTasks;