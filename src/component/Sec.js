import React, { Component } from 'react';
class Sec extends Component{
    constructor(){
        super()
        this.state={
            isClicked:0,
            day : new Date().toLocaleTimeString(),
            nom : ""
        }
        this.click=this.click.bind(this)
        this.reset=this.reset.bind(this)
        this.today=this.today.bind(this)
        this.submitForm=this.submitForm.bind(this)
        this.changeForm=this.changeForm.bind(this)


    }
click(){
this.setState( prevState =>({
     isClicked : prevState.isClicked + 1 
   }))
       }
reset(){
    this.setState({
        isClicked : 0 
       })
}
today(){
    this.setState({
        day : new Date().toLocaleTimeString()
       })
}
changeForm(event){
    this.setState({
        nom : event.target.value
       })
}
submitForm(){
    alert(this.state.nom)

}
render(){
    return(
        <div>
    <button onClick={this.click} >add One</button>
    <button onClick={this.reset} >Reset</button>
    <button onClick={this.today} >date</button>

    <br/>
    {this.state.isClicked}
    <br/>
    {this.state.day}

    <form onSubmit={this.submitForm}>
        <input type="text" name="nom" 
        onChange={this.changeForm} autoComplete="off"/>
        <input type="submit" value="valider" />
    </form>
    {this.state.nom}

        </div> 
    );
   
    }

}
export default Sec;