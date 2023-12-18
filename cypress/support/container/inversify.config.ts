import "reflect-metadata";
import {Container} from 'inversify';
import { getPostsContainer } from './jsonplaceholder-get-posts.inversify.config';

//export const container = Container.merge(getPostsContainer,getPostsContainer);
export const container = getPostsContainer;