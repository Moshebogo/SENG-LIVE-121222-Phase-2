import ProjectListItem from "./ProjectListItem";
import {useState} from 'react'

const ProjectList = ({ projects }) => {
      const [searchQuery, setSearchQuery] = useState("")
      const [phaseStatus, setPhaseStatus ] = useState("All")

  function handleChange(e) {
     setSearchQuery(e.target.value)
     console.log(e.target.value)
  }
  function handle1Click(e) {
    setPhaseStatus(1)
  }
  
  function handle2Click(e) {
    setPhaseStatus(2)
  }

  function handle3Click(e) {
    setPhaseStatus(3)
  }

  function handle4Click(e) {
    setPhaseStatus(4)
  }
  function handle5Click(e) {
    setPhaseStatus(5)
  }

  function handleAllClick(e) {
    setPhaseStatus("All")
  }

const filteredItems = projects.filter( project => {
  return ( project.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ) 
}) 

const phase3Filter = filteredItems.filter(project => {
  return ( project.phase === phaseStatus || phaseStatus === "All")
})


  const projectListItems = phase3Filter.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));

  return (
    <section>
      <h2>Projects</h2>
      <div className="filter">
        <button onClick={handleAllClick}>All</button>
        <button onClick={handle5Click}>Phase 5</button>
        <button onClick={handle4Click}>Phase 4</button>
        <button onClick={handle3Click}>Phase 3</button>
        <button onClick={handle2Click}>Phase 2</button>
        <button onClick={handle1Click}>Phase 1</button>
      </div>
      <input
       type="text"
       placeholder="Search..."
       onChange={handleChange}
       />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
