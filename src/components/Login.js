import React from "react";
import { Input,Button, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Profile from './Profile';

class Login extends React.Component {
    state = {
        username: '',
        company_name: '',
        email: '',
        phone: '',
        password: '',
        login: false
    }

    handleChange = e => {
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    login = () => {
        const re = /^[0-9\b]+$/;

        if (this.state.username === '' || this.state.username === null)
            message.error('Please enter a valid username')          
        else if (re.test(this.state.phone) === false && this.state.phone !== '') 
            message.error('A phone number can only contain numbers')       
        else if (this.state.password !== "Epitech")
            message.info('The password is Epitech')          
        else 
            this.setState({login: true})        
    }

    logout = () => {
        console.log("check")
        this.setState({
            login: false,
            company_name: '',
            email: '',
            phone: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                {!this.state.login && <div>
                <h1>Create Profile</h1>
                <Input name="username" placeholder="Username" value={this.state.username} prefix={<UserOutlined />} onChange={this.handleChange} /><br /><br />
                <Input name="company_name" placeholder="Company name" onChange={this.handleChange} /><br /><br />
                <Input name="email" placeholder="Email adress" onChange={this.handleChange} /><br /><br />
                <Input name="phone" placeholder="Phone number" onChange={this.handleChange} /><br /><br /> 
                <Input.Password name="password" placeholder="Password" onChange={this.handleChange} /><br /><br />
                <Button type="primary" onClick={this.login}>Connexion</Button> 
                </div>}
                {this.state.login && <Profile username={this.state.username} email={this.state.email} phone={this.state.phone} company_name={this.state.company_name} logout={this.logout}/>}
            </div>
        )
    }
}

export default Login;