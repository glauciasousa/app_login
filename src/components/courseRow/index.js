import React from "react";
import * as C from "./style";

const CourseRow = ({ dados }) => {
    console.log (dados)
    return (
        <C.Container>
            <C.ContainerDesc>
                { dados.name } { " " } { dados.description }
            </C.ContainerDesc>           
            <C.btnEdit>
                Editar
            </C.btnEdit>
            <C.btnDelete>
                Excluir
            </C.btnDelete>
        </C.Container>
    )
}

export default CourseRow;