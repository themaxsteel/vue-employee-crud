import axiosClient from "../utils/axios";

export function getAttendanceReport(userId, startDate, endDate){
  return axiosClient.get(`attendance_report/${userId}/${startDate}/${endDate}`)
}

export function getAttendanceTargetAndResult(){
  return axiosClient.get('my_attendance_target_and_result')
}

