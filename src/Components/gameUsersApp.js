import React,{Component} from "react";
import UsersList from "./usersList";
import AddNewUser from './addNewUser';

class GameUsersApp extends Component{
    constructor(props){
        super(props);
        

    }

    state={
       userlist : [
           {firstname:'Seif',
           lastname:'Hamed',
           username:'heroSeif',
        }
        
        ],
    }


    handleadduser =(user)=>{
        alert(user);
        this.setState(prevState => 
            ({ userlist: [...prevState.userlist,user] }));
    }

    render(){
        return(
            <div>
                <AddNewUser users={this.state.userlist} adduserfunc={this.handleadduser}/>
                <UsersList users={this.state.userlist}></UsersList>
            </div>
        )
    }
    

}
export default GameUsersApp;

