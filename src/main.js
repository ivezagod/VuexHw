import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createStore, useStore} from 'vuex'

const store = createStore({
    state(){
        return{
            count:0,
            number:2
        }
    },
    mutations:{
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        double(state){
            state.count *= state.number
        }


    },
    actions:{
        double(context){
            context.commit('double')
        }
    }
})

createApp(App).use(store).mount('#app')
