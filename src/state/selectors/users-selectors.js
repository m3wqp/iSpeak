import {createSelector} from "reselect";

const getUserSelector = (state) => {
  return state.users
}
export const getUser = createSelector(getUserSelector, (users) => {
  return users
})


export const getCountUser = (state) => {
  return state.users.countUser
}
export const getTotalCount = (state) => {
  return state.users.totalCount
}

export const getCurrentPage = (state) => {
  return state.users.currentPage
}

export const getIsFetching = (state) => {
  return state.users.isFetching
}
export const getFollowingInProgress = (state) => {
  return state.users.followingInProgress
}