import React from "react";

class Main extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <p>The main page</p>
                    <button onClick = {()=> this.props.changeUsername('Anna')}> Change the user name</button>
                </div>
            </div>
        )
    }
}
export default Main;