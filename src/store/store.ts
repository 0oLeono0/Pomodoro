import { Reducer } from "redux";
import { UPDATE_TASK, ADD_TASK, updateTaskAction, AddTaskAction } from "./task/actions";
import { TaskState, taskReducer } from "./task/reduser";

export type RootState = {
    task: TaskState
}

const initialState: RootState = {
    task: {
        tasks: [],
        taskText: '',
    },
}

type MyAction = updateTaskAction
    | AddTaskAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TASK:
        case ADD_TASK:
            return {
                ...state,
                task: taskReducer(state.task, action),
            }
        default:
            return state
    }
}