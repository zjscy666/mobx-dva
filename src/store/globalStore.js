import { observable, action } from 'mobx';

class GlobalStore {
    @observable gTimer = 0;
    @action.bound
    addGTimer() {
        this.gTimer+=1;
    }
    @action
    resetGTimer() {
        this.gTimer = 0;
    }
}

 const globalStore = new GlobalStore();
 export default globalStore;