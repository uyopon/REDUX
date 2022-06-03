import Post from "./post";


import React from "react";
export default ({ posts }) => {
    

    if(!posts.length){
        return <p className="text-center">постов пока нету</p>
    }
    return posts.map(post => <Post post={post} key={post} />) // ТЕГИ КОМПОНЕНТ ALWAYS WITH ЗАГЛАВНОЙ БУКВЫ
}