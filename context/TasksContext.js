import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext();

const DUMMY_TASKS = [
  {
    id: 1,
    title: "Task 1",
    due: new Date().toString(),
    status: "Pending",
  },
  {
    id: 2,
    title: "Task 2",
    due: new Date().toString(),
    status: "Finished",
  },
  {
    id: 3,
    title: "Task 3",
    due: new Date().toString(),
    status: "Pending",
  },
];

const INITIAL_STATE = {
  tasks: [...DUMMY_TASKS],
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    case "tasks/loaded":
      return {
        ...state,
        isLoading: false,
        tasks: action.payload,
      };

    case "tasks/created":
      return {
        ...state,
        isLoading: false,
        tasks: [...state.tasks, action.payload],
      };

    case "tasks/updated":
      const newTasks = [...state.tasks];
      const currentTaskIndex = newTasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (!currentTaskIndex) throw new Error("Task not found!");

      newTasks[currentTaskIndex] = action.payload;
      return {
        ...state,
        tasks: newTasks,
      };

    case "tasks/deleted":
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

const TasksProvider = ({ children }) => {
  const [{ tasks, isLoading, error }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE
  );

  const updateTask = (updatedTask) => {
    return dispatch({ type: "tasks/updated", payload: updatedTask });
  };

  const deleteTask = (taskId) => {
    return dispatch({ type: "tasks/deleted", payload: taskId });
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        isLoading,
        error,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

const useTasks = () => {
  const context = useContext(TasksContext);

  if (context === undefined) {
    throw new Error("Context was used outside of the provider");
  }

  return context;
};

export { TasksProvider, useTasks };
