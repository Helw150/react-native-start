import NavigationContainer from '/src/navigation/NavigationContainer';

export default (state, action) => NavigationContainer.router.getStateForAction(action, state);
