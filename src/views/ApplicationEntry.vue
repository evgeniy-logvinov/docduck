<template>
  <v-container class="applications">
    <v-row no-gutters>
      <v-col>
        <v-carousel
          cycle
          hide-delimiter-background
          show-arrows-on-hover
          height="300"
        >
          <v-carousel-item
            v-for="slide in slides"
            :key="slide"
          >
            <v-row align="center" justify="center">
              {{ slide }}
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col class="col-9 align-self-center">
        <v-row>
          <v-col>
            <v-btn block class="ma-2" color="blue" to="applications/new">
              Регистрация
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn block class="ma-2" outlined to="applications/new">
              Вход
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ApplicationsNew extends Vue {
  private slides = [
    'Slide1',
    'Slide2',
    'Slide3',
    'Next slide',
  ]
}
</script>
