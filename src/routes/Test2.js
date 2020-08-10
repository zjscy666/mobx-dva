import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { connect } from 'dva';
// 装饰器
// create State object
let appState = observable({ timer: 0 });

// define action
setInterval(
    action(() => {
        appState.timer += 1;
    }),
    1000
);

appState.resetTimer = action(() => {
    appState.timer = 0;
});

// create observerpp
const App = observer(({ appState, back }) => {
    return (
        <div className="App">
            <button onClick={back}>back test1</button>
            <h1>Time passed
: {appState.timer}</h1>
            <button onClick={appState.resetTimer}>reset timer</button>
        </div>
    );
});

class Test1 extends React.Component {
    back = () => {
        const {
            history
        } = this.props;
        history.push('/test1')
    }
    render() {
        return(
            <App appState={appState} back={this.back}/>
        )
    }
}

export default connect()(Test1);