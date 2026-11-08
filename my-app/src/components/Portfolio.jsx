import React from 'react';
import { projects } from '../data';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: "All"
    };
  }

  handleFilterChange = (newFilter) => {
    this.setState({ selectedFilter: newFilter });
  };

  render() {
    const { selectedFilter } = this.state;

    const filters = ["All", ...new Set(projects.map(project => project.category))];

    const filteredProjects = selectedFilter === "All" 
      ? projects 
      : projects.filter(project => project.category === selectedFilter);

    return (
      <div className="portfolio">
        <Toolbar 
          filters={filters} 
          selected={selectedFilter} 
          onSelectFilter={this.handleFilterChange} 
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;