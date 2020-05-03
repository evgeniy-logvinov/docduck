<template>
  <div class="applications">
    Новые опросы/Заявки
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="10" :rules="nameRules"
      label="Name" required>

      </v-text-field>

      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

      <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
    </v-form>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ApplicationsNew extends Vue {
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
