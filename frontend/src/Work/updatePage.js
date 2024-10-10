import { useEffect, useState } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import './insert.css'

function Updatedata() {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:3005/Product/${id}`)
      .then((res) => res.json())
      .then((res)=>setData(res))
  },[id])
  return <>
    <div className="form-container">
        <h2>New Food Item</h2>
        <label htmlFor="food-name" >ProductName:</label>
        <input type="text" 
        value={data.ProductName}
        onChange={(e) => {
          setData({ ...data, ProductName: e.target.value })
        }}
        id="food-name" name="food-name" required />

        <label htmlFor="food-image">ProductImg:</label>
        <input type="text" 
          value={data.ProductImg}
          onChange={(e) => {
            setData({ ...data, ProductImg: e.target.value })
          }} 
        id="food-image" name="food-image" accept="image/*" required />


        <label htmlFor="food-id">ID :</label>
        <input type="number" 
          value={data.id}
          onChange={(e) => {
            setData({ ...data, id: e.target.value })
          }} 
        id="food-id" name="food-id" required />

        <label htmlFor="food-id">ExpireDate:</label>
        <input type="text" 
          value={data.ExpireDate}
          onChange={(e) => {
            setData({ ...data, ExpireDate: e.target.value })
          }}
          id="food-id" name="food-id" required />

        <label htmlFor="price">Price:</label>
        <input type="number" 
        value={data.Price}
        onChange={(e) => {
          setData({ ...data, Price: e.target.value })
        }}
        id="price" name="price" required />

        <label htmlFor="food-id">Rating:</label>
        <input type="text" 
        value={data.Rating}
        onChange={(e) => {
          setData({ ...data, Rating: e.target.value })
        }}
        id="food-id" name="food-id" required />

        <label htmlFor="food-detail">More_details:</label>
        <textarea id="food-detail" 
        value={data.More_details}
        onChange={(e) => {
          setData({ ...data, More_details: e.target.value })
        }}
        name="food-detail" rows="4" required></textarea>

        <div className="submit-style row mt-2" >
          <button type="submit" className='btn btn-outline-success submit-style-update col-6  '
          onClick={() => {

            fetch("http://localhost:3005/Product/"+id,
              {
                method:"PATCH",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json"
                } 
              })
              .then((res)=> res.json())
              .then(() => navigate("/getAll"))
            }}>Submit</button>
            <button className="btn btn-outline-danger col-6 submit-style-update" onClick={() => {
              fetch("http://localhost:3005/Product/" + id, { method: 'DELETE' })
                  .then((res)=>{navigate("/getAll")});
              }}>Delete
            </button>
        </div>
              
      </div>
  </>
  }
export default Updatedata