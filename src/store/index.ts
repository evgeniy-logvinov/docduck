import Vue from 'vue';
import Vuex from 'vuex';
import { ApiApplications } from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    reason: null,
    reasons: [],
    simptoms: [],
    simptom: null,
    question: null as any,
    selectAction: null,
    selections: [] as any[],
    questions: [],
    summary: null,
    resultYes: [] as any[],
    resultNo: [] as any[],
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_REASONS(state, reasons) {
      state.reasons = reasons;
    },
    SET_REASON(state, reason) {
      state.reason = reason;
    },
    SET_SIMPTOMS(state, simptoms) {
      state.simptoms = simptoms;
    },
    SET_SIMPTOM(state, simptom) {
      state.simptom = simptom;
    },
    SET_QUESTION(state, question) {
      state.question = question;
    },
    SET_SELECTED_ACTION(state, action) {
      state.selectAction = action;
    },
    SET_SELECTIONS(state, action) {
      state.selections = { ...state.selections, ...{ [state?.question?.nextState]: action.id } };

      if (action.id === 'DO_NOT_KNOW' || action.id === 'NO') {
        state.resultNo.push(action);
      } else {
        state.resultYes.push({ action, question: state.question });
      }
    },
    SET_SUMMARY(state, summary) {
      state.summary = summary;
    },
  },
  actions: {
    async getReasons({ commit }: any): Promise<void> {
      const reasons = await ApiApplications.getReasons();
      commit('SET_REASONS', reasons.data);
    },
    async setReason({ commit }: any, reason): Promise<void> {
      commit('SET_REASON', reason);
    },
    async getSimptoms({ commit, state }: any): Promise<void> {
      const simptoms = await ApiApplications.getSimptoms(state.reason.id);
      commit('SET_SIMPTOMS', simptoms.data);
    },
    async setSimptom({ commit }: any, simptom): Promise<void> {
      commit('SET_SIMPTOM', simptom);
    },
    async getQuestion({ commit, state }: any): Promise<void> {
      const question = await ApiApplications
        .getQuestion((state.question && state.question.nextState) || null, state.reason.id, state.selectAction);
      commit('SET_QUESTION', question.data);
    },
    async setSelectedAction({ commit }: any, selectedAction): Promise<void> {
      commit('SET_SELECTED_ACTION', selectedAction.id);
      commit('SET_SELECTIONS', selectedAction);
    },
    async getSummary({ commit, state }: any): Promise<void> {
      const summary = await ApiApplications.postSummary(state.reason.id, state.selections);
      commit('SET_SUMMARY', summary.data);
    },
    async setUser({ commit, state }: any, user: any): Promise<void> {
      console.log('user', user);
      commit('SET_USER', user);
    },
  },
  modules: {
  },
});
