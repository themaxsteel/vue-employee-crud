import { toast } from "vue3-toastify";

export function loginToast(promise) {
  return toast.promise(promise, {
    pending: {
      render() {
        return "Please wait..."
      }
    },
    success: {
      render(res) {
        return `Welcome back ${res.data.user.name}!`
      }
    },
    error: {
      render(error) {
        return `Error: ${error.data.response.data.message}`
      }
    },
    
  })
}

export function customToast(promise, successMessage, errorMessage) {
  return toast.promise(promise, {
    pending: {
      render() {
        return "Please wait..."
      }
    },
    success: {
      render(res) {
        return successMessage || res.data.message
      }
    },
    error: {
      render(error) {
        return `Error: ${errorMessage || error.data.response.data.message}`
      }
    },
    
  }, {
  })
}

export function errorToast(text){
  return toast.error(text)
}