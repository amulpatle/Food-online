import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>Profile class component</h1>
                <h2>Count: {count}</h2>

                <button onClick={() => {
                    this.setState({
                        count: count + 1,
                    });
                }}>
                    Click
                </button>
            </div>
        );
    }
}

export default Profile;
