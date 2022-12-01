import React from "react";

class classCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render(){
        return(
            <div className='classCounter'>
            <h3> {this.state.count}</h3>  
        <button onClick={() => this.setState({count: this.state.count + 1})}> bam toi</button>
        </div>
        )
    }
}
export default classCounter;