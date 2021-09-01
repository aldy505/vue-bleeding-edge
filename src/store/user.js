import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    data: {},
  }),
  actions: {
    async login() {
      this.token = 'random non-secure token';
    },
  },
});
