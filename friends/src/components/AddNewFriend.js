import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

class AddNewFriend extends React.Component {
    constructor (props){
        super();
        this.state={
            newFriend:{
                id:'',
                name: '',
                age: '',
                email: '',
    
            }
    }
    //props.updateData
    }

    handleChange = e =>{
        this.setState({
            newFriend: {
                ...this.state.newFriend, [e.target.name]: e.target.value
            }
        })
    }

    addFriend = e =>{
        e.preventDefault();
        axiosWithAuth().post('/api/friends', this.state.newFriend)
        .then(res =>{
            console.log('addfriendres', res)
            // setState({
            //     newFriend:{
            //         ...this.state.newFriend
            //     }
            // })
            this.props.updateData(res);
        }).catch(err =>{console.log('You fool! no adding new friends!', err)})
           
        
    }
    render(){
        return(
        <form onSubmit={this.addFriend}>
            <h2>Add a new friend here you lonely bastard!</h2>
            <input
            type="text"
            name="name"
            placeholder="New Friend"
            value={this.state.newFriend.name}
            onChange={this.handleChange}
            />
            <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.newFriend.age}
            onChange={this.handleChange}
            />

            <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.newFriend.email}
            onChange={this.handleChange}
            />
            <button>Abandon all hope of making new real friends, by creating them yourself</button>
            
        </form>
    )//closes return
}//closes render
}//closes component
export default AddNewFriend;