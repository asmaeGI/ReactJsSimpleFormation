import React ,{Component} from 'react'

class PageTwo extends Component{
    render(){
    return (
        <div className="Two">
        <div>{!this.props.isClicked && <h1>this is on</h1>}</div>       
        <div>{this.props.isClicked && <button onClick={this.props.onClick}>Off</button>}</div>
        </div>
    )
     }
}

export default PageTwo