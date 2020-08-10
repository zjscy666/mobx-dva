import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { connect } from 'dva';

// create observerpp
// test1.0

const App = ({ appState, back }) => {
    return (
        <div className="App">
            <button onClick={back}>back test2</button>
            <h1>Time passed
: {appState.timer}</h1>
            <button onClick={appState.resetTimer}>reset timer</button>
        </div>
    );
};

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
    back = () => {
        const {
            history
        } = this.props;
        history.push('/test2')
    }
    render() {
        return (
            this.state.appState && <App appState={this.state.appState} back={this.back} />
        )
    }
}

// test 1.1

// const App = observer(({ appState, back }) => {
//     return (
//         <div className="App">
//             <button onClick={back}>back test2</button>
//             <h1>Time passed
// : {appState.timer}</h1>
//             <button onClick={appState.resetTimer}>reset timer</button>
//         </div>
//     );
// });

// const appState = observable({ timer: 0 })
// setInterval(
//     action(() => {
//         appState.timer += 1;
//     }),
//     5000
// );

// appState.resetTimer = action(() => {
//     appState.timer = 0;
// });

// class Test1 extends React.Component {
//     back = () => {
//         const {
//             history
//         } = this.props;
//         history.push('/test2')
//     }
//     render() {
//         return (
//             <App appState={appState} back={this.back} />
//         )
//     }
// }

export default connect()(Test1);