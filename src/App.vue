<script >
export default {
  methods:{
    increment(){
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    },
    double(){
      this.$store.dispatch('double')
    }

  }
}
</script>

<template>
  <div>
    <button @click = 'increment'>+</button>
    <button @click = 'decrement'>-</button>
    <button @click = 'double'>*2</button>
    {{$store.state.count}}
  </div>
</template>

<style scoped>

</style>
