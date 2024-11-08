import { useContext } from "react";
import './MenuCard.scss'
import MenuIcon from "../assets/images/image-jeremy.png";
import { TimeStampContext } from "../context/TimeStampContext";
const MenuCard = () => {
  const { type, changeState } = useContext(TimeStampContext);
  return (
    <section className="menu-card">
      <article>
        <img src={MenuIcon} alt="menu-icon"/>
        <div>
          <p>Report for</p>
          <header>Jeremy Robson</header>
        </div>
      </article>
      <ul>
        <li><button type="button" onClick={() => changeState("daily")} data-selected={type === "daily"}>Daily</button></li>
        <li><button type="button" onClick={() => changeState("weekly")} data-selected={type === "weekly"}>Weekly</button></li>
        <li><button type="button" onClick={() => changeState("monthly")} data-selected={type === "monthly"}>Monthly</button></li>
      </ul>
    </section>
  )
}

export default MenuCard