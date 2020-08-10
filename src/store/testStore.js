import { observable, computed, runInAction, action } from 'mobx'
import { CommonStore } from "./commonStore";
//
class TestStore extends CommonStore {
    @observable num = 1;
    serInitData = async () => {
        try {
            // 网络请求
            const data = [
                { id: 1, name: '1' },
                { id: 2, name: '2' },
                { id: 3, name: '3' },
                { id: 4, name: '4' },
            ]
            runInAction("serInitData", () => {
                this.todoList = data || [];
            });
        } catch (error) {
            console.error(error);
        } finally {
        }
    };
    @action.bound
    addNum() {
        this.num+=1
    }
    @computed get getValue() {
        return this.num * 10;
    }
}
const testStore = new TestStore();
export default testStore;