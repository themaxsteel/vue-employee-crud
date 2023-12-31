import Cookies from "js-cookie";
import { useDateFormat } from '@vueuse/core'
import { SITE_URL } from "../config";

const secure_cookies = { secure: true }

export function setAccessToken(token) {
  Cookies.set('access_token', token, secure_cookies)
}

export function getAccessToken() {
  return Cookies.get('access_token')
}

export function deleteAccessToken() {
  Cookies.set('access_token', '', secure_cookies)
}

export function isAccessTokenAvailable() {
  return !isNullOrEmpty(Cookies.get('access_token'))
}

export function setUser(object_user) {
  Cookies.set('User', JSON.stringify(object_user), secure_cookies);
}

export function getUser() {
  let cookies_data = Cookies.get('User')
  return (!isNull(cookies_data) ? JSON.parse(cookies_data) : {})
}

export function deleteUser() {
  Cookies.set('User', {}, secure_cookies);
}

export function isNullOrEmpty(target_object) {
  return (target_object == null || target_object == undefined || target_object == '' || target_object == {}) ? true : false
}

export function isNull(target_object) {
  return (target_object == null || target_object == undefined) ? true : false
}

export function isArrayEmpty(obj) {
  if(obj.length == 0){
    return true;
  }
  return false;
}

export function isEmpty(obj) {
  if(obj == undefined){
    return true
  }
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop))
      return false;
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

export function dateFormat(date){
  const formattedDate = useDateFormat(date, "DD MMM YYYY")
  return formattedDate.value
}