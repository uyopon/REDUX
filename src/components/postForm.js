import React from "react";

export default class PostForm extends React.Component {


    constructor(props) {
        super(props)
        this.state = {} //Ключевое слово super используется для доступа и вызова функций родителя объекта.

    }
    submitHundler = event =>{
        event.preventDefault()
    }


    render() {
        return (

            <form onSubmit= {this.submitHundler}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword 1">Password</label>
                    <input type= 'password' className="form-control" id="exampleInputPassword1"></input>

                </div>
            </form>



        )
    }

}