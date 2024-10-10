import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Crud() {
    const [data, setData] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const [counts, setCounts] = useState({});

    useEffect(() => {
        fetch("http://localhost:3005/Product")
            .then(res=> res.json())
            .then(res =>setData(res));
    },[]);

    const navigate = useNavigate();
    const handleAddClick = (index) => {
        setData(prevData => {
            const newData = [...prevData];
            
            newData[index].count = (newData[index].count || 0) + 1;
            return newData;
            
        });
    };
    const handleAddClickMinus = (index) => {
        setData(prevData => {
            const newData = [...prevData];
            if(newData[index].count>0){
            newData[index].count = (newData[index].count || 0) - 1;
            }
            return newData;
            
        });
    };

    const formattedData = data.map((project, index) => {
        return (
            <div className="col-3 mb-4 main" key={project.id}> 
                <div className="card">
                    <div className="con">
                        <img src={project.ProductImg} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{project.ProductName}</h5>
                        <h5 className="card-title">PRICE : ₹ {project.Price}</h5>
                        
                        <div className="row ">
                            <Link to={"/getAll/"+project.id} className="btn btn-outline-primary col-5 me-3 ms-3 mb-2">Read More</Link>
                            <Link className="btn btn-outline-warning mb-2 col-5" to={'/getAll/update/'+project.id}>Edit</Link>
                        </div>
                        <div className="row ">
                            <button className="btn btn-outline-primary col me-3 ms-3" onClick={() => handleAddClick(index)}> + </button>
                            <div className="counter col-4 ">
                                {project.count || 0}
                            </div>
                            <button className="btn btn-outline-primary col me-3 ms-3 " onClick={() => handleAddClickMinus(index)}> - </button>
                        </div> 
                    </div>
                </div>
            </div>
        );
    });

    return (<>
            {/* <button onClick={() => { navigate('/getAll/insert'); }}>Insert</button> */}
            <div className="Heading">
                MY PRODUCT
            </div>
            <div className="container ">
                <div className="row">
                    {formattedData}
                </div>
            </div>
        </>
    );
}

export default Crud;