import VuexORM from '@vuex-orm/core'

// Initialize the database
const database = new VuexORM.Database()
const modelFileContext = require.context('src/store/models', false, /\.js$/)
modelFileContext.keys().forEach(modelPath => {
  const model = modelFileContext(modelPath)
  database.register(model.default)
})

export default database
