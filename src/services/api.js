import axiosClient from "../utils/axios";

export function getAttendanceReport(userId, startDate, endDate){
  return axiosClient.get(`attendance_report/${userId}/${startDate}/${endDate}`)
}

export function getAttendanceTargetAndResult(){
  return axiosClient.get('my_attendance_target_and_result')
}

export function getTask(){
  return axiosClient.get('project')
}

export function addTask(projectId, name, description){
  return axiosClient.post('task', {
    project_id: projectId,
    name:name,
    description: description,
  })
}

export function moveTask(taskId, status, oldIndex, newIndex){
  return axiosClient.put(`move_task/${taskId}`, {
    status: status,
    old_index: oldIndex,
    new_index: newIndex,
  })
}

export function deleteTask(taskId){
  return axiosClient.delete(`task/${taskId}`)
}

export function addProject(name, description){
    return axiosClient.post('project', {
      name: name,
      description: description,
    })
}

export function deleteProject(projectId){
  return axiosClient.delete(`project/${projectId}`)
}