<template>
  <div>
    <Form @handleAction="addNewNota"/>
  </div>
</template>

<script>
import Form from '../components/Form';

export default {
  components: {
    Form,
  },
  methods: {
    addNewNota({ nombre , descripcion }) {
      this.$store.dispatch('postNotas', {
        nombre,
        descripcion
      });

      this.$router.push({
        path: `/notas`
      });
    }
  }
}
</script>