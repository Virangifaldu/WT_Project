import imagePath from "./IMG-20240407-WA0380.jpg"; // Adjust this path to your image location
import secimagePath from "./WhatsApp Image 2024-09-20 at 19.50.03_de327489.jpg"; // Adjust this path to your image location

function Homepage(){
    return(
    <>
    <div className="row pt-3">
                  <div className="col"></div>
                  <div className=" getbyid-main col-4" > 
                      <div className="getbyid-card">
                          <div className="getbyid-con">
                              <img src={imagePath} className="card-img-top" alt="..." />
                          </div>
                          <div className="card-body">
                              <h5 className="card-title">Virangi Faldu</h5>
                              <h5 className="card-title">Founder of viri's cosmetic</h5>
                        
                              <div className="discription p-3">
                                  <p>
                                      {/* {project.More_details} */}
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-1"></div>
                  <div className=" getbyid-main col-4" > 
                      <div className="getbyid-card">
                          <div className="getbyid-con">
                              <img src={secimagePath} className="card-img-top" alt="..." />
                          </div>
                          <div className="card-body">
                              <h5 className="card-title">Krishna Faldu</h5>
                              <h5 className="card-title">Manager of viri's cosmetic</h5>
                        
                              <div className="discription p-3">
                                  <p>
                                      {/* {project.More_details} */}
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col"></div>

      </div>
      </>
    )
}
export default Homepage;