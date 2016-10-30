import {
  REQUEST_TAG_LIST,
	GET_TAG_LIST_SUCCESS,
	GET_TAG_LIST_FAILURE
} from '../types'

const state = {
  fetching: false,
  list: []
}

const mutations = {
  [REQUEST_TAG_LIST](state) {
    state.fetching = true
  },
  [GET_TAG_LIST_FAILURE](state) {
    state.fetching = false
    state.list = []
  },
  [GET_TAG_LIST_SUCCESS](state, action) {
    state.fetching = false
    state.list = action.list
  }
}

export default {
  state,
  mutations
}
