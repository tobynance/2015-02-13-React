import { ActionTypes } from '../Constants';
import AppDispatcher from '../AppDispatcher';
import ApiUtil from '../utils/ApiUtil';

const ViewActionCreators = {
  loadContacts () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_CONTACTS
    });
    ApiUtil.loadContacts();
  }
};
export default ViewActionCreators;

