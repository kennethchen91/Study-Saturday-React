import React, { Component } from 'react';
import StudentList from './StudentList';
import axios from 'axios';

export default class Main extends Component {
    constructor() {
        super()
        this.state = { students: [] }
    }

    componentDidMount = async () => {
        try{
            console.log('attempting to get data')
            const response = await axios.get('/student')
            console.log('got data')
            const studentdata = response.data;
            console.log(`Got students: ${studentdata}`)
            console.log(studentdata)
            this.setState({students: studentdata});
    
        }catch (err){
          console.log('Could not get students. Check code')
        }
    };

    render() {
        return (
            <div id="main">
            <div id="navbar">
                <h2>Student List</h2>
            </div>
            <div id="container">
                <StudentList students={this.state.students} />
            </div>
            </div>
        );
    }
}