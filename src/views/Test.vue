<template>
  <div id="app">
    <input type="text" v-model="text" @change="inputHandler" placeholder="text"/>
    <br/>
    <br/>
    {{ text }}
    <br/>
    <br/>
    <div style="border-style: solid">
      statusCode : {{ result.status }}
      <br/>
      message : {{result.message}}
    </div>
    <br/>
    <br/>
    <div style="border-style: solid">
      <li v-for="item in list" :key="item.name">
        이름 : {{ item.name }} // 시간 : {{item.dateTime}}
      </li>
    </div>
    <br/>
    <br/>
  </div>
</template>

<script>
  // eslint-disable-file no-use-before-define

  import {getText} from '../actions';
  import VueCytoscape from 'vue-cytoscape'

  export default {
    name: 'Test',
    data() {
      return {
        text: '',
        result: '',
        list: '',
        cy: null
      }
    },
    methods: {
      inputHandler: async function () {
        let result = await getText(this.text);
        if (result) {
          this.result = result.data;
          this.list = result.data.data;
        } else {
          alert('오류가 발생했습니다.\n관리자에게 문의하세요')
        }
      },
      renderView: function () {
        // the only reliable way to do this is to recreate the view
        // eslint-disable-next-line no-unused-vars
        let cy = cytoscape({
          container: this.$refs.cyto,
          elements: [
            // list of graph elements to start with
            {
              // node a
              data: {
                id: "a"
              }
            },
            {
              // node b
              data: {
                id: "b"
              }
            },
            {
              // edge ab
              data: {
                id: "ab",
                source: "a",
                target: "b"
              }
            }
          ],

          style: [
            // the stylesheet for the graph
            {
              selector: "node",
              style: {
                "background-color": "#666",
                label: "data(id)"
              }
            },

            {
              selector: "edge",
              style: {
                width: 3,
                "line-color": "#ccc",
                "target-arrow-color": "#ccc",
                "target-arrow-shape": "triangle"
              }
            }
          ],

          layout: {
            name: "grid",
            rows: 1
          }
        });
      },
      mounted: function () {
        this.$emit('created', this);
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

  #node {
    height: 80;
    width: 80;
    background-fit: cover;
    border-color: #000;
    border-width: 3;
    border-opacity: 0.5;
  }

  #edge {
    curve-style: 'bezier';
    target-arrow-shape: triangle;
    line-color: #ddd;
    target-arrow-color: #ddd;
  }

  #highlighted {
    background-color: #61bffc;
    line-color: #61bffc;
    target-arrow-color: #61bffc;
    transition-property: background-color, line-color, target-arrow-color;
    transition-duration: 0.5s;
  }

</style>
