import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { connect } from 'dva';

// create observerpp
const App = observer(({ appState }) => {
    return (
        <div className="App">
            <h1>Time passed
: {appState.timer}</h1>
            <button onClick={appState.resetTimer}>reset timer</button>
        </div>
    );
});

class Test1 extends React.Component {
    state = {
        appState: observable({ timer: 0 })
    }
    componentDidMount() {

        // define action
        setInterval(
            action(() => {
                this.state.appState.timer += 1;
                this.setState({
                    appState: this.state.appState
                })
            }),
            1000
        );

        this.state.appState.resetTimer = action(() => {
            this.state.appState.timer = 0;
            this.setState({
                appState: this.state.appState
            })
        });
    }
    render() {
        return (
            this.state.appState && <App appState={this.state.appState} />
        )
    }
}

export default connect()(Test1);