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
            <v-col cols="12" class="d-flex align-center justify-center text-wrap">
              <v-autocomplete
                v-model="reasonId"
                :items="reasons"
                :filter="customFilter"
                color="white"
                item-text="name"
                item-value="id"
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-center text-wrap">
              <v-btn
                color="primary"
                :disabled="!reasonId"
                outlined
                block
                @click="selectReason()"
              >Продолжить</v-btn>
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

  private async selectReason() {
    const reason = this.reasons.find((el: any) => el.id === this.reasonId);
    await this.$store.dispatch('setReason', reason);
    this.$router.push('simptoms');
  }

  private customFilter(item: any, queryText: any, itemText: any) {
    const textOne = item.name.toLowerCase();
    const searchText = queryText.toLowerCase();

    return textOne.indexOf(searchText) > -1;
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
