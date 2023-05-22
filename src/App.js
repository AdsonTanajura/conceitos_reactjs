import React, { useState } from 'react';

import Header from './Components/Header';
import Amor from './Components/Amor';
import Header2 from './Components/Header2';

function App() {
  const [projects, setProjects] = useState(['Projeto Casa','Projeto Familia','Projeto Trabalho' ]);
  const [projects2, setProjects2] = useState(['Marília','Filhos']);
  const [projects3, setProjects3] = useState(['Homepage','Projects','User']);

  function handleAddProject() {
    setProjects([...projects,`New Project ${Date.now()}` ]);
  }
  function handleAddProject3() {
    setProjects3([...projects3,`Novo Projeto ${Date.now()}` ]);
  }
  function handleAddProject2() {
    setProjects2([...projects2,'Amor' ]);   
  }

    return (
    <>
          <Header2 project="PROJETO PRINCIPAL"/>
            <ul>
              {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
          
          <Header title="Projects"/>
            <ul>
              {projects3.map(project => <li key={project}>{project}</li>)}
            </ul>
          
            <button type="button" onClick={handleAddProject3}>Adicionar Projeto</button>

          <Amor amozinho="Paixão"/>
          <ul>
              {projects2.map(project => <li key={project}>{project}</li>)}
            </ul>
          
            <button type="button" onClick={handleAddProject2}>Adicionar Projeto</button>
          
    </>
  )
}
export default App;