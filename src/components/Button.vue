<template>
  <v-btn color="primary" class="md-6" @click="reset">
    {{ name }}
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop(String) readonly name: string | undefined;
}
</script>
