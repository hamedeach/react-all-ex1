import React, { Component } from "react";
import propTypes from "prop-types";

class AddNewUser extends Component {
  
    static propTypes = {
        users: propTypes.array.isRequired,
        adduserfunc: propTypes.func.isRequired,
    }


    state = {
        firstname: '',
        lastname: '',
        username: '',
        isexist: false,
    }

    handleFirstNameChange = event => {
        this.setState({ firstname: event.target.value });
    };

    handleLastNameChange = event => {
        this.setState({ lastname: event.target.value });
    };

    handleUserNameChange = event => {
        this.setState({ username: event.target.value });
    };

    inputIsEmpty = () => {
        return (this.state.firstname === '' || this.state.lastname === '' || this.state.username === '') ? true : false;
    };

    addevent = event => {
        event.preventDefault();
        const isexit = this.checkIFExits(this.props.users);
        this.setState(() => ({
            isexist: isexit
        }))
        alert(isexit);
        if (isexit) return;
        this.props.adduserfunc(
            {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                username: this.state.username,
            });





    };

    checkIFExits(userslist) {
        let exist = false;
        userslist.filter((user) => { (user.username.toLowerCase() === this.state.username.toLowerCase()) ? exist = true : exist = false });
        return exist;
    }

    render() {
        return (
            <div>
                {
                    this.state.isexist && (
                        <h2 className="error">Error this user is existing </h2>
                    )
                }

                <form onSubmit={this.addevent}>
                    <input
                        type="text"
                        placeholder="first name"
                        value={this.state.firstname}
                        onChange={this.handleFirstNameChange}

                    />
                    <input
                        type="text"
                        placeholder="last name"
                        value={this.state.lastname}
                        onChange={this.handleLastNameChange}

                    />
                    <input
                        type="text"
                        placeholder="user name"
                        value={this.state.username}
                        onChange={this.handleUserNameChange}

                    />
                    <button disabled={this.inputIsEmpty()}>Add</button>
                </form>
            </div>
        );
    }


}
export default AddNewUser;