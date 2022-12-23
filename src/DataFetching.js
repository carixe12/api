import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    function deleteIclick(idFromButtonClick) {
        fetch(`https://jsonplaceholder.typicode.com/posts${idFromButtonClick}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
            })
        })
    }

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}> Fetch post</button>
            <button onClick={() => deleteIclick(idFromButtonClick)}> Delete</button>
            <div>{post.title}</div>
        </div>
    )

}

export default DataFetching