<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          router
          :to="item.to"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in getEnclosuresData"
          :key="i"
          router
          :to="'/author/' + item.id"
          exact
        >
          <v-list-tile-action>
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.name"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="miniVariant = !miniVariant"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        clipped: true,
        drawer: true,
        fixed: false,
        items: [{
          to: '/',
          icon: 'bubble_chart',
          title: 'Dashboard'
        }],
        miniVariant: true,
        right: true,
        rightDrawer: false,
        title: 'AaHa Moments'
      }
    },
    name: 'App',
    computed: {
      ...mapGetters([
        'getEnclosures'
      ]),
      getEnclosuresData () {
        return this.getEnclosures
      }
    }
  }
</script>

<style>
  .c3 line {
    fill: none!important;
  }
</style>
