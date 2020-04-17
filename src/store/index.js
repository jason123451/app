import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    count:12,
    name:'kris',
    job:'前端工程师',
    money:10000,
    
}

const getters = {
    count : (state) => {
        state.count
    },
    name : (state) => {
        state.name
    },
    job : (state) => {
        state.job
    }


}

const mutations = {
   add(state) {
       state.count++
   },
    reduce(state) {
        state.count--
    }

}

const actions = {
 add(context){
     context.commit('add')
 }
 ,
 reduce(context){
     context.commit('reduce')
 }
}


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;