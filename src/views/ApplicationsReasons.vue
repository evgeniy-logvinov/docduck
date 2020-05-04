<template>
  <div class="applications">
    <v-form>
      <v-container class="spacing-playground" fluid>
        <v-card class="px-4">
          <v-row>
            <v-col cols="12" class="d-flex align-center justify-space-between">
              <div
                class="text-left title"
              >Давай начнем с того, что тебя больше всего беспокоит, напиши ниже</div>
            </v-col>
          </v-row>
          <v-row v-if="reasons">
            <v-col
              v-for="button in reasons"
              :key="button.id"
              cols="12"
              class="d-flex align-center justify-center text-wrap"
            >
              <v-btn color="primary" outlined block @click="selectReason(button)">{{button.name}}</v-btn>
            </v-col>
          </v-row>
          <!-- <v-autocomplete
                v-model="reasonId"
                :items="searchItems"
                :search-input.sync="search"
                color="white"
                hide-no-data
                hide-selected
                item-text="name"
                item-value="id"
                label="Public APIs"
                placeholder="Start typing to Search"
                prepend-icon="mdi-database-search"
                return-object
          ></v-autocomplete>-->
          <!-- </v-col>
          </v-row>-->
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
import {
  Component, Vue, Watch, ProvideReactive,
} from 'vue-property-decorator';

@Component
export default class ApplicationsReason extends Vue {
  // @Watch('search')
  // private onSearch(val: string) {
  // Items have already been loaded
  // if (this.reasons.length > 0) return;

  // // Items have already been requested
  // if (this.isLoading) return;

  // this.isLoading = true;
  // // Lazily load input items
  // fetch('https://api.publicapis.org/entries')
  //   .then(res => res.json())
  //   .then(res => {
  //     const { count, entries } = res;
  //     this.count = count;
  //     this.entries = entries;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  //   .finally(() => (this.isLoading = false));
  // }
  private search = '';

  private reasonId = '';

  private async created() {
    try {
      await this.$store.dispatch('getReasons');
    } catch (err) {
      alert(err);
    }
  }

  private async selectReason(reason: any) {
    await this.$store.dispatch('setReason', reason);
    this.$router.push('simptoms');
  }

  get searchItems() {
    return this.reasons.filter((el: any) => el.name.includes(this.search));
  }

  get simptoms() {
    return this.$store.state.simptoms;
  }

  get reasons() {
    return this.$store.state.reasons;
  }
}
</script>
