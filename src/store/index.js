  
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataList:{},
    title:null,
    graphType:null,
  },
  mutations: {
   		 storeDatas(state,datas){state.dataList=datas;},
   		 storeTitle(state,title){state.title=title;},
   		 storeGraphType(state,graphType){state.graphType=graphType;},
	}
})