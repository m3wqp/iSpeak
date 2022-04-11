import axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "c5d3c2ef-0330-4d1b-9aba-f35ea56e8c72"
  }

})

export const usersApi = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false,captcha=null) {
    return instance.post(`auth/login` , {email, password, rememberMe,captcha});
  },
  logout() {
    return instance.delete(`auth/login`);
  },

  followPost(id) {
    return instance.post(`follow/${id}`)

  },
  unfollowPost(id) {
    return instance.delete(`follow/${id}`)

  },
  renderUser(currentPage, countUser) {
    return instance.get(`users?page=${currentPage}&count=${countUser}`)
      .then(response => {
        return response.data
      })
  },
  postProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  getCaptchaUrl(){
    return instance.get('security/get-captcha-url/')
  }

}


export const statusAPI = {
  getStatus(userId) {
    return instance.get('profile/status/' + userId)
  },
  updateStatus(status) {
    return instance.put('profile/status/', {status})
  },
  savePhoto(photoFile) {
    let formData = new FormData();
    formData.append('image',photoFile)
    return instance.put('profile/photo/', formData,{
      headers: {
        'Content-Type':'multipart/form-data'
      }
    })
  },
  saveProfile(formData){
    return instance.put('profile', formData)
  },
}

export const loginApi = {}