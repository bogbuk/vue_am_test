<template>
  <v-card height="100%">
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Enclosures</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list
      v-for="(value, index) in enclosures"
      :key="value.id"
    >
        <v-list-tile
          router
          :to="'/author/' + value.id"
          exact
        >
          <v-list-tile-avatar>
            <img :src="value.avatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="value.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="value.url"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: 'EnclosuresNew',
    props: {
      enclosures: {}
    }
  }
</script>

<style scoped>

</style>
