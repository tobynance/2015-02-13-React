import xhr from '../lib/xhr';
import { API, ActionTypes } from '../Constants';
import ServerActionCreators from '../actions/ServerActionCreators';

const ApiUtils = {
  loadContacts () {
    xhr.getJSON(`${API}/contacts`, (err, res) => {
      ServerActionCreators.loadedContacts(res.contacts);
    });
  }
};

export default ApiUtils;

