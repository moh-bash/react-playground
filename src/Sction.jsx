import { Posts } from "./Posts"
import { Saidbar } from "./Saidbar"
import './App.css'
export function Sction () {
    return (
        <div className="Sction">
            <div className="conposts">
            <Posts title="Post 1" description="Description for Post 1" />
            <Posts title="Post 2" description="Description for Post 2" />
            <Posts title="Post 3" description="Description for Post 3" />
            </div>
            <Saidbar />
        </div>
    )
}