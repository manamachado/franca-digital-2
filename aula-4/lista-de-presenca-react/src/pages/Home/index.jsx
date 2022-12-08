import React, { useRef, useState } from 'react';
import Card from '../../components/Card';
import './styles.css';

function Home() {
  const inputName = useRef();
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setStudents((prevState) => [...prevState, newStudent]);
    inputName.current.value = '';
  }

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input
        ref={inputName}
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {students.map((student) => (
        <Card name={student.name} time={student.time} />
      ))}
    </div>
  );
}

export default Home;
