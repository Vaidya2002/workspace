import conf  from "../conf/conf";
import {Client, Account, ID} from 'appwrite'

export class AuthServie {
    client = new Client();
    account;

    constructor()  {
        this.Client
            .setEndpoint(conf.aappwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccoutn({email, password, name}) {
        try {
        const userAccount = await this.account.create(ID.unique(), email, password, name);
        if (userAccount) {

        } else {
            return userAccount;
        }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try{
         return   await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error.Account
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error" , error)
        }

        return null;
    }


    async logout() {
        try {
            await this.account.deleteSession
        } catch (error) {
            console.log("Appwrite serive :: logut :: error", error);
        }
    }

}

const authService = new AuthServie();

export default authService