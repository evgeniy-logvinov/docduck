import axios from '@/api/axios';

export default class ApiApplications {
  public static getReasons() {
    // return axios.get('/reasons');
    // TODO: для запросов на сервер
    return axios.get('/reason/all');
  }

  // public static postReasons(reason: any) {
  //     return axios.post('/reason&');
  // }

  public static getSimptoms(reasonId: string) {
    // return axios.get('/simptom');
    return axios.get(`/reason/detail?reason=${reasonId}`);
  }

  public static getQuestion(state: string, reason: string, select: string) {
    // if (state === 'STEP2') {
    //   return axios.get('/question2');
    // }
    // return axios.get('/question');
    let url = `/step/next?reason=${reason}&select=${select}`;
    if (state) {
      url += `&state=${state}`;
    }
    return axios.get(url);
  }

  public static postSummary(reasonId: string, selections: any[]) {
    // return axios.get('/summary');
    return axios.post('/summary', {
      reason: reasonId,
      selections,
    });
  }
}
