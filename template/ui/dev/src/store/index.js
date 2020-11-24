import Vue from 'vue'
import Vuex from 'vuex'
import { SchemaPlugin } from '@agripath/orm-classes'
import VuexORM from '@vuex-orm/core'
import VuexOrmRest from '@agripath/vuex-orm-rest'
import database from './database'

Vue.use(Vuex)

VuexORM.use(SchemaPlugin, { database })
VuexORM.use(VuexOrmRest, { api_url: process.env.API_URL })

const VuexOrmPlugin = VuexORM.install(database)

export default function () {
  const Store = new Vuex.Store({
    plugins: [VuexOrmPlugin],

    strict: process.env.DEV
  })

  return Store
}
