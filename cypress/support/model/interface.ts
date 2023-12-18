import { GetPostsAPIData } from "../data-provider/jsonplaceholder-get-posts-data-provider";
import { GetPostsAPIResponse } from "./jsonplaceholder-get-posts-response.model";

export interface GetPostsAPIUtil {
    validateJsonplaceholderGetPostsAPIResponse(data: GetPostsAPIData):void;
    getPostAPI(data: GetPostsAPIData): Cypress.Chainable<Cypress.Response<GetPostsAPIResponse>>;
    
}