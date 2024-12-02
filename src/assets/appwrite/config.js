import conf from '../../conf/conf'

import { Client, ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client =new Client()
    databases
    bucket 

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.databases=new Databases(this.lient)
        this.bucket=new Storage(this.client)

    }

    async createPost({slug,title,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,content,featuredImage,status,userId
                }
            )
        }catch(error){
            console.log('config error::createPost:error:',error)
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,content,featuredImage,status
                }
            )
        }catch(error){
            console.log('config error::updatePost:error:',error)
        }
    }

    async deletePost(slug){
        try{
           return await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
           )
        }catch(error){
            console.log('config error::deletePost:error:',error)
        }
    }
    
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug            )

        }catch(error){
            console.log('config error::getPost:error:',error)
            return false;
        }

    }

    async getPosts(queries=[Query.equal('status','active')]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries

            )

        }catch(error){
            console.log('config error::getPosts:error:',error)
            return false;
        }
    }

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file

            )

        }catch(error){
            console.log('config error::uploadfile:error:',error)
        }
    }

    async deleteFile(fileId){
        try{
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId)
                return true;
        }catch(error){
            console.log('config error::deleteFile:error:',error)
            return false;
        }
    }

    getfilePreview(fileId){
        try{
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId,
            )

        }catch(error){
            console.log('config error::filePreview:error:',error)
            return false;
        }
    }

}
const service =new Service()
export  default service 