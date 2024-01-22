import { ActionCreator } from "redux";

export const UPDATE_TASK = 'UPDATE_TASK';
export type updateTaskAction = {
    type: typeof UPDATE_TASK;
    text: string;
}

export const updateTask: ActionCreator<updateTaskAction> = (text) => ({
    type: UPDATE_TASK,
    text,
});

export const ADD_TASK = 'ADD_TASK';
export type AddTaskAction = {
    type: typeof ADD_TASK;
    tasks: Array<string>;
}

export const addTask: ActionCreator<AddTaskAction> = (tasks) => ({
    type: ADD_TASK,
    tasks,
});