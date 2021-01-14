<template>
  <v-app-bar
    id="core-app-bar"
    app
    color="rgba(0, 0, 0, 0)"
    flat
    height="70"
  >
    <v-container>
      <v-row>
        <!-- <div class="d-flex align-center"> -->
          <v-toolbar-title class="white--text text-h3 font-weight-black">
            <span>Row</span><span class="text-opacity-06">PV</span>
          </v-toolbar-title>
        <!-- </div> -->

        <v-spacer />

        <v-toolbar-items
          v-if="$vuetify.breakpoint.smAndUp"
          class="shrink"
        >
          <v-btn
            v-for="(link, i) in links"
            :key="i"
            active-class="primary--text"
            class="subtitle-1 ml-1 accent--text text-title"
            exact
            min-width="100"
            text
          >
            {{ link }}
          </v-btn>
        </v-toolbar-items>

        <v-app-bar-nav-icon
          v-else
          @click="setDrawer(true)"
        />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  // Utilities
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'CoreAppBar',

    computed: {
      ...mapState(['links']),
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
    },
  }
</script>

<style scoped>
.text-opacity-06 {
  opacity: 0.7;
}
</style>
