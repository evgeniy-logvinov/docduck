<template>
  <div class="applications">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container class="spacing-playground" fluid>
        <v-card class="px-4">
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-end">
              <v-btn outlined @click="validate">Две одинаково</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <p
                class="text-left body-1"
              >Твоя голова и шея большую часть времени наклонена? например вперед при работе за ноутом</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-start">
              <v-btn color="primary" outlined width="150px" @click="reset">Да</v-btn>
            </v-col>
            <v-col cols="12" class="d-flex align-center justify-start">
              <v-btn color="error" outlined width="150px" @click="reset">Нет</v-btn>
            </v-col>
            <v-col cols="12" class="d-flex align-center justify-start">
              <v-btn click="resetValidation" width="150px" outlined>Я не знаю</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-end">
              <v-btn text small class="mr-4" @click="resetValidation">Дать обратную связь</v-btn>
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
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ApplicationsTest2 extends Vue {
  private valid = true;

  private name = '';

  private nameRules: any[] = [
    (v: any) => !!v || 'Name is required',
    (v: any) => (v && v.length <= 10) || 'Name must be less than 10 characters',
  ];

  private email = '';

  private emailRules: any[] = [
    (v: any) => !!v || 'E-mail is required',
    (v: any) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ];

  private select: any = null;

  private items: any[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  private checkbox = false;

  private validate() {
    (this.$refs.form as any).validate();
  }

  private reset() {
    (this.$refs.form as any).reset();
  }

  private resetValidation() {
    (this.$refs.form as any).resetValidation();
  }
}
</script>
