<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Descripción</th>
        <th scope="col">Fecha</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in getNotas" :key="index">
        <th scope="row">{{item._id}}</th>
        <td>{{item.nombre}}</td>
        <td>{{item.descripcion}}</td>
        <td>{{item.date}}</td>
        <td>
          <b-button class="btn-warning btn-sm mx-2" @click="activarEdicion(item._id)">Actualizar</b-button>
          <b-button class="btn-danger btn-sm mx-2" @click="eliminarNota(item._id)">Eliminar</b-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch('getNotas');
  },

  computed: {
    getNotas() {
      return this.$store.state.notas;
    }
  },

  methods: {
    activarEdicion(id) {
      this.$router.push({
        path: `/nota/${id}`
      });
    },
    eliminarNota(id) {
      this.$store.dispatch('deleteNotas', id);
    }
  }
}
</script>