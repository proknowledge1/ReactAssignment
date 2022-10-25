const Gallery=()=>{
    return(
        <div className="container overflow-hidden text-center" style={{marginTop: '150px'}}>
        <br />
        <div className="row gy-5">
          <div className="col-3">
            <div className="p-3 border bg-dark" style={{margin:0}} align="left">
              <p><a style={{color: 'white', marginTop: '20px', textDecoration: 'none'}} href="#cmpn">Computer Engineering</a></p>
              <p><a style={{color: 'white', textDecoration: 'none'}} href="#it">Information Technology </a></p>
              <p><a style={{color: 'white', textDecoration: 'none'}} href="#aids">AI &amp; ML</a></p>
              <p><a style={{color: 'white', marginBottom: '20px', textDecoration: 'none'}} href="#extc">Electronics</a></p>
            </div>
          </div>
          <div className="col-8">
            <div className="p-3 border bg-light" style={{backgroundColor: '#5b4f4fc1'}}>
              <div className="container text-center">
                <div className="row g-2">
                  <p align="center" style={{fontSize: '25px', fontWeight: 800}} id="cmpn">Computer Engineering</p>
                  <div className="col-6">
                    <div className="p-3 border bg-light" style={{backgroundColor: '#d4d4d4c1'}}>
                      <img src={require("./img1.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border bg">
                      <img src={require("./img2.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border bg-light">
                      <img src={require("./img3.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border bg-light">
                      <img src={require("./img4.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="container text-center">
                <div className="row g-2">
                  <p align="center" style={{fontSize: '25px', fontWeight: 800}} id="it">Information Technology</p>
                  <div className="col-6">
                    <div className="p-3 border bg-light">
                      <img src={require("./img1.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border bg-light">
                      <img src={require("./img2.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border bg-light">
                      <img src={require("./img3.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border bg-light">
                      <img src={require("./img4.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="container text-center">
                <div className="row g-2">
                  <p align="center" style={{fontSize: '25px', fontWeight: 800}} id="extc">Electronics and Telecommunications</p>
                  <div className="col-6">
                    <div className="p-3 border bg-light">
                      <img src={require("./img1.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border bg-light">
                      <img src={require("./img2.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border bg-light">
                      <img src={require("./img3.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border bg-light">
                      <img src={require("./img4.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="container text-center">
                <div className="row g-2">
                  <p align="center" style={{fontSize: '25px', fontWeight: 800}} id="aids">Artificial Intelligence and Machine Learning</p>
                  <div className="col-6">
                    <div className="p-3 border bg-light">
                      <img src={require("./img1.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border bg-light">
                      <img src={require("./img2.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border bg-light">
                      <img src={require("./img3.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border bg-light">
                      <img src={require("./img4.jpg")} className="card-img-top" alt="..." height="300px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    )

}

export default Gallery;