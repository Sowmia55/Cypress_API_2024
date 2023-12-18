import { container } from "../../support/container/inversify.config";
import { GETPOSTS } from "../../support/container/jsonplaceholder-get-posts.symbol";
import { GetPostsAPIUtil } from "../../support/model/interface";
import { testData } from "../../support/data-provider/jsonplaceholder-get-posts-data-registry";

describe('Validate get posts api response', ()=>{
    let getPostsAPIUtil: GetPostsAPIUtil;
    before(()=>{
        getPostsAPIUtil = container.get(GETPOSTS.GetPostsAPIUtil);
    })
    it('verification', ()=>{
        getPostsAPIUtil.validateJsonplaceholderGetPostsAPIResponse(testData);
    })
})
