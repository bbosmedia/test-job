import { createSlice } from '@reduxjs/toolkit'

export const siteSlice = createSlice({
	name: 'site',
	initialState: {
		faculties: localStorage.getItem('faculties') ? JSON.parse(localStorage.getItem('faculties')) : [],
		facultykeys: localStorage.getItem('facultykeys') ? JSON.parse(localStorage.getItem('facultykeys')) : [],
		accesstoken: localStorage.getItem('asgah_sjajsh_sa') ? JSON.parse(localStorage.getItem('asgah_sjajsh_sa')) : '',
		enterStatus: localStorage.getItem('gsdhgasdhagsd') ? JSON.parse(localStorage.getItem('gsdhgasdhagsd')) : 'notentered',
	},
	reducers: {
		updateFaculties(state, action) {
			state.faculties = action.payload
			state.facultykeys = Object.keys(state.faculties)
			localStorage.setItem('faculties', JSON.stringify(state.faculties))
			localStorage.setItem('facultykeys', JSON.stringify(state.facultykeys))
		},
		enterAccesToken(state, action){
			state.accesstoken = action.payload;
			state.enterStatus = 'entered'
			localStorage.setItem('asgah_sjajsh_sa', JSON.stringify(state.accesstoken))
			localStorage.setItem('gsdhgasdhagsd', JSON.stringify(state.enterStatus))
		},
		logout(state,action){
			state.accesstoken = '';
			state.enterStatus = 'notentered'
			localStorage.removeItem('asgah_sjajsh_sa')
			localStorage.removeItem('gsdhgasdhagsd')
		}
	},
})

// Action creators are generated for each case reducer function
export const { updateFaculties, enterAccesToken, logout  } = siteSlice.actions

export const selectFaculties = state => state.site.faculties;
export const selectFacultyKeys = state => state.site.facultykeys;
export const selectToken = state => state.site.accesstoken;
export const enterStatus = state => state.site.enterStatus;

export default siteSlice.reducer
