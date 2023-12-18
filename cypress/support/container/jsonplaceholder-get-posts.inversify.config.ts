import { Container } from "inversify";
import { GetPostAPI } from "../domain/jsonplaceholder-get-posts-api";
import { GetPostsAPIUtil } from "../model/interface";
import { GETPOSTS } from "./jsonplaceholder-get-posts.symbol";


export const getPostsContainer = new Container();

getPostsContainer.bind<GetPostsAPIUtil>(GETPOSTS.GetPostsAPIUtil).to(GetPostAPI);