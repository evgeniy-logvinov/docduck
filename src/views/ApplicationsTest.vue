<template>
  <div class="applications">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container class="spacing-playground py-0 px-2" fluid>
        <v-row>
          <v-col cols="12" class="d-flex align-center justify-end">
            <v-btn :disabled="!valid" class="mr-4" @click="validate">Две одинаково</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex pa-6 align-center justify-space-between">
            <p
              class="text-left body-1"
            >
            {{ dataObj.question }}
            </p>
          </v-col>
        </v-row>
        <v-row
          v-for="button in dataObj.buttons"
          :key="button"
        >
          <v-col cols="12" class="d-flex align-center justify-end">
            <v-btn color="primary" class="md-6" @click="next">
              {{ button.name }}
            </v-btn>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col cols="12" class="d-flex align-center justify-end">
            <v-btn color="error" class="mr-4" @click="reset">Нет</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex align-center justify-end">
            <v-btn click="resetValidation" class="mr-4">Я не знаю</v-btn>
          </v-col>
        </v-row> -->
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
      </v-container>
    </v-form>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios, { AxiosResponse } from 'axios';

// const url = 'http://localhost:8086/';
@Component
export default class ApplicationsTest2 extends Vue {
  private valid = true;

  private dataObj: Record<string, any> | null = null;

  mounted() {
    // axios.get(url)
    //   .then((response: AxiosResponse) => response.data)
    //   .then((data) => {
    //     this.dataObj = data;
    //   });
  }
}
</script>
