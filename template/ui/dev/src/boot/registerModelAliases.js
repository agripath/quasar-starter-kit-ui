export default ({ store, Vue }) => {
  const models = store.$db().models()

  Object.keys(store.$db().models())
    .forEach(modelString => {
      const model = models[modelString]
      Vue.prototype['$M' + model.name] = model
    })
}
