import React, {useEffect, useState} from 'react';
import {useParams, useNavigate, Link} from "react-router-dom";
import axios from "axios";

const OneLesson = (props)=> {
  const {id} = useParams();
  const [oneLesson, setOneLesson] = useState({})
  const navigate=useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/lesson/${id}`)
    .then((res) =>{
      console.log(res.data);
      setOneLesson(res.data);
    })
    .catch((err) =>console.log(err));
  },[])

  const deleteLesson = (lessonId) => {
        axios.delete('http://localhost:8000/api/lesson/' + lessonId)
            .then(res => {
                navigate('/');
                setOneLesson(lessonId)
            })
            .catch(err => console.log(err))
    }
return(
  <div>
      <div>
      <Link to="/">back to home</Link>
      <h2>{oneLesson.name}</h2>
      <button onClick={(e)=>{deleteLesson(oneLesson._id)}}>Register for class</button>
      <p>Type: {oneLesson.type}</p>
      <p>What do you need to work on?: {oneLesson.description}</p>
      <p>Skill Level: {oneLesson.skill}</p>
      </div>
  </div>
)
}
export default OneLesson;
