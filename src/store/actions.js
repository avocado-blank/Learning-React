export const add = (amount) => {
  return {
    type: 'add',
    payload: amount,
  }
}

export const remove = (amount) => {
  return {
    type: 'remove',
    payload: amount,
  }
}

export const insert = (user) => {
  return {
    type: 'insert',
    payload: user,
  }
}
export const drop = (user) => {
  return {
    type: 'delete',
    payload: user,
  }
}

const actionCreater = {
  add,
  remove,
  insert,
  drop,
}

export default actionCreater
