import Notesapp from "../../images/notesapp.png";
import Calc from '../../images/calculator.png';
import dwnldr from '../../images/downloader.png'

export const portfolioData = [
  {
    sectionId: 3,
    projectName: "Notes Application",
    projectLink1: "https://avisnoteapp.netlify.app/",
    projectLink2: "https://github.com/Abinashpatri/notesapp",
    image: Notesapp,
  },
  {
    sectionId: 2,
    projectName: "Calculator",
    projectLink1: "https://abinashpatri.github.io/calculator/",
    projectLink2: "https://github.com/Abinashpatri/calculator",
    image: Calc,
  },
  {
    sectionId: 2,
    projectName: "File Downloader",
    projectLink1: "https://github.com/Abinashpatri/File-Downloader",
    projectLink2: "https://abinashpatri.github.io/File-Downloader/",
    image: dwnldr,
  },
  
];

export const filterOptions = [
  {
    label: "All",
    id: 1,
  },
  {
    label: "JavaScript",
    id: 2,
  },
  {
    label: "React",
    id: 3,
  },
  
];
