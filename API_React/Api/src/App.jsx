import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getPosts } from '.'  
import { useEffect } from 'react'
import PostCard from './Components/PostCaed'


function App() {
  
  const [data , setData] = useState(null);

   useEffect(() => {
   getPosts().then((posts)=>setData(posts))
  },[data]);
  // console.log(data)

  return (
    <>
      {data ? data.map((e) => <PostCard key={e.id} Title={e.Title} body ={e.body} />) : <p>No Data</p>}
    </>
  )
}

export default App
