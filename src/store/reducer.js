import { combineReducers } from 'redux-immutable';
import { reducer as headerReduce} from '../common/header/store';
import { reducer as homeReduce} from '../pages/home/store';

const reducer = combineReducers({
    header:headerReduce,
    home:homeReduce
});

export default reducer;