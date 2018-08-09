<template>
  <v-card>
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>ReferrerHost</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="referrerHost"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.key }}</td>
        <td class="text-xs-right">{{ props.item.value }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    name: 'ReferrerHost',
    props: {
      referrerHost: {}
    },
    data () {
      return {
        headers: [
          {
            text: 'Host',
            align: 'left',
            value: 'key'
          },
          {text: 'Count', value: 'value'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
