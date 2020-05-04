<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="3"
            label="Ваше имя"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="4"
            label="Пароль"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="9">
          <v-row>
            <v-col>
              <v-btn block color="blue darken-1" @click="enter">
                Войти
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn block color="warning" @click="reset">
                Сбросить
              </v-btn>
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

  private email = '';

  private emailRules: any[] = [
    (v: any) => !!v || 'E-mail обязательно',
    (v: any) => /.+@.+\..+/.test(v) || 'E-mail должен быть настоящим',
  ];

  private password = '';

  private passwordRules: any[] = [
    (v: any) => !!v || 'Пароль обязательно',
    (v: any) => v.length > 4 || 'Пароль слишком маленький',
  ]

  private validate() {
    (this.$refs.form as any).validate();
  }

  private reset() {
    this.name = '';
    this.email = '';
    this.password = '';
  }
}
</script>
