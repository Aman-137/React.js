import React, { Component } from "react";

const subjects = (STUDENT) => {
    class Subject extends Component {
        render() {
            return (
                <STUDENT hocsub="Python"></STUDENT>
            )
        }
    }
    return Subject
} 

export default subjects;