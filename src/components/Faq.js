import React from 'react'
import "./Faq.css";
function Faq() {
  return (
    <div className='container'>
      <h1>FAQ'S</h1>
      <div className="row">
        <div className='columns' class='col-md-6 px-3'>
          <div class="row card bg-light mb-3 ">
            <div class="card-body">
              <h4 class="card-title">Can you report COVID-19 data related to schools and/or colleges?</h4>
              <p class="card-text">We do not currently have plans to track COVID-19 data related to either K-12 schools or colleges. Some states have begun to report COVID-19 data by K-12 school district. For additional information on COVID-19 in your area schools or colleges, check your local news sources, your city or county public health department.</p>
            </div>
          </div>
        </div>
        <div className='columns' class='col-md-6 px-3'>
          <div class="row card bg-light mb-3 ">
            <div class="card-body">
              <h4 class="card-title">What are your sources? How is the data gathered for this project?</h4>
              <p class="card-text">We are using state bulletins and official handles to update our numbers. The data is validated by a group of volunteers and published into a Google sheet and an API. API is available for all at api.covid19india.org. We would love it if you can use this data in the fight against this virus. The source list is here.</p>
            </div>
          </div>
        </div>
        <div class='col-md-6 px-3'>
          <div class="row card bg-light mb-3 ">
            <div class="card-body">
              <h4 class="card-title">Why don’t you report county-level data?</h4>
              <p class="card-text">We do not currently have plans to collect nationwide data at the county level, both because we do not have the resources to do so manually and because Johns Hopkins, The New York Times, and USAFacts.org are collecting county-level data automatically for cases and deaths. For a time, we did collect county-level data for select metro areas as part of our City Data project.</p>
            </div>
          </div>
        </div>
        <div class='col-md-6 px-3'>
          <div class="row card bg-light mb-3 ">
            <div class="card-body">
              <h4 class="card-title">Are you planning to track vaccination data?</h4>
              <p class="card-text">The COVID Tracking Project is not tracking data about COVID-19 vaccine distribution and administration for the US as a whole, but as of January 27, 2021, we do display CDC data on vaccinations in long-term care facilities on our data page. We will also be keeping a close eye on how states define and report vaccination metrics and will be maintaining internal logs and annotations about interesting features of this data.</p>
            </div>
          </div>
        </div>
        <div class='col-md-6 px-3'>
          <div class="row card bg-light mb-3 ">
            <div class="card-body">
              <h4 class="card-title">Why are you guys putting in time and resources to do this while not gaining a single penny from it?</h4>
              <p class="card-text">Because it affects all of us. Today it's someone else who is getting infected; tomorrow it could be us. We need to prevent the spread of this virus. We need to document the data so that people with knowledge can use this data to make informed decisions.</p>
            </div>
          </div>
        </div>
        <div class='col-md-6 px-3'>
          <div class="row card bg-light mb-3 ">
            <div class="card-body">
              <h4 class="card-title">Who are you?</h4>
              <p class="card-text">We are a group of dedicated volunteers who curate and verify the data coming from several sources. We extract the details, like a patient's relationship with other patients to identify local and community transmissions, travel history and status. We never collect or expose any personally identifiable data regarding the patients.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq