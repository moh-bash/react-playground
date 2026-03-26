import "./App.css";
import { Button } from "./Button";
export function Saidbar() {
  const buttonData = [
    { id: "1", text: "Button 1", c: <p>😍😍😍 </p> },
    {
      id: "2",
      text: "Button 2",
      c: (
        <img
          src="https://cdn.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc-1256-80.jpg.webp"
          alt="icon"
          width={70}
        />
      ),
    },
    { id: "3", text: "Button 3", c: <p>😍😍😍 </p> },
    { id: "4", text: "Button 4", c: <p>😍😍😍 </p> },
  ];
  const buttonList = buttonData.map((button) => (
    <Button key={button.id} text={button.text}>
      {button.c}
    </Button>
  ));
  return (
    <div className="saidbar box">
      {buttonList}
    </div>
  );
}
