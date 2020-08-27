import { NEWS } from '../shared/news';
import { TWEETS } from '../shared/tweets';
import * as ActionTypes from './ActionTypes';

export const initialState = {
    news: NEWS,
    tweets: TWEETS,
    password: 'SuperSecretPassword'
}

export const Reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ActionTypes.ADD_NEWS:
            const news = action.payload;
            news.id = news.length
            return {...state.news, news}
        default:
            return state;
    }
    
    
}