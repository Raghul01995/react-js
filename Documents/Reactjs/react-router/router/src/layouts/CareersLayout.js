import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        <p>Reprehenderit veniam do qui ea enim do eu id mollit ea dolore.</p>
        <Outlet/>
    </div>
  )
}
