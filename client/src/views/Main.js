import React, {useState, useEffect} from 'react';
import OneLesson from '../components/OneLesson';
import axios from 'axios';
import DeleteLesson from '../components/DeleteLesson'


const Main = () => {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
        axios.get('http://localhost:8000/api/lesson')
        .then(res => {
            setLessons(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
  const removeFromDom = id => {
        axios.delete('http://localhost:8000/api/delete/' + id)
        .then(res => {
            console.log(res)
            console.log(res.data)
            setLessons(lessons.filter(lesson => lesson._id !== id))
        }).catch((err)=> {
            console.log(err)
        })
    }


  return (
    <div>
        <OneLesson lessonsList={lessons} setLessonsList={setLessons}/>
    </div>
  )
}
export default Main;
