export const setStorage = (name, value) => {
  let data = JSON.stringify(value)
  localStorage.setItem(name, data)
}

export const getStorage = name => {
  let data = JSON.parse(localStorage.getItem(name))
  return data
}

export const checkStorage = name => {
  if (localStorage.getItem(name) === null) {
    return false
  } else {
    return true
  }
}
