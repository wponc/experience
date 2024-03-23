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
      <Navbar />
      <Grid />
      <Content />
    </>
  )
}
function Navbar(){
  return(
    <nav>
      <ul>
        <div id='menu-button'>
          <li><a href="#"><span class="material-symbols-outlined" >select_all</span></a></li>
          <div className="dropdown-content">
            <a href="https://will.limited">//home</a>
            <a href="https://projects.will.limited">//projects</a>
            <a href="https://about.will.limited">//personal</a>
          </div>
        </div>
        <li><a href="mailto:willdotlimited@gmail.com">//contact</a></li>
      </ul>
    </nav>
  )
}

function Grid(){
  const images = [
    { url: 'covers/cnre.jpg', alt: 'Image 1', title: 'VT CNRE', position: 'Graduate Research Assistant', section: 'cnre' },
    { url: 'covers/skt.jpg', alt: 'Image 2', title: 'SKTWorks LLC', position: 'Fieldwork Assistant',  section: 'skt' },
    { url: 'covers/esri.jpg', alt: 'Image 1', title: 'Esri', position: 'Support Services Intern', section: 'esri' },
    { url: 'covers/spes.jpg', alt: 'Image 2', title: 'VT SPES', position: 'Undergraduate Research Assistant',  section: 'spes' },
  ];

  const ImageGrid = ({ images }) => {
    return (
      <div className="image-grid">
        {images.map((image, index) => (
          // <a key={index} href={`#${image.section}`} className="grid-item-anchor">
            <div key={index} className="grid-item" style={{ backgroundImage: `url(${image.url})` }}>
              <div className="overlay">
                  <div className="overlay-text">
                    <h2>{image.title}</h2>
                    <p>{image.position}</p>
                  </div>
              </div>
            </div>
          // </a>
        ))}
      </div>
    );
  };
  return(
    <ImageGrid images={images} />
  )
}

function Content() {
  const experiences = [
    {company: 'Virginia Tech CNRE', description: "Currently I'm serving as a graduate research assistant in the department of Forest Resources & Environmental Conservation at Virginia Tech. This has been an unbelievable opportunity so far, blending academics, research, and teaching assistant responsibilities in an exciting new challenge. Interacting with other graduate students, gaining insights into their research motivations and work habits, has been a transformative experience to say the least. I'm continually surprised with how much commitment my colleagues have to their research, and the joy they hold in sharing it with other people. Ultimately, I'm very lucky be in a department filled with highly capable individuals, that I can honestly say have a tangible passion for environmental health."},
    {company: 'SKTWorks LLC', description: "Since 2021, I've also had the chance to assist in the fieldwork operations at an amazing family-owned land conservation firm. For the role I’ve been able to travel extensively throughout the state of Virginia, conducting site visits to assess land protection practices in the establishment of conservation easements. Much of this experience has involved capture of aerial imagery with UAVs, collection of detailed photopoint information in ArcGIS Field Maps, and contribution to baseline documentation reports. Most rewarding has been the interactions with landowners themselves, who often take large pride in the natural beauty of their property. Take a look at some of the stewardship services our firm offers at sktworks.com"},
    {company: 'Esri', description: "For summer 2023 I had the incredible opportunity to intern on the Education & Support Services team at Esri. As the global leader in GIS software, Esri has a wide variety of customer requirements in nearly every industry of our data-driven world. As such, powerful software requires a dedicated, knowledgeable, and compassionate support group. I learned a vast amount about the ArcGIS software suite by assisting the full time analysts on their case progression, helping out with defect troubleshooting and bug research. Most importantly, I gained invaluable insight into how complicated software problems are reduced to linear troubleshooting procedures, agnostic to the particularities of individual use-cases."},
    {company: 'Virginia Tech SPES', description: "From 2022-2023 I was very fortunate to work as an undergraduate research assistant in the Virginia Tech Turfgrass Pathology Lab, exploring novel applications of technology to traditional turf management methodologies. This was a great opportunity to apply skills I'd previously called on - geospatial analysis, drone photogrammetry - to a field (no pun intended) I'd previously never been exposed to. What a privilege, to be the man in the room who knew the least on a given topic, and ask a million questions that came to mind about turfgrass minutiae. I participated in research on nematode sampling, surface uniformity testing, and other efforts to improve the user experience on golf courses and athletic facilities. I also completed a project investigating the viability of Blue Grama as a low-maintenance choice for lawns in the transition zone"}
  ]
  const ExperiencesList = ({ experiences }) => {
    return (
      <div className="experiences">
        {experiences.map((experience, index) => (
          <div key={index} className="experience" >
            <h1>{experience.company}</h1>
            <h2>{experience.description}</h2>
          </div>
        ))}
      </div>
    );
  };
  return(
    <ExperiencesList experiences={experiences} />
  )
  }