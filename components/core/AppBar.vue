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
        <div class="d-flex align-center">

          <!-- <v-toolbar-title class="primary--text headline">
            <span class="font-weight-bold">Rowing</span>
          </v-toolbar-title> -->
        </div>

        <v-spacer />

        <v-toolbar-items
          v-if="$vuetify.breakpoint.smAndUp"
          class="shrink"
        >
          <v-btn
            v-for="(link, i) in links"
            :key="i"
            active-class="primary--text"
            class="subtitle-1 ml-1"
            exact
            min-width="128"
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
