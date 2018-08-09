<template>
    <v-layout row wrap>
      <v-flex xs12>
        <v-expansion-panel popout>
          <v-expansion-panel-content
          >
            <div slot="header">
              <span class="headline">Search</span>
            </div>
            <v-card>
              <v-card-text>
                <v-container fluid grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="refererHost"
                        label="Referrer Host"
                        required></v-text-field>
                    </v-flex>
                    <v-flex xs4 sm2 md2>
                      <v-text-field
                        v-model="limit"
                        label="Limit"
                        required></v-text-field>
                    </v-flex>
                    <v-flex xs4 sm2 md2>
                      <v-text-field
                        v-model="from"
                        label="From"
                        required></v-text-field>
                    </v-flex>
                    <v-flex xs4 sm2 md2>
                      <v-text-field
                        v-model="interval"
                        label="Interval"
                        required></v-text-field>
                    </v-flex>
                    <v-flex xs4 sm2 md2>
                      <v-select
                        v-model="deviceType"
                        :items="['Mobile', 'Desktop']"
                        label="Device Type"
                        required
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-select
                        v-model="field"
                        :items="fieldsItems"
                        chips
                        label="Fields"
                        multiple
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-select
                        v-model="enclosures"
                        :items="enclosuresItems"
                        chips
                        label="Enclosures"
                        multiple
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-select
                        v-model="metrics"
                        :items="metricsItems"
                        chips
                        label="Metrics"
                        multiple
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-select
                        v-model="breakdown"
                        :items="breakdownItems"
                        chips
                        label="Breakdown"
                        multiple
                      ></v-select>
                    </v-flex>
                    <v-flex xs12>
                      <div style="text-align: left; float: left; word-break: break-word;">
                        URL: <br/> {{ apiUrl }}
                      </div>
                    </v-flex>
                  </v-layout>

                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="submit">Submit</v-btn>
                <v-btn color="blue darken-1" flat @click="clear">Reset</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },
    data: () => ({
      refererHost: '',
      select: null,
      deviceType: null,
      field: null,
      fieldsItems: [
        'published', 'title', 'segment.slug', 'segment.path', 'referrer.host'
      ],
      enclosures: null,
      enclosuresItems: [
        'author'
      ],
      metrics: null,
      metricsItems: [
        'hits', 'sessions', 'bounce-rate'
      ],
      limit: 5,
      from: 5,
      interval: 1,
      breakdown: null,
      breakdownItems: [
        'author.id', 'date', 'article.id'
      ],
      checkbox: null,
      dictionary: {
        attributes: {
          // custom attributes
        },
        custom: {
          refererHost: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          }
        }
      }
    }),
    mounted () {
      this.$validator.localize('en', this.dictionary)
    },
    computed: {
      apiUrl () {
        return 'https://example.com/stats/?f=referrer.host==' +
          this.refererHost +
          (
            (this.deviceType !== null) ? ';device_type==' + this.deviceType : ''
          ) +
          ';&fields=' + (this.field || '') +
          '&enclosures=' + (this.enclosures || '') +
          '&metrics=' + (this.metrics || '') +
          '&limit=' + this.limit +
          '&from=' + this.from +
          'd&interval=' + this.interval +
          '&b=' + this.breakdown || ''
      }
    },
    methods: {
      submit () {
        this.$validator.validateAll().then((res) => {
          if (res) {
            console.log('validateAll Complete')
          }
        })
      },
      clear () {
        this.refererHost = ''
        this.limit = ''
        this.from = ''
        this.interval = ''
        this.limit = ''
        this.field = null
        this.deviceType = null
        this.enclosures = null
        this.metrics = null
        this.breakdown = null
        this.$validator.reset()
      }
    }
  }
</script>

<style scoped>

</style>
