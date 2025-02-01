import { Client, Account, ID } from "appwrite";
import Config from "../config/Config";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(Config.appwriteUrl)
      .setProject(Config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("appwrite Service :: create account:: error", error);
    }
  }

  async login({ email, password }) {
    try {
      const res = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return res;
    } catch (error) {
      console.log("appwrite Service :: login account:: error", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite Service :: get user :: error", error);
    }
  }

  async logOut() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("appwrite Service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();
export default authService;
