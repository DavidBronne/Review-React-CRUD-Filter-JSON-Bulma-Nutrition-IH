import React , {Component} from 'react';


 
class FoodBox extends Component {

    state = {
        name: '',
        calories: '',
        quantity: ''
    }
    
    handleChange = (e) => {
        console.log('e.target.value', e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleClick = ( name, calories) => {
console.log('name, calories', name, calories)
        this.setState({
            name: name,
            calories: calories
        })
        this.props.addTodayFood(this.state)
        console.log('this.state', this.state)
    }


    render () {
        
        const {foodList, searchCriteria} = this.props; 

        const correctedSearchCriteria = searchCriteria.toLowerCase();
        
        const Searchedfoods = foodList.filter( food => {
            const correctedFoodName = food.name.toLowerCase()
            return correctedFoodName.includes(correctedSearchCriteria)
        })
        
        const foodTemplate = Searchedfoods.map( food => {   
            return (
            <article className="media" key={Math.random()} >
                    
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={food.image} alt='Pic'/>
                        </figure>
                    </div>

                    <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{food.name}</strong> <br />
                            <small>{food.calories}</small>
                            </p>
                        </div>
                    </div>
                    
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number" 
                                    name="quantity"
                                    onChange={(e)=>{this.handleChange(e)}}
                                    // value={this.state.quantity}
                                    // name='quantity',food.quantity
                                    // value='1'
                                />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={() => {this.handleClick(food.name, food.calories)}}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            )
        })
        
        return (
            <div className="box">
                {foodTemplate}
            </div>
        )
    }
}

export default FoodBox;