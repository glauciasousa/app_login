import React from "react";
import NavBar from "../../components/navbar"
import * as C from "./style";
import CourseRow from "../../components/courseRow";


const ListCourses = () => {
    const curso = [
        {name: 'Geografia', description: 'Aprenderemos tudo sobre relevos', professor: 'José'},
        {name: 'Matematica', description: 'Aprenderemos tudo sobre Raíz quadrada', professor: 'Antônio'},
        {name: 'Biologia', description: 'Aprenderemos tudo sobre Cromossomos', professor: 'Julio'},
        {name: 'Fisica', description: 'Aprenderemos tudo sobre Leis de Newton', professor: 'Joao'},
    ]

    return <C.Container>
        <NavBar></NavBar>
        <C.ContainerContent>
        <C.Titulo>Cursos</C.Titulo>
        <C.Content> 
            {curso.map(item => {
                return <CourseRow dados={ item }/>
            })}
            
        </C.Content>
        </C.ContainerContent>        
    </C.Container>
}

export default ListCourses