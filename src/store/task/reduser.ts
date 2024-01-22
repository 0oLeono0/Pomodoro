import { Reducer } from "react";
import { ADD_TASK, AddTaskAction, UPDATE_TASK, updateTaskAction } from "./actions";

export type TaskState = {
    taskText: string,
    tasks: Array<string>,
}

type TaskActions = updateTaskAction
    | AddTaskAction;
export const taskReducer: Reducer<TaskState, TaskActions> = (state, action) => {
    switch (action.type) {
        case UPDATE_TASK:
            return {
                ...state,
                taskText: action.text,
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: action.tasks,
            }
        default:
            return state;
    }
}