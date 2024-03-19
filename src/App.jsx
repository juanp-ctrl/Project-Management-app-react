import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState( prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectsState( prevState => {

      const newProjectId = Math.random();
      const newProject = {
        ...projectData,
        id: newProjectId
      }
      return {
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
    console.log(projectsState.projects[0])
  }

  function handleCancelOfNewProject() {
    setProjectsState( prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  let content;

  if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  else if(projectsState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelOfNewProject}/>
  }

  return (
    <main className="h-screen flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
