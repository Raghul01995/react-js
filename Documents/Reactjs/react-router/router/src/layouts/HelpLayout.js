import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
        <h2>Website Help</h2>
        <p>Est dolore aliqua deserunt magna aute magna fugiat officia incididunt.
        </p>
        <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact</NavLink>
        </nav>
            
        <Outlet/>
    </div>
  )
}
