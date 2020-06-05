import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import Search from './components/Search';
import TodayFood from './components/TodayFood';


class App extends Component {
  
  state = {
    foods : foodsJson,
    showAddForm: false,
    searchCriteria:'',
    todayFood:[]
  }
  
  addTodayFood = (food) => {
    const todayFood = [...todayFood, food]
    this.setState({
      todayFood
    })
    console.log('this.state.todayFood', this.state.todayFood)
  }
  
  setSearchCriteria = (searchCriteria) => {
    this.setState({
      searchCriteria:searchCriteria
    })
  }
  
  addFood = (food) => {
    const foods = [...this.state.foods, food];
    this.setState({
      foods
    })
  }

  displayAddForm = () => {
    const showAddForm = !this.state.showAddForm;
    this.setState({
      showAddForm
    })
  }

  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
        </header>
        
        <button onClick={this.displayAddForm}>Add Food</button>
        {
          this.state.showAddForm ? (<AddForm addFood={this.addFood} displayAddForm={this.displayAddForm}/>) : (null)
        }
        
        
        <Search setSearchCriteria={this.setSearchCriteria}/>

          <div className="columns">
            <div className="column">
            <FoodBox foodList={this.state.foods} searchCriteria={this.state.searchCriteria} addTodayFood={this.addTodayFood}/>
            </div>
            
            <div className="column">
              <TodayFood />
            </div>
          </div>
      
      </div>
    );
  }
}

export default App;
