import { Dispatcher } from 'flux';
import { PayloadSources } from './Constants';

class AppDispatcher extends Dispatcher {
  handleServerAction(action) {
    let payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

  handleViewAction(action) {
    let payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
}
export default new AppDispatcher();
