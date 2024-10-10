import { useEffect, useState } from "react";
import { useNavigate,useParams,Link } from "react-router-dom";
import './getId.css'

function GetById(){
    const params = useParams()
    const [project,setStudent]=useState({})
    useEffect(() => {
        fetch("http://localhost:3005/Product/"+params.id).
            then(res => res.json()).
            then(res => setStudent (res))
    }
    , [])
    const naviget=useNavigate();
    return (
        <>
            <div className="row pt-3">
                <div className="col-4"></div>
                <div className=" getbyid-main col-4" > 
                    <div className="getbyid-card">
                        <div className="getbyid-con">
                            <img src={project.ProductImg} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{project.ProductName}</h5>
                            <h5 className="card-title">Price : ₹ {project.Price}</h5>
                            <h6 className="card-title">ExpireDate : {project.ExpireDate}</h6>
                            <h6 className="card-title">Rating : {project.Rating}</h6>
                            
                            <div className="discription p-3">
                                <p>
                                    {project.More_details}
                                </p>
                            </div>
                             <div className="row ps-5 pe-5 pb-3">
                                <button className="btn btn-outline-primary col-5 ms-4 " onClick={()=>{naviget('/getAll')}}>Back</button>
                                <Link className="btn btn-outline-warning  col-5 ms-4" to={'/getAll/update/'+project.id}>Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GetById
