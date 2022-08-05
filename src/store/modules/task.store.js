import { fireBaseService } from "../../services/firebase";
const colName = 'task'

export const taskStore = {
    state: {
        tasks: null,
    },
    getters: {
        getTasks(state) {
            return state.tasks
        },
        getTask(state, id) {
            const idx = state.tasks.findIndex((task) => task._id === id)
            return JSON.parse(JSON.stringify(state.tasks[idx]))
        }
    },
    mutations: {
        setTasks(state, { tasks }) {
            state.tasks = tasks
        },
        removeTask(state, { id }) {
            const idx = state.tasks.findIndex((task) => task._id === id)
            state.tasks.splice(idx, 1)
        },
        saveTask(state,{task}){
            const idx = state.tasks.findIndex((t) => t._id === task.id)
            if(idx !== -1){
                state.tasks.splice(idx,1,task)
            } else {
                state.tasks.push(task)
            }
        }
    },
    actions: {
        async loadTasks({ commit }) {
            try {
                const tasks = await fireBaseService.query(colName)
                commit('setTasks', { tasks })
            } catch (error) {
                console.log('loadTasks error', error)
            }
        },
        async removeTask({ commit }, { id }) {
            try {
                await fireBaseService.removeEntity(colName, id)
                commit('removeTask', { id })
            } catch (error) {
                console.log('removeTask error', error)
            }
        },
        async saveTask({ commit }, { task }) {
            try {
                await fireBaseService.saveEntity(colName, task)
                commit('saveTask', { task })
            } catch (error) {
                console.log('saveTask error', error)
            }
        }
    },
}