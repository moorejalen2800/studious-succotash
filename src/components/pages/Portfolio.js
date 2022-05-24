import React from 'react';
import Project from './Project';

const projects = [
    {
    },
]

export default function Portfolio() {
    return (
      <div>
        <h1>Coding Portfolio</h1>
        <Project projects = { projects } />
      </div>
    );
  }