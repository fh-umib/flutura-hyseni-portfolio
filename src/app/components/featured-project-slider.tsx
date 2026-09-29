"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";

export type FeaturedProject = {
  number: string;
  name: string;
  subtitle: string;
  type: string;
  liveDemo: string;
  imageSrc: string;
  description: string;
  groups: { label: string; items: string[] }[];
  technologies: string[];
};

type SliderDirection = "next" | "previous";

export default function FeaturedProjectSlider({
  projects,
}: {
  projects: FeaturedProject[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<SliderDirection>("next");
  const activeProject = projects[activeIndex];

  function moveTo(index: number, nextDirection: SliderDirection) {
    setDirection(nextDirection);
    setActiveIndex((index + projects.length) % projects.length);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveTo(activeIndex + 1, "next");
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveTo(activeIndex - 1, "previous");
    }
  }

  return (
    <section
      className="featured-projects"
      aria-label="Featured projects"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <article
        key={activeProject.number}
        className={`featured-project project-slide project-slide-${direction}${activeIndex === 1 ? " featured-project-reverse" : ""}`}
        role="group"
        aria-roledescription="slide"
        aria-label={`${activeIndex + 1} of ${projects.length}: ${activeProject.name}`}
      >
        <div className="project-detail">
          <div className="project-overline">
            <span className="project-number">{activeProject.number}</span>
            <span className="project-type">{activeProject.type}</span>
          </div>
          <h3
            className="project-title"
            id={`project-title-${activeProject.number}`}
          >
            {activeProject.name}
            <span>{activeProject.subtitle}</span>
          </h3>
          <p className="project-description">{activeProject.description}</p>

          <div className="project-groups">
            {activeProject.groups.map((group) => (
              <div className="project-group" key={group.label}>
                <h4>{group.label}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="project-stack">
            <h4>Technology</h4>
            <ul>
              {activeProject.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>

          <div className="project-actions">
            <a
              href={activeProject.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${activeProject.name} live demo (opens in a new tab)`}
            >
              Live Demo
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="M5 15 15 5M6 5h9v9" />
              </svg>
            </a>
          </div>
        </div>

        <figure className="project-media">
          <div className="project-media-chrome" aria-hidden="true">
            <i />
            <i />
            <i />
            <b>{activeProject.name}</b>
          </div>
          <div className="project-media-frame">
            <Image
              className="project-media-image"
              src={activeProject.imageSrc}
              alt={`${activeProject.name} application screenshot`}
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1200px) 48vw, 560px"
            />
          </div>
        </figure>
      </article>

      <div className="project-slider-controls">
        <button
          className="project-slider-arrow"
          type="button"
          aria-label="Previous featured project"
          onClick={() => moveTo(activeIndex - 1, "previous")}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5m6 6-6-6 6-6" />
          </svg>
        </button>
        <div className="project-slider-current">
          <div className="project-slider-progress" aria-label="Choose a project">
            {projects.map((project, index) => (
              <button
                className={`project-slider-indicator${index === activeIndex ? " is-active" : ""}`}
                type="button"
                key={project.number}
                aria-label={`Show ${project.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() =>
                  moveTo(index, index >= activeIndex ? "next" : "previous")
                }
              >
                <span aria-hidden="true" />
              </button>
            ))}
          </div>
          <p className="project-slider-count" aria-live="polite">
            <span>{activeProject.number}</span>
            <span aria-hidden="true"> / </span>
            <span>{String(projects.length).padStart(2, "0")}</span>
          </p>
        </div>
        <button
          className="project-slider-arrow"
          type="button"
          aria-label="Next featured project"
          onClick={() => moveTo(activeIndex + 1, "next")}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}