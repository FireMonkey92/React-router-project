import React from 'react';

const PostsItems = ({match}) =>{
    return (
        <div>{match.params.id}</div>
    )

}

export default PostsItems;