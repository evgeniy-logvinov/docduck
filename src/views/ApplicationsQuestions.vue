<template>
  <div class="applications">
    <v-form>
      <v-container class="spacing-playground" fluid>
        <v-card class="px-4" v-if="question">
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <p class="text-left body-1">{{question.question}}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              v-for="button in question.buttons"
              :key="button.id"
              cols="12"
              class="d-flex align-center justify-center text-wrap"
            >
              <v-btn color="primary" outlined block @click="sendAction(button)">{{button.name}}</v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-end">
              <v-btn text small class="mr-4" to="/about">
                <v-icon left>feedback</v-icon>Дать обратную связь
              </v-btn>
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
export default class ApplicationsQuestions extends Vue {
  private async sendAction(button: any) {
    try {
      await this.$store.dispatch('setSelectedAction', button);
      if (!this.question.isFinal) {
        await this.reloadData();
      } else {
        this.$router.push('final');
      }
    } catch (err) {
      alert(err);
    }
  }

  private async reloadData() {
    try {
      await this.$store.dispatch('getQuestion');
    } catch (err) {
      alert(err);
    }
  }

  private async created() {
    this.reloadData();
  }

  get question() {
    return this.$store.state.question;
  }
}
</script>
