import { render, screen } from "@testing-library/react";
import React from "react";
import { Project } from "../Project";
import ProjectCard from "../ProjectCard";
import { MemoryRouter } from "react-router-dom";

describe("<ProjectCard />", () => {
  let project;
  let handleEdit;
  beforeEach(() => {
    project = new Project({
      id: 1,
      name: "Mission Impossible",
      description: "This is really difficult",
      budget: 100,
    });
    handleEdit = jest.fn();
  });
  it("should initially render", () => {
    render(
      <MemoryRouter>
        <ProjectCard project={project} onEdit={handleEdit} />
      </MemoryRouter>
    );
  });
  it("render project properly", () => {
    render(
      <MemoryRouter>
        <ProjectCard project={project} onEdit={handleEdit} />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading")).toHaveTextContent(project.name);
    screen.getByText(/this is really difficult\.\.\./i);
    screen.getByText("budget: 100");
  });
});
