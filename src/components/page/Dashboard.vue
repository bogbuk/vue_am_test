<template>
  <v-container fluid grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <search-box/>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm4>
        <metrics :chartData="getMetricsData"/>
      </v-flex>
      <v-flex xs12 sm4>
        <referrer-host
          :referrerHost="getReferrerHost"
        />
      </v-flex>
      <v-flex xs12 sm4>
        <enclosures-new
          :enclosures="getEnclosuresData"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Enclosures from '../widget/Enclosures'

  import ReferrerHost from '../widget/ReferrerHost'
  import Metrics from '../widget/element/Metrics'
  import EnclosuresNew from '../widget/EnclosuresNew'
  import AxisHistory from '../widget/element/AxisHistory'
  import SearchBox from '../widget/SearchBox'

  export default {
    name: 'Dashboard',
    data () {
      return {
        enc: 0,
        dataJson: {},
        chartOptions: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    computed: {
      // Mix your getter(s) into computed with the object spread operator
      ...mapGetters([
        'getData',
        'getDataField',
        'getEnclosures',
        'getMetrics'
      ]),
      // Create another computed property to call your mapped getter while passing the argument
      getMetricsData () {
        return this.getMetrics
      },
      getEnclosuresData () {
        return this.getEnclosures
      },
      getReferrerHost () {
        return this.getDataField['referrer.host']
      },
      getDetailsData () {
        for (let prop in this.getDetails) {
          if (this.getDetails.hasOwnProperty(prop)) {
            if (this.getDetails[prop]['key'] === parseInt(this.$route.params.id)) {
              return this.getDetails[prop]['details']
            }
          }
        }
      }
    },
    methods: {},
    mounted () {
      // this.$store.dispatch('getData')
    },
    components:
      {
        SearchBox,
        AxisHistory,
        EnclosuresNew,
        Metrics,
        ReferrerHost,
        Enclosures
      }
  }
</script>

<style scoped>

</style>
