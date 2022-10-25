import Admission from "./Admission";
import { useState,useEffect } from "react";

const DataForAdmission=()=>{
    const [data,setData]=useState([{
        key:1,
        qualification:"hsc",
        marks:300
    },
    {
        key:2,
        qualification:"ssc",
        marks:230
    },
    {
        key:3,
        qualification:"graduation",
        marks:700
    }
    ])   
        useEffect(()=>{

            const getData=async()=>{
                setData([{
                    key:1,
                    qualification:"hsc",
                    marks:300
                },
                {
                    key:2,
                    qualification:"ssc",
                    marks:230
                },
                {
                    key:3,
                    qualification:"graduation",
                    marks:700
                }
                ]
                );
            }

            
            getData()
        },[]);
    
   
    console.log(data)


    return(
        <div className="admission">
            {data && data.map((dat)=>(
            <Admission key={dat.key} dat={dat}/>
    ))}
        </div>
        

    )
}
export default DataForAdmission;