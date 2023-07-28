import { defineStore } from "pinia";
import { getTask, moveTask } from "../services/api";
import { customToast } from "../utils/toast";
import { isEmpty } from "../utils/utils";

export const useTaskManagementStore = defineStore("task_management", {
  state: () => {
    return {
      task: [],
    }
  },
  actions: {
    loadTask() {
      new Promise((resolve, reject) => {
        getTask().then((response) => {
          this.task = response
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      })
    },

    moveTask(evt, status) {
      var data
      if (!isEmpty(evt.added)){
        data = evt.added
      }else if(!isEmpty(evt.moved)){
        data = evt.moved
      }else{
        return
      }
   
      console.log(data.element.id)
      const taskId = data.element.id
      const promise = new Promise((resolve, reject) => {
        moveTask(taskId, status, data.oldIndex, data.newIndex).then((response) => {
          resolve(response)
        }).catch((error) => {
          reject(error)
          loadTask()
        })
      })
      //Toast
      customToast(promise)
    }


  }
})