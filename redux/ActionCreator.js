import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addNews = (id, name, feed, image) => ({
    type: ActionTypes.ADD_NEWS,
    payload: {
        id: id,
        name: name,
        feed: feed, 
        image: image
    }
});

export const fetchNewsfeed = () => dispatch => {
    dispatch();

    return fetch(baseUrl + 'news')
};