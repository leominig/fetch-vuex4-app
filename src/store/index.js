import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    characterFilter: []
  },
  getters: {
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
    characterFilter(state, payload) {
      state.characterFilter = payload
    },
  },
  actions: {
    async getCharacters({commit}) {
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json()  
        commit('setCharacters', data.results)
        console.log(data.name)
      } catch (error) {
        console.log(error)
      }
    }
  },

 

  modules: {
  }
})
