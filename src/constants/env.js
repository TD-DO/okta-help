let ENV = {
}

// Shortcut dev check
ENV._IS_DEV = process.env.NODE_ENV === 'development'

for (let [key, value] of Object.entries(process.env)) {
  const newKey = key.replace(/^REACT_APP/, '')
  let newValue

  // Convert "true"/"false" to actual booleans
  if (
    value
    && typeof value === 'string'
    && (/^(true|false)$/i).test(value)
  ) {
    newValue = value.toLowerCase() === 'true'
  } else {
    newValue = value
  }

  ENV[newKey] = newValue
}

export default ENV
