import { Component } from "react";

class Resume extends Component{

    render(){

        const {name} = this.props; 

        return <h3>Resume of {name}</h3>
    }
}

export default Resume;