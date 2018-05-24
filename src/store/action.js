export default{
	setAddress({commit,state},address){
		commit('SET_LONGITUDE',address.longitude);
		commit('SET_LATITUDE',address.latitude);
	}
}