import Vue from 'vue';
import Vuex from 'vuex';
import { ApiApplications } from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reason: {
      id: 'HEADACHE',
      name: 'Головная боль',
    },
    reasons: [{
      id: 'HEADACHE',
      name: 'Головная боль',
    },
    {
      id: 'RUNY_NOSE',
      name: 'Насморк',
    }],
    simptoms: [],
    simptom: null,
    question: null as any,
    selectAction: null,
    selections: [] as any[],
    questions: [],
    summary: null,
  },
  mutations: {
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
      console.log('test', { [state?.question?.state]: action });
      state.selections.push({ [state?.question?.state]: action });
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
      const question = await ApiApplications.getQuestion(state?.question?.state, state.reason.id, state.selectAction);
      commit('SET_QUESTION', question.data);
    },
    async setSelectedAction({ commit }: any, selectedAction): Promise<void> {
      commit('SET_SELECTED_ACTION', selectedAction);
      commit('SET_SELECTIONS', selectedAction);
    },
    async getSummary({ commit, state }: any): Promise<void> {
      const summary = await ApiApplications.postSummary(state.reason.id, state.selections);
      commit('SET_SUMMARY', summary.data);
    },
  },
  modules: {
  },
});
