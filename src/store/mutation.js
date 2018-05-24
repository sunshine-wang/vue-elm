const SET_LONGITUDE = 'SET_LONGITUDE';
const SET_LATITUDE = 'SET_LATITUDE';

export default{
	[SET_LONGITUDE](state,longitude){
		state.longitude = longitude;
	},
	[SET_LATITUDE](state,latitude){
		state.latitude = latitude;
	}
}