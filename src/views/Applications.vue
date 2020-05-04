<template>
  <div class="applications">
    <router-view></router-view>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Applications extends Vue {}
</script>
