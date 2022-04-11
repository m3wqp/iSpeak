export const updateObjectInArray = (item, itemId, userId, newObjProps) => {
  return item.map(user => {
    if (user[itemId] === userId) {
      return {...user, ...newObjProps}
    }
    return user;
  })
}
