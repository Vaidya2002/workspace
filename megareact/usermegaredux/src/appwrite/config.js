import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client
    database;
    bucket;
    
    constructor() {
        this.client
          .setEndpoint(conf.aappwriteUrl)
          .setProject(conf.appwriteProjectId);
        this.database =  new Databases(this.client)
        this.bucket =  new Storage(this.client)
    }

    async createpost({title, slug, content, featuredImage, status, useId}){
        try {
          return await this.database.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
              title,
              content,
              featuredImage,
              status,
              useId
            }
          )
        } catch (error) {
          console.log("Appwrite serive :: createpost :: error", error)
        }
    }

    async updatepost(slug,{title, content, featuredImage, status, }){
        try {
          return await this.database.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
              title,
              content,
              featuredImage,
              status,
            }
          )
        } catch (error) {
          console.log("Appwrite serive :: updatepost :: error", error)
        }
    }
  
    async deletepost(slug){
      try {
        await this.database.createDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          slug
        )
        return true
      } catch (error) {
        console.log("Appwrite serive :: deletepost :: error", error);
        return false
      }
    }

    async getPost(slug){
      try {
        return await this.database.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          slug
        )
      } catch (error) {
        console.log("Appwrite serive :: getPost :: error", error)
      }
    }

    async getPost(queries = [Query.equal("status", "active")]) {
      try {
        return await this.database.listDocuments(
           conf.appwriteDatabaseId,
           conf.appwriteCollectionId,
           queries
        )
      } catch (error) {
        console.log("Appwrite serive :: getPosts :: error", error)
      }
    }
    // upload file
    async uploadFile(file ){
      try {
        return await this.database.getDocument(
          conf.appwriteBucketId,
          ID.unique(),
          file
        )
      } catch (error) {
        console.log("Appwrite :: uploadFile :: error", error);
        return false
      }
    }

    getFilePreview(fileId){
      return this.database.getDocument(
        conf.appwriteBucketId,
        fileId
      )
    }
}

const serive = new Service()
export default serive