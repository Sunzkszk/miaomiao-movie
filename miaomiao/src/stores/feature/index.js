const state = {
    key : window.localStorage.getItem('key'),
    value : window.localStorage.getItem('value'),
};

const actions = {

};

const mutations = {
    CITY_FEATURE(state , payload){
        state.key = payload.key;
        state.value = payload.value;
    }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}