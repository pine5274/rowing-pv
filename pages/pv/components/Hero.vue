<template>
  <!-- <base-hero
    :src="require('@/assets/luke-matthews-T4PTfNwgbEM-unsplash.jpg')"
    gradient="to top, #419B911F, transparent"
    v-bind="$attrs"
        gradient="to top, rgba(112, 225, 245, 0.3), rgba(255, 209, 148, 0.5)"

  >
    <slot />
  </base-hero> -->
    <v-img :src="require('@/assets/Eoy74EFVoAkTZA_ 2.jpeg')"
    max-height="45vh"
    gradient="to top right, rgba(213, 51, 105, 0.5), rgba(203, 173, 109, 0.7)"
    >
        <!-- <div class="fill-height bottom-gradient"></div> -->
        <h1 class="display-2">Rowing PV</h1>
    </v-img>
</template>

<style scoped>
.bottom-gradient {
background-image: linear-gradient(to top, rgba(112, 225, 245, 0.4) rgba(255, 209, 148, 0.4), transparent 72px);
/* background: linear-gradient(to right, #70e1f5, #ffd194); */
}
</style>
