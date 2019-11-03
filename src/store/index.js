import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notas: [],
    nota: {}
  },
  mutations: {
    setNotas(state, notas) {
      state.notas = notas;
    },
    setNota(state, nota) {
      state.nota = nota;
    },
    addNota(state, nota) {
      state.notas = [...state.notas, nota];
    },
    removeNota(state, _id) {
      state.notas = state.notas.filter(nota => nota._id !== _id);
    },
    updateNota(state, notaUpdate) {
      const index = state.notas.findIndex(element => element._id === notaUpdate._id);
      state.notas.splice(index, 1, notaUpdate);
    }
  },
  actions: {
    async getNotas( {commit}, _ ) {
      const response = await axios.get('/nota');
      const notas = response.data;
      commit('setNotas', notas);
    },

    async getNota({commit}, _id) {
      const response = await axios.get(`/nota/${_id}`);
      commit('setNota', response.data);
    },

    async postNotas({commit}, payload) {
      const { nombre, descripcion } = payload;
      const response = await axios.post('nueva-nota', {
        nombre,
        descripcion
      });
      const nota = response.data;
      commit('addNota', nota);
    },

    async deleteNotas({commit}, _id) {
      await axios.delete(`/nota/${_id}`);
      commit('removeNota', _id);
    },

    async editNota({ commit }, payload) {
      const { nombre, descripcion, _id } = payload;
      const response = await axios.put(`/nota/${_id}`, {
        nombre,
        descripcion
      });
      const updateNota = response.data;
      commit('updateNota', updateNota);
    }
  }
});
