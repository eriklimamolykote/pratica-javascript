<template>
  <b-container>
    <b-row align-v="center">
      <Card v-for="curso in cursos" :key="curso.id" :nome="curso.nome" />
      <Card />
      <Card />
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';

export default {
  name: 'Home',
  data() {
    return {
      cursos: []
    }
  },
  components: {
    Card,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await fetch( "cursos.json" );
      const val = await res.json();
      this.cursos = val;
      console.log( val );
    }
  }
}
</script>
