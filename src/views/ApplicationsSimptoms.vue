<template>
  <div class="applications">
    <v-form>
      <v-container class="spacing-playground" fluid>
        <v-card class="px-4">
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div class="text-left title">Поиск и уточнение симптома</div>
            </v-col>
          </v-row>
          <v-row v-if="reason">
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div class="text-left subtitle-1">{{reason.name}}</div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-card
            v-for="simptom in simptoms"
            :key="simptom.id"
            class="mx-auto mt-2"
            max-width="344"
            outlined
            @click="selectSimptom(simptom)"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">{{simptom.name}}</v-list-item-title>
                <v-list-item-subtitle>{{simptom.description}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn text color="deep-purple accent-4" @click="selectSimptom(simptom)">Выбрать</v-btn>
            </v-card-actions>
          </v-card>
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
export default class ApplicationsSimptoms extends Vue {
  private async created() {
    try {
      await this.$store.dispatch('getSimptoms');
    } catch (err) {
      alert(err);
    }
  }

  private async selectSimptom(simptom: any) {
    await this.$store.dispatch('setSimptom', simptom);
    this.$router.push('questions');
  }

  get simptoms() {
    return this.$store.state.simptoms;
  }

  get reason() {
    return this.$store.state.reason;
  }
}
</script>
