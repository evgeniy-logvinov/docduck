<template>
  <v-container>
    <v-row>
      <v-col>
        <p>У тебя диагностировали высокое артериальное давление?</p>
        <v-radio-group v-model="pressure" :mandatory="false">
          <v-radio label="Да" value="YES"></v-radio>
          <v-radio label="Нет" value="NO"></v-radio>
          <v-radio label="Не уверен" value="DO_NOT_KNOW"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
          <p>У тебя есть диабет?</p>
          <v-radio-group v-model="diabet" :mandatory="false">
            <v-radio label="Да" value="YES"></v-radio>
            <v-radio label="Нет" value="NO"></v-radio>
            <v-radio label="Не уверен" value="DO_NOT_KNOW"></v-radio>
          </v-radio-group>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col>
        <v-switch label="Вы курите" class="mt-1"  v-model="smoking"></v-switch>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn color="primary" outlined block to="quizStart">Продолжить</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RegistrationQuiz extends Vue {
  private smoking = false;

  private pressure = '';

  private diabet = '';
}
</script>
