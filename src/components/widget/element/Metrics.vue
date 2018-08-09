<template>
  <v-card height="100%">
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Metrics</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <vue-c3 :handler="handler"></vue-c3>
  </v-card>
</template>

<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'

  export default {
    name: 'Metrics',
    props: [
      'chartData'
    ],
    components: {
      VueC3
    },
    data () {
      return {
        handler: new Vue()
      }
    },
    methods: {},
    watch: {
      chartData (val) {
        console.log(val)
        let column = []

        for (let prop in this.chartData) {
          column.push([prop, this.chartData[prop]])
        }
        const options = {
          data: {
            type: 'donut',
            columns: column
          },
          donut: {
            title: 'Metric'
          }
        }

        this.handler.$emit('init', options)
      }
    },
    mounted () {
      let column = []
      for (let prop in this.chartData) {
        column.push([prop, this.chartData[prop]])
      }
      const options = {
        data: {
          type: 'donut',
          columns: column
        },
        donut: {
          title: 'Metric'
        }
      }
      this.handler.$emit('init', options)
    }
  }
</script>
