export const setStorage = (name, value) => {
  let data = JSON.stringify(value)
  sessionStorage.setItem(name, data)
}

export const getStorage = name => {
  let data = JSON.parse(sessionStorage.getItem(name))
  return data
}

export const checkStorage = name => {
  if (sessionStorage.getItem(name) === null) {
    return false
  } else {
    return true
  }
}
