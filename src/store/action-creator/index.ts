import * as UserActionCreator from './user';
import * as TodoActionCreator from './todo';


export const ActionCreators = {
    ...UserActionCreator,
    ...TodoActionCreator
}
