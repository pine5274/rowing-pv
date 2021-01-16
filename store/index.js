// import Vuex from 'vuex'
// import pathify from 'vuex-pathify'
// import * as modules from './modules'

// Vue.use(Vuex)

let image = 247
const categories = [
    'All',
    'Interior',
    'Buildings',
    'Fashion',
    'Nature',
    'Lifestyle',
]

const links = [
    'Home',
    'About me',
    'Portfolio',
    'Blog',
    'Contact',
]

export const state = () => ({
    drawer: false,
    links,
    photographs: {
        categories,
        filter: 'All',
        picture: null,
        pictures: Array.from({ length: 30 }).map(() => {
            image++

            return {
                src: `https://picsum.photos/id/${image}/600/350`,
                category: categories[Math.floor(Math.random() * categories.length)],
            }
        }),
    },
})

export const mutations =  {
    SET_DRAWER (state, payload) {
        state.drawer = payload
    },
}

// export default new Vuex.Store({

//   plugins: [pathify.plugin],
// })
