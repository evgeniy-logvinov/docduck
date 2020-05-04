<template>
  <div class="applications">
    <v-form>
      <v-container class="spacing-playground" fluid>
        <v-card class="px-4">
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <p class="text-left body-1">
                Не забывай, что это не медицинский диагноз.
                Лучше обратиться к врачу, если ситуация станет хуже.
                В некоторых случаях мы можем посоветовать дополнительные обследования.
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-center text-wrap">
              <v-btn color="primary" outlined block to="summary">Открыть отчет</v-btn>
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
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ApplicationsFinalWarning extends Vue {}
</script>
