<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Your name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="nombre"
          type="text"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="descripcion"
          required
          placeholder="Enter description"
        ></b-form-input>
      </b-form-group>
    </b-form>

    <b-button @click="HandleForm()" type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nombre: this.nombreActual,
        descripcion: this.descripcionActual,
      };
    },
    props: {
      nombreActual : {
        type: String,
        default: ''
      },
      descripcionActual : {
        type: String,
        default: ''
      }
    },
    watch: {
      nombreActual(value) {
        this.nombre = value;
      },
      descripcionActual(value) {
        this.descripcion = value;
      }
    },
    methods: {
      HandleForm() {
        const { nombre, descripcion } = this;
        this.$emit('handleAction', {
          nombre,
          descripcion
        });
      }
    }
  }
</script>