import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory({
    forceRefresh: false
});

export default (store) => (next) => (action) => {
    if (action.type === 'AUTH_FAIL') {
       history.push('/')
    }
   next(action)
};