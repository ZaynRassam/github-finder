import React, { Component } from 'react'

export class Search extends Component {


    state = {
        text: ""
    }

    onChange = (e) => {
        this.setState({ text: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.text === "") {
            this.props.setAlert("Please enter something", "light")
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({text: ""});
            this.props.clearAlert()
        }
    }


    render() {

        const { text } = this.state;
        const { showClearButton, clearUsers } = this.props;

        return ( 
        <div>
            <form className='form' onSubmit={this.onSubmit}>
                <input type="text" name="text" placeholder='Search Users' value={text} onChange={this.onChange}/>
                <input type="submit" value="Search" className='btn btn-dark btn-block' />
            </form>
            {showClearButton && <button className='btn btn-light btn-block' onClick={this.props.clearUsers}>Clear</button>}
        </div>
        )
    }
}

export default Search
