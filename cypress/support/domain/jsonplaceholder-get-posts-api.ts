import { injectable } from "inversify"
import { GetPostsAPIData } from "../data-provider/jsonplaceholder-get-posts-data-provider"
import { GetPostsAPIUtil } from "../model/interface"
import { GetPostsAPIResponse } from "../model/jsonplaceholder-get-posts-response.model"

@injectable()
export class GetPostAPI implements GetPostsAPIUtil{

validateJsonplaceholderGetPostsAPIResponse(data: GetPostsAPIData):void{
    this.getPostAPI(data).then((response) =>{
        expect (response.isOkStatusCode);
        expect (response.body.id).to.equal(1, 'id');
    })
}

getPostAPI(data: GetPostsAPIData): Cypress.Chainable<Cypress.Response<GetPostsAPIResponse>>{
    return cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
}
}