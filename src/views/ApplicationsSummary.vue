<template>
  <div class="applications">
    <v-form>
      <v-container class="spacing-playground" fluid v-if="summary">
        <v-card class="px-4">
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div class="text-left title">Данные пациента</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div class="text-left subtitle-1">Саммари</div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-expansion-panels focusable>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Подробное описание причин
                с предварительными диагнозами
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card
                  class="mx-auto ma-2"
                  outlined
                >{{summary.description}}</v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Вероятные причины</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card class="mx-auto ma-2" outlined>
                  <v-list disabled>
                    <v-list-item-group color="primary">
                      <v-list-item v-for="(item, i) in summary.possibleCauses" :key="i">
                        <v-list-item-content>
                          <v-list-item-title v-text="item"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- <v-expansion-panel>
              <v-expansion-panel-header>Менее вероятные причины</v-expansion-panel-header>
              <v-expansion-panel-content>{{summary.possibleCauses}}</v-expansion-panel-content>
            </v-expansion-panel>-->
            <v-expansion-panel>
              <v-expansion-panel-header>Список выбранных симптомов</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card class="mx-auto ma-2" outlined>
                  <v-list disabled>
                    <v-list-item-group color="primary">
                      <v-list-item v-for="(item, i) in summary.present" :key="i">
                        <v-list-item-content>
                          <v-list-item-title v-text="item"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Список невыбранных симптомов</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card class="mx-auto ma-2" outlined>
                  <v-list disabled>
                    <v-list-item-group color="primary">
                      <v-list-item v-for="(item, i) in summary.absent" :key="i">
                        <v-list-item-content>
                          <v-list-item-title v-text="item"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
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
import { Component, Vue, ProvideReactive } from 'vue-property-decorator';

@Component
export default class ApplicationsSimptoms extends Vue {
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
}
</script>
