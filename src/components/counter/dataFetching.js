import React, {useState, useEffect} from 'react'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idOnButtonClick, setIdOnButtonClick] = useState(0)


    const fetchPostById = () => {
        setIdOnButtonClick(id)
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
                .then(json => {
                    console.log(json)
                    setPost(json)
                })
    },[idOnButtonClick])

    return (
        <div>
            <h2>Posts </h2>
            <input value={id} onChange={e => setId(e.target.value)} />
                <button onClick={fetchPostById}>Fetch post by {id}</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts && posts.map(item => {
                        return <li key={item.id}>{item.title}</li>
                    })
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
