import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex);

const state = {
	latitude:'',
	longitude:''
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})

/*export default new Vuex.Store({
	state:{
		latitude:'',
		longitude:''
	},
	mutations:{
		latitude(state,arg){
			state.latitude = arg;
		},
		longitude(state,arg){
			state.longitude = arg;
		},
		id(state,id){
			state.id = id;
		}
	}
})*/