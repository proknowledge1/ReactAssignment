import DataForAdmission from "./DataForAdmission"

const Admission=({dat})=>{
    return(
       <div className="train-details">
           <h4>Qualification: {dat.qualification}</h4>
           <p><strong>Marks {dat.marks}</strong></p>
       </div>
    )
}
export default Admission