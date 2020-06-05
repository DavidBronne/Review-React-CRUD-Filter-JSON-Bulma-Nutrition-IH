import React, {Component} from 'react'

class Search extends Component {
    state = {
        criteria:''
    }

    handleChange = (e) => {
        this.setState({
            criteria:e.target.value
        })
        this.props.setSearchCriteria(this.state.criteria)
    }



    render () {
        

        return (
            
            <div >
                <input type='text' onChange={this.handleChange} value={this.state.criteria}></input>
            </div>
        )
    }

}

export default Search;