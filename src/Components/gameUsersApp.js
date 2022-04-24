import React, { Component } from "react";
import UsersList from "./usersList";
import AddNewUser from './addNewUser';

class GameUsersApp extends Component {
    constructor(props) {
        super(props);


    }

    state = {
        userlist: [
            {
                firstname: 'Seif',
                lastname: 'Hamed',
                username: 'heroSeif',
            }

        ],

        usersprofile: [
            {
                username: 'heroSeif',
                playedgames: 0
            }
        ],
    }





    handleadduser = (user) => {
        alert(user);
        this.setState(prevState =>
            ({ userlist: [...prevState.userlist, user] }));
        // update user profile
        this.setState(prevState => (
            {
                usersprofile: [...prevState.usersprofile,
                {
                    username: user.username,
                    playedgames: 0
                }]
            }));
    }

    render() {
        return (
            <div>
                <AddNewUser users={this.state.userlist} adduserfunc={this.handleadduser} />
                <UsersList users={this.state.userlist} userprofile={this.state.usersprofile}></UsersList>
            </div>
        )
    }


}
export default GameUsersApp;

