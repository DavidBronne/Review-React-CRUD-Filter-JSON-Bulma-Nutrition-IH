import React, {Component} from 'react';

class AddForm extends Component {
    state = {
        name: '',
        calories: '',
        image: '',
        quantity: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFood(this.state);
        this.props.displayAddForm();
        this.setState({
            name: '',
            calories: '',
            image: '',
            quantity: ''
        })
    }
    
    render() {
        return (

            

            <form onSubmit={this.handleSubmit}>
                <label>name</label>
                <input type='text' name='name' onChange={this.handleChange} value={this.state.name}></input>
                <label>calories</label>
                <input type='number'  name='calories'  onChange={this.handleChange} value={this.state.calories}></input>
                {/* Upload File ?? */}
                <label>image</label>
                <input type='text'  name='image'  onChange={this.handleChange} value={this.state.image}></input>
                <label>quantity</label>
                <input type='number'  name='quantity'  onChange={this.handleChange} value={this.state.quantity}></input>
                <button>submit</button>
            </form>
        )
    }
}

export default AddForm;