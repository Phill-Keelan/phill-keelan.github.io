/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import WebDev from './components/experience/WebDev'
import Introduction from './components/experience/Introduction'
import MilitaryCareer from './components/experience/MilitaryCareer'
import HonoursAndAwards from './components/experience/HonoursAndAwards'
import CV from './components/experience/CV'
import ProjectTaoKoi from './components/projects/ProjectTaoKoi'
import FinalTarget from './components/projects/FinalTarget'
import PitchFjork from './components/projects/PitchFjork'
import MotivatingMike from './components/projects/MotivatingMike'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/Introduction" element={<Introduction />} />
    <Route path="/WebDevelopment" element={<WebDev />} />
    <Route path="/MilitaryCareer" element={<MilitaryCareer />} />
    <Route path="/HonoursAndAwards" element={<HonoursAndAwards />} />
    <Route path="/CV" element={<CV />} />
    <Route path="/PitCHFJork" element={<PitchFjork />} />
    <Route path="/MotivatingMike" element={<MotivatingMike />} />
    <Route path="/FinalTarget" element={<FinalTarget />} />
    <Route path="/ProjectTaoKoi" element={<ProjectTaoKoi />} />
  </Route>,
)

export default routes
