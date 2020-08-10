import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import stores from '../store';
const {
    globalStore,
    testStore
} = stores;

// const Item = inject("myStore")(
//     observer(({ myStore, item }) => {
//         return (
//             <div>
//                 {`${item.name}=>${myStore.testStore.num}=>${myStore.globalStore.gTimer}`}
//             </div>
//         )
//     })
// )

@inject("myStore") @observer
class Item extends Component {
    render() {
        const {
            myStore, 
        } = this.props;
        // console.log(myStore)
        return (
            <div>
                {
                    myStore.testStore.todoList.map((item) => (
                        <span>{`${item.name}=>${myStore.testStore.num}=>${myStore.globalStore.gTimer}`}</span>
                    ))
                }
                
            </div>
        )
    }
}

@observer
class Test4 extends Component {
    componentDidMount() {
        // 初始化数据
        testStore.serInitData();
    }
    render() {
        // console.log(globalStore)
        return (
            <div>
                {/* <Provider myStore={{ globalStore, testStore }}>
                    <Item />
                </Provider> */}
                <Item />
                <button onClick={globalStore.addGTimer}>global store gTimer</button>
            <div><button onClick={testStore.addNum}>test store gTimer</button> num more 10 times: {testStore.getValue}</div>
            </div>
        );
    }
}
export default Test4;