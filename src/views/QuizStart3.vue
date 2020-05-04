<template>
  <div class="applications">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container class="spacing-playground" fluid>
        <v-card class="px-4">
          <v-row>
            <v-col cols="12" class="d-flex pa-6 align-center justify-space-between">
              <p
                class="text-left body-1"
              >
              Давай начнем с того, что тебя больше всего беспокоит, напиши ниже
              </p>
            </v-col>
          </v-row>
          <v-row class="md-9" justify="center">
            <v-col>
                <v-toolbar>
                <v-toolbar-title>Введите текст</v-toolbar-title>
                <v-autocomplete
                  v-model="select"
                  :loading="loading"
                  :items="items"
                  :search-input.sync="search"
                  cache-items
                  class="mx-4"
                  flat
                  hide-no-data
                  hide-details
                  label="Что вас беспокоит?"
                  solo-inverted
                ></v-autocomplete>
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-start">
              <v-img
                src="@/assets/logo.jpg"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class QuizStart extends Vue {
  @Prop() loading = false;

  @Prop() items = [];

  @Prop() searchState: null | string;

  @Prop() selectState: null;

  @Prop() bodyParts = [];

  search(val) {
    val && val !== this.select && this.querySelections(val);
  }

  querySelections(v: string) {
    this.loading = true;

    setTimeout(() => {
      this.items = this.bodyParts.filter((p) => (p || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1);
      this.loading = false;
    }, 500);
  }
}
</script>
