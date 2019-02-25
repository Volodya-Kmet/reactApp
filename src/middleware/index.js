import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory({
    forceRefresh: false
});

export default (store) => (next) => (action) => {
    if (action.type === 'DELETE_TOKEN') {
       history.push('/')
    }
   next(action)
};