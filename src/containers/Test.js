import React from 'react';
import {connect} from 'react-redux';
import Main from './components/Main';
import User from './components/User';
import { setName, setAge } from './actions/userActions'
export class Test extends React.Component{
    render(){
        return (
            <div className = "container">
                <Main changeUsername={(name) => this.props.setName(name)} />
                <User username = {this.props.user}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.name,
        math: state.math
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name)=>{
            dispatch(setName(name))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);