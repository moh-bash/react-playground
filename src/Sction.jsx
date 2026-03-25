import { Posts } from "./Posts"
import { Saidbar } from "./Saidbar"
import './App.css'
export function Sction () {
    return (
        <div className="Sction">
            <div className="conposts">
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            </div>
            <Saidbar />
        </div>
    )
}