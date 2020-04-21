import React from "react";
import { List, Card, Button, Modal, Input, message} from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';

class Profile extends React.Component {
    state = {
        name: '',
        company_name: '',
        email: '',
        phone: '',
        data: [{
            name: 'Card Test',
            company_name: 'Company Test',
            email_adress: 'Mail test',
            phone_number: 'Number test'
        }]
    }

    showModal = () => {
    this.setState({
        visible: true,
    });
    };

    handleOk = e => {
        if (this.state.email === '' || this.state.email === null){
            message.error('Please enter a valid email') 
            return;
        }
        const item = {
            name: this.state.name,
            company_name: this.state.company_name,
            email_adress: this.state.email,
            phone_number: this.state.phone            
        }
        this.setState({
        visible: false,
        data: [...this.state.data, item]
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
        visible: false,
        });
    };    

    handleChange = e => {
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })
    };

	render() {		
		return (
			<div>
                <h1>Profile</h1>
                <br/>
                <Card title={this.props.username}>
                    <p><b>Company name: </b>{this.props.company_name}</p>
                    <p><b>Email adress: </b>{this.props.email}</p>
                    <p><b>Phone number: </b>{this.props.phone}</p>
                </Card>
                <br />
                <Button type="primary"  prefix={<PlusSquareOutlined />} onClick={this.showModal}>
                    Add card
                </Button>                  
                <br/><br/>
                <h1>Library</h1>
                <List
                    grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                    }}
                    dataSource={this.state.data}
                    renderItem={(item, key) => (
                    <List.Item key={key}>
                        <Card title={item.name}>
                            <p>Company name: {item.company_name}</p>
                            <p>Email adress: {item.email_adress}</p>
                            <p>Phone number: {item.phone_number}</p>
                        </Card>
                    </List.Item>
                    )}
                />                
                <Modal
                    title="Add card"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    okText="Add"
                    onCancel={this.handleCancel}
                >
                    <Input name="name" placeholder="Name" onChange={this.handleChange} />
                    <Input name="company_name" placeholder="Company name" onChange={this.handleChange} />
                    <Input name="email" placeholder="Email adress" onChange={this.handleChange} />
                    <Input name="phone" placeholder="Phone number" onChange={this.handleChange} />                   
                </Modal>
			</div>            
		)
	}
}

export default Profile;