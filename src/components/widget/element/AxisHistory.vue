<template>
  <v-card height="100%">
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Referrers Host</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <vue-c3 :handler="handler"></vue-c3>
  </v-card>
</template>

<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'

  import moment from 'moment'

  export default {
    name: 'AxisHistory',
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
    methods: {
      fillChart (val = null) {
        if (val === null && this.chartData === undefined) {
          return
        }
        if (val === !null) {
          this.chartData = val
        }

        let label = []
        let column = []

        let intex = 0
        for (let prop in this.chartData) {
          let key = moment(String(this.chartData[prop].key)).format('YYYY-MM-DD hh:mm')

          label.push(key)
          intex++

          for (let host in this.chartData[prop].fields['referrer.host']) {
            if (column[this.chartData[prop].fields['referrer.host'][host].key] === undefined) {
              column[this.chartData[prop].fields['referrer.host'][host].key] = [this.chartData[prop].fields['referrer.host'][host].key]
              for (let i = 0; i < this.chartData.length; i++) {
                column[this.chartData[prop].fields['referrer.host'][host].key].push(null)
              }
            }
            column[this.chartData[prop].fields['referrer.host'][host].key][intex] = (this.chartData[prop].fields['referrer.host'][host].value)
          }
        }

        let columnData = []
        for (let el in column) {
          columnData.push(column[el])
        }

        console.log(this.$route.params)
        const options = {
          data: {
            x: 'x',
            xFormat: '%Y-%m-%d %H:%M',
            columns: [
              ['x', ...label],
              ...columnData
            ]
          },
          color: {
            pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
          },
          axis: {
            x: {
              type: 'timeseries',
              // if true, treat x value as localtime (Default)
              // if false, convert to UTC internally
              localtime: false,
              tick: {
                format: '%Y-%m-%d'
              }
            }
          }
        }
        this.handler.$emit('init', options)
      }
    },
    watch: {
      chartData (val) {
        this.fillChart(val)
      }
    },
    mounted () {
      this.fillChart()
    }
  }
</script>

<style scoped>
  .c3 >>> path {
    fill: none !important;
  }
</style>
