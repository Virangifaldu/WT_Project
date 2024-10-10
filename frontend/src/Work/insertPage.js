import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import './insert.css'

function Insertdata() {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    return <>
      <div className="form-container">
          <h2>New Food Item</h2>
              <label htmlFor="food-name" >ProductName:</label>
              <input type="text" 
              onChange={(e)=>{
                setData({...data,ProductName:e.target.value})
              }} 
              id="food-name" name="food-name" required />              
              <label htmlFor="food-image">ProductImg:</label>
              <input type="text" 
              onChange={(e) => {
                setData({ ...data, ProductImg: e.target.value })
              }} 
              id="food-image" name="food-image" accept="image/*" required />
              <label htmlFor="food-id">Product ID:</label>
              <input type="text" 
              onChange={(e) => {
                setData({ ...data, id: e.target.value })
              }}
              id="food-id" name="food-id" required />
              <label htmlFor="food-id">ExpireDate:</label>
              <input type="text" 
              onChange={(e) => {
                setData({ ...data, ExpireDate: e.target.value })
              }}
              id="food-id" name="food-id" required />
              {/* <div className="row"> */}
                  <label htmlFor="price">Price:</label>
                  <input type="number" 
                  onChange={(e) => {
                    setData({ ...data, Price: e.target.value })
                  }}
                  id="price" name="price" required />
                  <label htmlFor="food-id">Rating:</label>
                  <input type="text" 
                  onChange={(e) => {
                    setData({ ...data, Rating: e.target.value })
                  }}
                  id="food-id" name="food-id" required />
              {/* </div> */}
              

              <label htmlFor="food-detail">Product Detail:</label>
              <textarea id="food-detail" 
              onChange={(e) => {
                setData({ ...data, More_details: e.target.value })
              }}
              name="food-detail" rows="4" required></textarea>

              <button type="submit"  
              onClick={()=>{ 
                fetch("http://localhost:3005/Product",
                  {
                    method:"POST",
                    body:JSON.stringify(data),
                    headers:{
                      "Content-Type":"application/json"
                    }
                  }
                )
                .then(
                  (res)=>{
                    navigate("/getAll")
                  }
                )
              }} 
              className='btn btn-outline-success col-12 mt-2 '>Submit</button>
      </div>
    </>
  }
  export default Insertdata;