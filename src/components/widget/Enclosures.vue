<template>
  <v-card>
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Enclosures</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list>
      <v-list-group
        v-for="(value, key, index) in enclosures"
        :key="value.title"
        :prepend-icon="value.action"
        no-action
      >
        <v-list-tile slot="activator">
          <v-list-tile-avatar>
            <img :src="value.avatar">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="value.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="value.url"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click=""
        >
          <v-list-tile-content>
            <v-list-tile-title>ID: {{ value.id }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click=""
        >
          <v-list-tile-content>
            <v-list-tile-title>nameClean: {{ value.nameClean }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click=""
        >
          <v-list-tile-content>
            <v-list-tile-title>Path: {{ value.path }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click=""
        >
          <v-list-tile-content>
            <v-list-tile-title>Slug: {{ value.slug }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: 'Enclosures',
    props: {
      enclosures: {}
    }

  }
</script>

<style scoped>

</style>
