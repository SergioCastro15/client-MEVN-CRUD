<template>
  <div>
    <h1>Editar Nota</h1>
    <Form
      :nombreActual="getNota.nombre"
      :descripcionActual="getNota.descripcion"
      @handleAction="editNota"
    />
  </div>
</template>

<script>
import Form from '../components/Form';
export default {
  components: {
    Form,
  },
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  beforeMount() {
    this.$store.dispatch('getNotas');
  },
  computed: {
    getNotas() {
      return this.$store.state.notas;
    },
    getNota() {
      return this.getNotas.find(nota => nota._id === this.id);
    }
  },
  methods: {
    editNota({ nombre, descripcion }) {
      this.$store.dispatch('editNota', {
        nombre,
        descripcion,
        _id: this.id
      });

      this.$router.push({
        path: `/notas`
      });
    }
  }
}
</script>