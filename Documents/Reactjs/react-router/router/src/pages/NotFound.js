import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2> page not found</h2>
      <p>Go back to home page 
        <Link to="/">Homepage</Link>
        </p>
    </div>
  )
}
