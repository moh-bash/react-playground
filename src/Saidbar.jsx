import './App.css'
import { Button } from './Button'
export function Saidbar() {
    return (
        <div className="saidbar box">
            <Button text="Button 1">
                <p>😍😍😍</p>
            </Button>
            <Button text="Button 2">
                <img src="https://cdn.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc-1256-80.jpg.webp" alt="icon" width={70} />
            </Button>
            <Button text="Button 3"></Button>
            <Button text="Button 4"></Button>
        </div>
    )
}


