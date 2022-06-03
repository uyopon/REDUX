import React from "react";
import Post from "./post";

export default ({posts}) => {
    if (!posts.length) {
        return <button className= "btn btn-primary">загрузить</button>
    }
    return posts.map(post => <Post post={post} key={post} />) // ТЕГИ КОМПОНЕНТ ALWAYS WITH ЗАГЛАВНОЙ БУКВЫ
}