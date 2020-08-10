import React, { Component } from 'react';
import {observer} from "mobx-react";
import {observable,action} from "mobx";

class Store {
    id = Math.random();
    @observable title="飞飞";
    @observable finished = false;
    @action cTitle =()=>{
        this.title="麦扣扣"
    }
}

const store = new Store();
 
@observer
class Test3 extends Component {
  render() {
    return (
      <div>
        this is Index
        <p>{store.id}</p>
        <p>{store.title}</p>
        <button onClick={store.cTitle}>测试</button>
      </div>
    );
  }
}
export default Test3;