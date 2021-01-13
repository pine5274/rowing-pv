<template>
  <v-app>
    <core-app-bar />
    <core-drawer />
    <v-main class="pa-0">
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <core-footer />
  </v-app>
</template>

<script>
import CoreAppBar from '~/components/core/AppBar.vue';
import CoreDrawer from '~/components/core/Drawer.vue';
import CoreFooter from '~/components/core/Footer.vue';
export default {
  components: {
    CoreAppBar,
    CoreDrawer,
    CoreFooter,
  }
}
</script>
