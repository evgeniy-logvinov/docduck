<template>
  <div id="app">
    <v-app id="inspire">
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: null,
  }),
});
</script>
