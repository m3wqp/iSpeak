import axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "c5d3c2ef-0330-4d1b-9aba-f35ea56e8c72"
  }

})

export const usersApi = {
  getUsers() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  },
  followPost(id) {
    return instance.post(`follow/${id}`)
      .then(response => {
        return response.data
      })
  },
  unfollowPost(id) {
    return instance.delete(`follow/${id}`)
      .then(response => {
        return response.data
      })
  },

  renderUser(currentPage,countUser ) {
    return instance.get(`users?page=${currentPage}&count=${countUser}`)
      .then(response => {
        return response.data
      })
  },
}
