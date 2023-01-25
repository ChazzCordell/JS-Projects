import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import "../App.css";

const LessonList = (props) => {
    const [lessonsList, setLessonsList] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/lesson")
    	.then((res)=>{
	    console.log(res);
	    console.log(res.data);
      setLessonsList(res.data);
    })
    .catch((err)=>console.log(err));
}, [])
    return (
        <div>
          <div className='container'>
          <div className='header'>
          <h1>Your Lessons</h1>
          <Link to={`/lesson`}>Add a lesson to queue.</Link>
          </div>
          </div>
          <header>These lessons are looking for a coach:</header>
          {lessonsList.map((lesson, index)=> {
            return(
              <div key={lesson._id}>
                <div className='container'>
                <table className='table'>
                <tbody>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Actions</th>
                </tr>
                <tr>
                  <td>{lesson.name}</td>
                  <td>{lesson.type}</td>
                  <td><button onClick={()=>navigate(`/lesson/edit/${lesson._id}`)}>Edit</button>
                  <Link to={`/lesson/${lesson._id}`}>details</Link></td>
                </tr>
                </tbody>
                </table>
                </div>
              </div>
          )})
          }
        </div>
        )
      };
export default LessonList;
