import { Client, Databases, ID, Query, Storage } from "appwrite";
import Config from "../config/Config";

export class PostService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(Config.appwriteUrl)
      .setProject(Config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, content, featureImage, status, userId, slug }) {
    try {
      return await this.databases.createDocument(
        Config.appwriteDatabaseId,
        Config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite Service :: create post :: error", error);
      throw error;
    }
  }

  async UpdatePost(slug, { title, content, featureImage, status }) {
    try {
      return await this.databases.updateDocument(
        Config.appwriteDatabaseId,
        Config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
        }
      );
    } catch (error) {
      console.log("appwrite Service :: update post :: error", error);
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        Config.appwriteDatabaseId,
        Config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("appwrite Service :: delete post :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        Config.appwriteDatabaseId,
        Config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite Service :: getPost :: error", error);
      return false;
    }
  }

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        Config.appwriteDatabaseId,
        Config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("appwrite Service :: get all posts :: error", error);
      return false;
    }
  }

  //   featureImages upload methods

  async uploadFile(file) {
    try {
      await this.storage.createFile(Config.appwriteBucketId, ID.unique(), file);
      return true;
    } catch (error) {
      console.log("appwrite Service :: upload file :: error", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(Config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("appwrite Service :: delete file :: error", error);
      return false;
    }
  }
  getFilePreview(fileId) {
    return this.storage.getFilePreview(Config.appwriteBucketId, fileId);
  }
}

const postService = new PostService();

export default postService;
