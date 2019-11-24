<template>
  <div id="app">
    <h1>REST API Test</h1>
    <b-input type="text" v-model="text" @change="inputHandler" placeholder="txid"/>
    <br/>
    <br/>
    search : {{ text }}
    <br/>
    <br/>
    <div style="border-style: solid">
      statusCode : {{ result.status }}
      <br/>
      message : {{result.message}}
    </div>
    <br/>
    <br/>
    <b-table striped hover :items="list"></b-table>
    <br/>
    <br/>
  </div>
</template>

<script>
  import {getText} from '../actions';
  // eslint-disable-next-line no-unused-vars
  import cytoscape from 'vue-cytoscape'

  export default {
    name: 'Test',
    data() {
      return {
        text: '',
        result: '',
        list: [
          {
            name: "1",
            dataTime: ""
          },{
            name: "2",
            dataTime: ""
          },{
            name: "3",
            dataTime: ""
          },{
            name: "4",
            dataTime: ""
          },{
            name: "5",
            dataTime: ""
          }
        ],
        cy: null
      }
    },
    methods: {
      inputHandler: async function () {
        let result = await getText(this.text);
        if (result) {
          this.result = result.data;
          let i = 0;
          for (; i < result.data.data.length; i++) {
            this.list[i].dataTime = result.data.data[i].dateTime;
          }
          for (; i < 5; i++) {
            this.list[i].dataTime = "아직 도착 안함";
          }

          //this.list = result.data.data;
        } else {
          alert('오류가 발생했습니다.\n관리자에게 문의하세요')
        }
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
