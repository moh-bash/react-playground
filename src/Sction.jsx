import { Posts } from "./Posts"
import { Saidbar } from "./Saidbar"
import './App.css'
export function Sction () {
    const postsData = [
        { id: "1", title: "Post 1", description: "Description for Post 1" },
        { id: "2", title: "Post 2", description: "Description for Post 2" },
        { id: "3", title: "Post 3", description: "Description for Post 3" },
        { id: "4", title: "Post 3", description: "Description for Post 3" },
        { id: "55", title: "Post 3", description: "Description for Post 3" }
    ];

    const  postList = postsData.map(post => (
        <li key={post.id}>{<Posts title={post.title} description={post.description} />}</li>
    ))
    return (
        <div className="Sction">
            <div className="conposts">
            {postList}
            </div>
            <Saidbar />
        </div>
    )
}