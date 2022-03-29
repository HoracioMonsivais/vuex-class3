import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
    subirContador(state) {
      state.counter++;
    },
    bajarContador(state) {
      state.counter--;
    }
  },
  actions: {
    async subirContador() {
      const res = await fetch('https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
    }
  },
  modules: {
  }
})
