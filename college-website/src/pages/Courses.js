const Courses=()=>{
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
          <div className="col-9">
            <div className="p-3 border bg-light">
              <div className="card" style={{width: '100%'}} align="left">
                <div className="card-body" id="cmpn">
                  <h5 className="card-title">Computer Engineering</h5>
                  <p className="card-text">Some quick example text to Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quae ut cum maxime consectetur, rem vero atque optio itaque alias dolore iure voluptates quas doloribus, commodi inventore laudantium vel necessitatibus. build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-dark">Know More</a>
                </div>
              </div>
              <br />
              <div className="card" style={{width: '100%'}} align="left">
                <div className="card-body" id="it">
                  <h5 className="card-title">Information Technology</h5>
                  <p className="card-text">Some quick example text to Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quae ut cum maxime consectetur, rem vero atque optio itaque alias dolore iure voluptates quas doloribus, commodi inventore laudantium vel necessitatibus. build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-dark">Know More</a>
                </div>
              </div>
              <br />
              <div className="card" style={{width: '100%'}} align="left">
                <div className="card-body" id="extc">
                  <h5 className="card-title">Electronics and Telecommunications</h5>
                  <p className="card-text">Some quick example text to Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quae ut cum maxime consectetur, rem vero atque optio itaque alias dolore iure voluptates quas doloribus, commodi inventore laudantium vel necessitatibus. build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-dark">Know More</a>
                </div>
              </div>
              <br />
              <div className="card" style={{width: '100%'}} align="left">
                <div className="card-body" id="aids">
                  <h5 className="card-title">Artificial Intelligence and Machine Learning</h5>
                  <p className="card-text">Some quick example text to Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quae ut cum maxime consectetur, rem vero atque optio itaque alias dolore iure voluptates quas doloribus, commodi inventore laudantium vel necessitatibus. build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-dark">Know More</a>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div></div>
    )
}

export default Courses;