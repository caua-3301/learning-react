import { Section } from './components/Div/Section';
import { Title } from './components/Title/Title';
import AppContext, { FistContext } from './context/App';
import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <AppContext>
      <Section>
        <>
          <Title>Vamo ver o contexto = </Title>
        </>
      </Section>
    </AppContext>
  );
}

export default App;
