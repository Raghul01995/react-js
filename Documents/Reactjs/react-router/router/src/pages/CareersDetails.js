import { useLoaderData } from "react-router-dom"

export default function CareersDetails() {
   // const {id}= useParams()
    const careers = useLoaderData()
  return (
    <div className="career-details">
      <h2>Career Details for {careers.title}</h2>
      <p>Starting salary: {careers.salary} </p>
      <p>location: {careers.location}</p>
      <p className="details">
        Reprehenderit eiusmod esse elit labore est. Enim reprehenderit et excepteur elit. Est dolor laboris aliquip aute consequat tempor qui excepteur ad.
      </p>
    </div>
  )
}

//loader function
export const careerDetailsLoader = async ({params}) => {
     const {id } = params
     const res = await fetch(`http://localhost:3000/careers/`+ id)

     if (!res.ok) 
     throw Error ('could not find the page')
     return res.json()


} 
