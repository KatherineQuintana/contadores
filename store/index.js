export const state = () => ({
  counter: 0
})

export const getters = {
  getCounter (state) {
    return state.counter
  }
}

export const actions = {
  add ({ commit }) {
    commit('increase')
  },

  less ({ commit }) {
    commit('subtract')
  }
}

export const mutations = {
  increase (state) {
    state.counter++
  },
  subtract (state) {
    state.counter--
  }
}
