import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export const state = () => ({
  posts: [],
})

export const mutations = {
  _setPosts(state, value) {
    state.posts = value
  },
}

export const actions = {
  getPosts({ commit }) {
    client
      .getEntries({
        content_type: 'blog',
        order: '-sys.createdAt',
      })
      .then((data) => {
        commit('_setPosts', data)
        console.log(data)
      })
  },
  getPost({ commit }, { id }) {
    return client.getEntry(id)
  },
}
