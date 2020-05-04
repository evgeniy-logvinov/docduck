<template>
  <div class="applications">
    <v-form>
      <v-container class="spacing-playground" fluid>
        <v-card class="px-4">
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div
                class="text-left title"
              >Давай начнем с того, что тебя больше всего беспокоит, напиши ниже</div>
            </v-col>
          </v-row>
          <v-row v-if="reasons">
            <v-col
              v-for="button in reasons"
              :key="button.id"
              cols="12"
              class="d-flex align-center justify-center text-wrap"
            >
              <v-btn color="primary" outlined block @click="selectReason(button)">{{button.name}}</v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-start">
              <v-img
                src="@/assets/logo.jpg"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="100px"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, ProvideReactive } from 'vue-property-decorator';

@Component
export default class ApplicationsReason extends Vue {
  private search = '';

  private reasonId = '';

  private async created() {
    try {
      await this.$store.dispatch('getReasons');
    } catch (err) {
      console.log(err);
    }
  }

  private async selectReason(reason: any) {
    await this.$store.dispatch('setReason', reason);
    this.$router.push('simptoms');
  }

  get searchItems() {
    return this.reasons.filter((el: any) => el.name.includes(this.search));
  }

  get simptoms() {
    return this.$store.state.simptoms;
  }

  get reasons() {
    return this.$store.state.reasons;
  }
}
</script>
