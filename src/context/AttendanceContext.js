import React, { createContext, useState } from 'react';

const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 'S001', name: 'John Doe', isPresent: false },
    { id: 'S002', name: 'Jane Smith', isPresent: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, isPresent: !student.isPresent } : student
    ));
  };

  return (
    <AttendanceContext.Provider value={{ students, toggleAttendance }}>
      {children}
    </AttendanceContext.Provider>
  );
};

export default AttendanceContext;
