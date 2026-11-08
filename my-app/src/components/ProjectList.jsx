function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;