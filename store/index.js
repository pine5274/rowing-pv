// import Vuex from 'vuex'
// import pathify from 'vuex-pathify'
// import * as modules from './modules'

// Vue.use(Vuex)

export const state = () => ({
    drawer: false,
    links: [
      'Home',
      'About me',
      'Portfolio',
      'Blog',
      'Contact',
    ],
})

export const mutations =  {
    SET_DRAWER (state, payload) {
        state.drawer = payload
    },
}

// export default new Vuex.Store({

//   plugins: [pathify.plugin],
// })
