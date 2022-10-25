const Contact=()=>{
    return(
        <div style={{margin: '150px 100px 50px 100px'}}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                E-mail
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong><a href="mailto:example@gamil.com">Click to mail here</a></strong> It is shown Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, velit facilis optio earum nisi quae impedit, eos molestiae quas saepe distinctio. Qui dolorum perspiciatis impedit vel delectus, voluptatem reprehenderit ad molestias similique quo illum earum, ipsam quas. Obcaecati, voluptas eligendi? by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Telephone Number
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong><a href="tel:+917058565856">Click here to call</a></strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium voluptates tempore placeat voluptatem dolore eveniet eius dicta, id vitae repellat asperiores, hic nam quaerat dignissimos, aperiam magni eaque ex beatae ducimus aut doloremque quia fugiat omnis harum! Unde, numquam, facere at doloribus architecto voluptate libero illo excepturi ea saepe dicta. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Visit us Directly
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit est, quibusdam placeat tempore commodi totam quisquam consequuntur, illum accusamus, obcaecati fugiat nobis nihil exercitationem voluptas eum mollitia architecto! Architecto dolorem eius aperiam ducimus ipsa, amet asperiores recusandae atque consectetur aliquid assumenda minima facere exercitationem consequuntur repudiandae officia molestias cumque nisi?.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Contact;