import Post from "./post";


import React from "react";
export default ({ posts }) => {
    // console.log(posts)  МАССИВ ПРИШЕЛ
    return posts.map(post => <Post post={post} id={post} />) // ТЕГИ КОМПОНЕНТ ALWAYS WITH ЗАГЛАВНОЙ БУКВЫ
}