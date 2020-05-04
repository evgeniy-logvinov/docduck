<template>
  <div class="applications">
    <v-form>
      <v-container class="spacing-playground" fluid>
        <v-card class="px-4">
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <p class="text-left body-1">
                Спасибо {{user && user.name}}, готово.
                Я подготовлю отчет с возможными причинами и рекомендациями
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-center text-wrap">
              <v-btn color="primary" outlined block to="warning">Хорошо</v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
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
export default class ApplicationsFinal extends Vue {
  get items(): any[] {
    return [
      {
        text: this.reason.name,
        disabled: true,
        // href: 'breadcrumbs_dashboard',
      },
    ];
  }

  private async sendAction(button: any) {
    try {
      await this.$store.dispatch('setSelectedAction', button.id);
      if (!this.question.isFinal) {
        await this.reloadData();
      } else {
        this.$router.push('summary');
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
  // private feedbackLink() {
  // }

  get question() {
    return this.$store.state.question;
  }

  get simptom() {
    return this.$store.state.simptom;
  }

  get reason() {
    return this.$store.state.reason;
  }

  get user() {
    return this.$store.state.user;
  }
}
</script>
