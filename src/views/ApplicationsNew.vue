<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="name" :counter="50" label="Ваше имя" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-select v-model="sex" :items="sexRules" label="Пол" required></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="phone" :counter="15" label="Phone" required></v-text-field>
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

  private phone = '';

  private sex = null;

  private sexRules: any[] = ['Мужской', 'Женский'];

  private async entry() {
    await this.$store.dispatch('setUser', {
      name: this.name,
      phone: this.phone,
      sex: this.sex,
    });
    this.$router.push('/applications/quiz');
  }

  private reset() {
    this.name = '';
    this.phone = '';
    this.sex = null;
  }
}
</script>
