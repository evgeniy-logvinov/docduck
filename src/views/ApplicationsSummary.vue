<template>
  <div class="applications">
    <v-form>
      <v-container class="spacing-playground" fluid v-if="reason && summary">
        <v-card class="px-4">
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div class="text-left title">{{reason.name}}</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div class="text-left subtitle-1">{{user.name}}</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div class="text-left title">Итог</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div class="text-left subtitle-1">{{summary.description}}</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div class="text-left subtitle-2">Возможные причины</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              class="d-flex align-center justify-end"
              v-for="(possible, index) in summary.possibleCauses"
              :key="index"
            >
              <v-card class="px-4">
                <v-row>
                  <v-col cols="12" class="d-flex align-center justify-space-between">
                    <div class="text-left body-1">{{possible.name}}</div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="d-flex align-center justify-space-between">
                    <div class="text-left body-2">{{possible.advice}}</div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="d-flex align-center justify-space-between">
                    <div class="text-left caption">{{possible.statistics}}</div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div class="text-left subtitle-2">Менее вероятные причины</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              class="d-flex align-center justify-end"
              v-for="(lessLikelyCause, index) in summary.lessLikelyCauses"
              :key="index"
            >
              <v-card class="px-4">
                <v-row>
                  <v-col cols="12" class="d-flex align-center justify-space-between">
                    <div class="text-left body-1">{{lessLikelyCause.name}}</div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="d-flex align-center justify-space-between">
                    <div class="text-left body-2">{{lessLikelyCause.advice}}</div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="d-flex align-center justify-space-between">
                    <div class="text-left caption">{{lessLikelyCause.statistics}}</div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div class="text-left subtitle-1">Симптомы</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div class="text-left subtitle-2">Текущие</div>
            </v-col>
            <v-col
              cols="12"
              v-for="(answer, index) in yesAnswers"
              :key="index"
              class="d-flex align-center py-1"
            >
              <div class="text-left body-2">- {{answer.question && answer.question.shortName}}</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div class="text-left subtitle-2">Отсутсвует</div>
            </v-col>
            <v-col
              cols="12"
              v-for="(answer, index) in yesAnswers"
              :key="index"
              class="d-flex align-center py-1"
            >
              <div class="text-left body-2">- {{answer.question && answer.question.shortName}}</div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col>
              <v-btn color="primary" outlined block to="quizStart">Закончить</v-btn>
            </v-col>
          </v-row>
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
export default class ApplicationsSummary extends Vue {
  private async created() {
    try {
      await this.$store.dispatch('getSummary');
    } catch (err) {
      alert(err);
    }
  }

  get summary() {
    return this.$store.state.summary;
  }

  get reason() {
    return this.$store.state.reason;
  }

  get user() {
    return this.$store.state.user;
  }

  get yesAnswers() {
    return this.$store.state.resultYes;
  }

  get noAnswers() {
    return this.$store.state.resultNo;
  }
}
</script>
