import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shoppingList:[]
  },
  mutations: {
    addGood(state,obj) {
      obj.cont=1;
      obj.check=true;
      state.shoppingList.push(obj);
      console.log('添加商品');
    },
    addGoodsCount(state,obj) {
      state.shoppingList.find(item=>item.id===obj.id).cont++;
      console.log('已经存在');
    }
  },
  actions: {
    addShop(context,obj){
      return new Promise((resolve) => {
        let old=this.state.shoppingList.find(item=>item.id===obj.id);

        if(old) {
          context.commit('addGoodsCount',obj)

          resolve('该商品已在购物车')
        }else {
          context.commit('addGood',obj)

          resolve('添加商品成功')
        }
      });
    }
  },
  modules: {
  }
})
