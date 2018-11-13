// Enables '@/store/index.js' to import all vuex modules in a one-shot manner.
const files = require.context('.', true, /\/$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './') return
  modules[key.replace(/(\.\/|\/)/g, '')] = files(key).default
})

export default modules