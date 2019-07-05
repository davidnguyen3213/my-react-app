import React from "react";

class User extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <p>User Name: {this.props.username}</p>
                </div>
            </div>
        )
    }
}
export default User;