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
                    <label htmlFor="title">Заголовок поста</label>
                    <input type= 'text' className="form-control mb-2" id="title"/>
                    <button className="btn btn-success " type="submit">CREATE</button>

                </div>
            </form>
        )
    }

}