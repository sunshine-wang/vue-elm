import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
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
})