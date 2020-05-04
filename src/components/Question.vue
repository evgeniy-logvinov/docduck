<template>
  <v-row>
    <v-col cols="12" class="d-flex pa-6 align-center justify-space-between">
      <p
        class="text-left body-1"
      >
      {{ props.question }}
      </p>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Question extends Vue {
}
</script>
