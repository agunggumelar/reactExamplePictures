import React from 'react';

class SearchBar extends React.Component{
    state = { terms: ''};
   
    onInputChange(event){
        console.log(event.target.value);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.terms);
    }
    
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type='text' 
                            value={this.state.terms}
                            onChange={e => this.setState({terms: e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;