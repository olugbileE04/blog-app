
import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Posts from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import "./home.css"


export default function Home() {
  const[posts, setPosts] =useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('Before fetch');
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        console.log('After fetch');
        const data = await response.json();
  
        console.log('Data:', data);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
  
    console.log('Before calling fetchPosts');
    fetchPosts();
    console.log('After calling fetchPosts');
  }, []);
  


  return (
    <>
    <Header />
    <div className="home">
       <Posts  post={posts}/>
       <Sidebar/>
    </div>
    </>
  )
}
