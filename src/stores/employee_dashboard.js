import { defineStore } from "pinia";
import { getAttendanceReport, getAttendanceTargetAndResult } from "../services/api";
import { getUser } from "../utils/utils";

const user = getUser();

export const useEmployeeDashboardStore = defineStore('employee_dashboard', {
  state: () => {
    return {
      attendanceTargetResult: null
    }
  },
  actions: {
    loadAttendanceTargetAndResult() {
      new Promise((resolve, reject) => {
        getAttendanceTargetAndResult()
          .then((response) => {
            resolve(response)
            this.attendanceTargetResult = response
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    isNegative(value){
      return value.toString().includes("-")
    }
  },
  getters: {
    originalTarget() {
      return this.attendanceTargetResult.original_target
    },
    originalTargetDuration() {
      return this.attendanceTargetResult.original_target_duration
    },
    calculatedTarget() {
      return this.attendanceTargetResult.calculated_target
    },
    calculatedTargetDuration() {
      return this.attendanceTargetResult.calculated_target_duration
    },
    total(){
      return this.attendanceTargetResult.total
    },
    totalDuration(){
      return this.attendanceTargetResult.total_duration
    },
   
  }
})