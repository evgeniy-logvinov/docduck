<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="name" :rules="nameRules" :counter="3" label="Ваше имя" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            v-model="sex"
            :items="sexRules"
            :rules="[v => !!v || 'Пол обязателен']"
            label="Пол"
            required
          ></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="phone" label="Phone" required></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="9">
          <v-row>
            <v-col>
              <v-btn color="primary" outlined block @click="entry">Войти</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn color="primary" outlined block @click="reset">Сбросить</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ApplicationsNew extends Vue {
  private valid = true;

  private name = '';

  private nameRules: any[] = [
    (v: any) => !!v || 'Имя обязательно',
    (v: any) => (v && v.length >= 3) || 'Имя должо быть больше 3-х букв',
  ];

  private phone = '';

  private phoneRules: any[] = [
    (v: any) => !!v || 'Телефон обязательно',
  ];

  private sex = null;

  private sexRules: any[] = ['Мужской', 'Женский'];

  private validate() {
    (this.$refs.form as any).validate();
  }

  private async entry() {
    await this.$store.dispatch('setUser', {
      name: this.name,
      phone: this.phone,
      sex: this.sex,
    });
    this.$router.push('/applications/quiz');
  }

  // private enter(obj) {
  // }

  private reset() {
    this.name = '';
    this.phone = '';
    this.sex = null;
  }
}
</script>
