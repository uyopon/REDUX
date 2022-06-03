import post from "./post";


import React from "react";
export default ({posts})=>{
return posts.map(post => <post post = {post}/>)
}