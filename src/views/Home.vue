<template>
  <div class="home">
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
          <template v-for="item in items">
            <v-row v-if="item.heading" :key="item.heading" align="center">
              <v-col cols="6">
                <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
              </v-col>
              <v-col cols="6" class="text-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-col>
            </v-row>
            <v-list-group
              v-else-if="item.children"
              :key="item.text"
              no-action
              v-model="item.model"
              :prepend-icon="item.icon"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item v-for="(child, i) in item.children" exact :key="i" :to="child.to">
                <v-list-item-title>{{ child.text }}</v-list-item-title>
                <v-list-item-icon v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
            <v-list-item v-else :key="item.text" link>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-divider></v-divider>
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="grey darken-1">settings</v-icon>
            </v-list-item-action>
            <v-list-item-title class="grey--text text--darken-1">Настройки</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="indigo" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>DocDuck</v-toolbar-title>
        <v-spacer />
        <v-toolbar-title>
          <v-btn outlined color="orange lighten-3" @click="signOut">Выход</v-btn>
        </v-toolbar-title>
      </v-app-bar>

      <v-content>
        <router-view></router-view>
      </v-content>
      <v-footer color="indigo" app>
        <span class="white--text">&copy; 2020</span>
      </v-footer>
  </div>
</template>


<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  private drawer: boolean | null = null;

  private signOut() {
    this.$store.dispatch('security/signOut');
  }

  get items() {
    return [
      { icon: 'account_box', text: 'Анкета пользователя' },
      {
        icon: 'mdi-ballot',
        text: 'Заявки',
        model: true,
        children: [
          {
            icon: 'create',
            text: 'Новая',
            to: '/applications/new',
          },
          {
            icon: 'done_all',
            text: 'Созданные',
            to: '/applications/all',
          },
          {
            icon: 'done_all',
            text: 'Пример 1',
            to: '/applications/test',
          },
          {
            icon: 'done_all',
            text: 'Пример 2',
            to: '/applications/test2',
          },
          {
            icon: 'done_all',
            text: 'Пример 3',
            to: '/applications/test3',
          },
          {
            icon: 'done_all',
            text: 'Пример 4',
            to: '/applications/test4',
          },
        ],
      },
    ];
  }
}
</script>
