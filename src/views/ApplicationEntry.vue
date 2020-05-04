<template>
  <v-container class="applications">
    <v-row justify="center" align="center">
      <v-col class="col-9 align-self-center">
        <v-row>
          <v-col>
            <v-btn block class="ma-2" color="primary" to="registration">Регистрация</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn block class="ma-2" outlined to="new">Вход</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ApplicationsNew extends Vue {}
</script>
