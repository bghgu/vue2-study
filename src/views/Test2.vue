<template>
  <div id="app">
    <h1>WebSocket Test</h1>
    <b-input type="text" v-model="text" @change="inputHandler" placeholder="txid"/>
    <br/>
    <br/>
    search : {{ text }}
    <br/>
    <br/>
  </div>
</template>

<script>
  export default {
    name: "Test2",
    data() {
      return {
        text: ''
      }
    },
    methods: {
      inputHandler: async function () {

      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>