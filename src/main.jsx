import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  return (
    <>
      <Overlay />
      <Content />
    </>
  )
}
function Overlay(){
  return(
  <>    
      <div className="navbar">
          <div className="nav-item" id="menu-button">
            <span className="material-symbols-outlined">blur_on</span>
              <div className="dropdown-content">
                <a href="https://will.limited">home</a>
                <a href="https://experience.will.limited">projects</a>
                <a href="https://about.will.limited">personal</a>
              </div>
          </div>

          <div className="nav-item">
              <a href="mailto:willdotlimited@gmail.com">contact</a>
          </div>
      </div>
  </>
  )
}

function Content() {
  return(
    <>
    <div className="content">

      <div className="landing">
        <img src="logos.png" 
          alt="logos for the virginia tech college of natural resources & environment, sktworks llc, esri, and the virginia tech college of agriculture and life sciences" id="logos"
        />
        <h1 id="why">My "why":</h1><br />
        <h1>I guess I'd consider myself a data-dedicated conservationist, most excited by any application of high-powered computational tools to environmental protection. More specifically, efforts that bring together satellite and UAV imagery, geographic information systems, and data analytics to preserve the natural world. In my career, I aim to broaden the inroads for drone technologies to matters of precision forestry, disaster relief, and wildfire monitoring. Hopefully, I can assemble a repertoire of quantitative and qualitative skills robust enough to do my part in ensuring a sustainable future.</h1><br />
        <h1>My work experience, described in more detail below, should shed further light on these ideas. A link to my plaintext resume can be found <a href="https://github.com/wponc/Resume/blob/main/Fall23Resume.pdf" target="_blank" className="externalLink">here</a> 
        </h1>

      </div>
      <Experience 
        name="Virginia Tech FREC"
        desc="Currently, I'm serving as a graduate research assistant in the department of Forest Resources & Environmental Conservation at Virginia Tech. This has been an unbelievable opportunity so far, blending academics, research, and teaching assistant responsibilities in an exciting new challenge. Interacting with other graduate students, gaining insights into their research motivations and work habits, has been a transformative experience to say the least. I'm continually surprised with how much commitment my colleagues have to their research, and the joy they hold in sharing it with other people. Ultimately, I'm very lucky be in a department filled with highly capable individuals, that I can honestly say have a tangible passion for environmental health. "
      />
      <Experience 
        name="SKTWorks LLC"
        desc="Since 2021, I've also had the chance to assist in the fieldwork operations at an amazing family-owned land conservation firm. For the role I’ve been able to travel extensively throughout the state of Virginia, conducting site visits to assess land protection practices in the establishment of conservation easements. Much of this experience has involved capture of aerial imagery with UAVs, collection of detailed photopoint information in ArcGIS Field Maps, and contribution to baseline documentation reports. Most rewarding has been the interactions with landowners themselves, who often take large pride in the natural beauty of their property. Take a look at some of the stewardship services our firm offers at sktworks.com"
      />
      <Experience 
        name="Esri"
        desc="For summer 2023 I had the incredible opportunity to intern on the Education & Support Services team at Esri. As the global leader in GIS software, Esri has a wide variety of customer requirements in nearly every industry of our data-driven world. As such, powerful software requires a dedicated, knowledgeable, and compassionate support group. I learned a vast amount about the ArcGIS software suite by assisting the full time analysts on their case progression, helping out with defect troubleshooting and bug research. Most importantly, I gained invaluable insight into how complicated software problems are reduced to linear troubleshooting procedures, agnostic to the particularities of individual use-cases."
      />
      <Experience 
        name="Virginia Tech SPES"
        desc="From 2022-2023 I was very fortunate to work as an undergraduate research assistant in the Virginia Tech Turfgrass Pathology Lab, exploring novel applications of technology to traditional turf management methodologies. This was a great opportunity to apply skills I'd previously called on - geospatial analysis, drone photogrammetry - to a field (no pun intended) I'd previously never been exposed to. What a privilege, to be the man in the room who knew the least on a given topic, and ask a million questions that came to mind about turfgrass minutiae. I participated in research on nematode sampling, surface uniformity testing, and other efforts to improve the user experience on golf courses and athletic facilities. I also completed a project investigating the viability of Blue Grama as a low-maintenance choice for lawns in the transition zone."
      /> 
    </div>
    </>
  )
}

function Experience(props) {
  return (
    <div className="Experience">
      <h1>{props.name}</h1>
      <h2>{props.desc}</h2>
    </div>
  )
} 