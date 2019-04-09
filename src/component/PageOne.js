import React ,{Component} from 'react'

class PageOne extends Component{
    render(){
    return (
        <div className="one">
        <div>{this.props.isClicked && <h1>this is off</h1>}</div>       
        <div>{!this.props.isClicked && <button onClick={this.props.onClick}>  On</button>}</div>
        </div>
    )
     }
}
export default PageOne