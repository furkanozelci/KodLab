import { defineStore } from "pinia";

interface User {
  id: string;
  isim: string;
  soyisim: string;
  email: string;
}

interface UserState {
  currentUser: User | null;
  users: User[];
}

export const useUserStore = defineStore("userStore", {
  state: (): UserState => ({
    currentUser: null,
    users: [],
  }),
  actions: {
    setCurrentUser(user: User) {
      this.currentUser = user;
    },
    addUser(user: User) {
      this.users.push(user);
    },
    removeUser(userId: string) {
      this.users = this.users.filter((user) => user.id !== userId);
    },
  },
});
