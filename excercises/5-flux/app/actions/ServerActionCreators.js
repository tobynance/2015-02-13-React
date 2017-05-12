import { ActionTypes } from '../Constants';
import AppDispatcher from '../AppDispatcher';

const ServerActionCreators = {
  loadedContacts (contacts) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.CONTACTS_LOADED,
      contacts: contacts
    });
  }
};

export default ServerActionCreators;
