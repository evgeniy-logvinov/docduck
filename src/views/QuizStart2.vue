<template>
  <div class="applications">
    <v-form ref="form">
      <v-container class="spacing-playground" fluid>
        <v-card class="px-4">
          <v-row>
            <v-col cols="12" class="d-flex pa-6 align-center justify-space-between">
              <p
                class="text-left body-1"
              >
              Хорошо, кого будем оценивать?
              </p>
            </v-col>
          </v-row>
          <v-row class="md-9" justify="center">
            <v-col cols="9" md="auto" class="d-flex align-center justify-start">
              <v-btn color="primary" outlined block to="reasons">Меня</v-btn>
            </v-col>
          </v-row>
          <v-row class="md-9" justify="center">
            <v-col cols="9" md="auto" class="d-flex align-center justify-start">
              <v-btn color="primary" outlined block to="reasons">Другого</v-btn>
            </v-col>
          </v-row>
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
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class QuizStart2 extends Vue {
}
</script>
