import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData()
  return (
    <div className="careers">
      {careers.map(career => (
        <Link to={career.id} key={career.id}>
            <p>{career.title}</p>
            <p>Located in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}
//loader function
export const careersLoader = async () =>{
    const res = await fetch(`http://localhost:3000/careers`)

    if (!res.ok) 
     throw Error ('could not find the page')
     return res.json()
}