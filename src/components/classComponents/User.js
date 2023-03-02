import  { createRef,Component } from 'react';

class User extends Component {
    state = {
        count: 0,
    };
    divRef = createRef();
    addC = () => {
        this.setState((p) => {
            return { ...p, count: p.count + 1 }
        });
    }
    getRef = () => {
        console.log(this.divRef);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div ref={this.divRef}>{this.state.count}</div>
                <div>{this.props.name}</div>
                <div>{this.props.age}</div>
                <button onClick={this.addC}>点击修改count</button>
                <button onClick={this.getRef}>点击refref</button>
            </div>
        );
    }
}

export default User;