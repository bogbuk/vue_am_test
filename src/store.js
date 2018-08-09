import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    dataJson: {},
    details: [],
    dimensions: [],
    enclosures: {},
    fields: {},
    metrics: {}
  },

  mutations: {
    [types.SET_DATA] (state, data) {
      state.dataJson = data
      state.details = data.details
      state.dimensions = data.dimensions
      state.enclosures = data.enclosures
      state.fields = data.fields
      state.metrics = data.metrics
    }
  },
  getters: {
    getData: (state, field) => {
      return state[field]
    },
    getEnclosures: state => {
      return state.enclosures
    },
    getMetrics: state => {
      return state.metrics
    },
    getDetails: state => {
      return state.details
    },
    getDataField: state => {
      return state.fields
    }
  },
  actions: {
    async getData ({commit}) {
      try {
        let res = await import(`../static/source/data.json`)
        commit(types.SET_DATA, res)
      } catch (e) {
        console.log(e)
      }
    }
  }
})
