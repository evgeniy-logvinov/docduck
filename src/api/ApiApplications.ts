import axios from '@/api/axios';

export default class ApiApplications {
  public static getReasons() {
    return axios.get('/reason/all');
  }

  public static getSimptoms(reasonId: string) {
    return axios.get(`/reason/detail?reason=${reasonId}`);
  }

  public static getQuestion(state: string, reason: string, select: string) {
    let url = `/step/next?reason=${reason}&select=${select}`;
    if (state) {
      url += `&state=${state}`;
    }
    return axios.get(url);
  }

  public static postSummary(reasonId: string, selections: any[]) {
    return axios.post('/summary', {
      reason: reasonId,
      selections,
    });
  }
}
