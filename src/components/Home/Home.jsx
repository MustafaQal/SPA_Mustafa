import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { resolvePath } from 'react-router-dom';

export default function Home() {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const data = response.data;
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, [])

  if(posts.length <=0){
return <h2>Loading...</h2>
  }
  return (
    <section>
      <div className=' container'>
        <div className=' row'>

          {posts.map((post) => {
            return (
              <div key={post.id} className=' col-md-4'>
                <div className=' card p-3 shadow'>
                  <h4>{post.title}</h4>
                  <h5> {post.body}</h5>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </section>
  )
}