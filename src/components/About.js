import React from 'react';
import "./About.css";

function About() {
  return (
    <div>
      <h1 className='pb-3'>About</h1>
      <div className='container pl-3 pr-3'>
        <p>Corona viruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV). A novel corona virus (nCoV) is a new strain that has not been previously identified in humans.</p>
        <p>Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.</p>
        <p>Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing and maintaining personal hygiene and avoiding close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing.</p>
      </div>
      {/* our team */}
      <div class="container ">
        <div class="row mb-4">
            <h1>Our team</h1>
            
          
        </div>

        <div class="row text-center">
          {/* <!-- Team item--> */}
          <div class="col-xl-3 col-sm-6 mb-5">
            <div  class="shadow p-3 mb-5 bg-white rounded"><img src="https://cdn2.vectorstock.com/i/1000x1000/98/11/girl-icon-flat-single-avatarpeaople-icon-from-vector-14449811.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
              <h5 class="mb-0">Keerthana</h5>
              <span class="small text-uppercase text-muted">Team Member</span>
              
            </div>
          </div>
          {/* <!-- End--> */}

          {/* <!-- Team item--> */}
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="shadow p-3 mb-5 bg-white rounded"><img src="https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
              <h5 class="mb-0">Vikas</h5><span class="small text-uppercase text-muted">Team Member</span>
             
            </div>
          </div>
          {/* <!-- End--> */}

          {/* <!-- Team item--> */}
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="shadow p-3 mb-5 bg-white rounded"><img src="https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
              <h5 class="mb-0">Nihal</h5><span class="small text-uppercase text-muted">Team Member</span>
              
            </div>
          </div>
          {/* <!-- End-->

          <!-- Team item--> */}
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="shadow p-3 mb-5 bg-white rounded"><img src="https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
              <h5 class="mb-0">Sankeerth</h5><span class="small text-uppercase text-muted">Team Member</span>
              
            </div>
          </div>
          {/* <!-- End--> */}

        </div>
      </div>
      </div>
  )
}

export default About