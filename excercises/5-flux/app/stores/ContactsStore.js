import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import { ActionTypes } from '../Constants';

let events = new EventEmitter();
const CHANGE_EVENT = 'CHANGE';

let state = {
  contacts: [],
  loaded: false
};

let setState = (newState) => {
  Object.assign(state, newState);
  events.emit(CHANGE_EVENT);
};

let ContactsStore = {
  addChangeListener (fn) {
    events.addListener(CHANGE_EVENT, fn);
  },

  removeChangeListener (fn) {
    events.removeListener(CHANGE_EVENT, fn);
  },

  getState () {
    return state;
  }
};

ContactsStore.dispatchToken = AppDispatcher.register((payload) => {
  var { action } = payload;
  console.log(action.type);
  if (action.type === ActionTypes.CONTACTS_LOADED) {
    setState({
      loaded: true,
      contacts: action.contacts
    });
  }
});

export default ContactsStore;

