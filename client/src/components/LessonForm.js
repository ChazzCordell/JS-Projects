import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
const LessonForm = (props) => {

    const {lessonsList, setLessonsList} = props;
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill, setSkill] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post('http://localhost:8000/api/lesson', {
            name,
            type,
            description,
            skill
        })
           .then(res=>{
            console.log(res);
            navigate('/')
            }) // If successful, do something with the response.
            .catch(err=>{
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div>
            <h1>Lesson Details</h1>
            <Link to="/">back to home</Link>
        <form onSubmit={handleSubmit}>
            <p>
                <label>Name: </label><br/>
                <input onChange = {(e)=>setName(e.target.value)}
                value={name} name="name" type="text"/>
                {errors.name ? <p>{errors.name.message}</p> : null}
            </p>
            <p>
                <label>Type Figure/Hockey?: </label><br/>
                <input onChange = {(e)=>setType(e.target.value)}
                value={type} name="type" type="text"/>
                {errors.type ? <p>{errors.type.message}</p> : null}
            </p>
            <p>
                <label>What do you need to work on?: </label><br/>
                <input onChange = {(e)=>setDescription(e.target.value)}
                value={description} name="description" type="text"/>
                {errors.description ? <p>{errors.description.message}</p> : null}
            </p>
            <p>
                <label>Skill Level 1-5: </label><br/>
                <input onChange = {(e)=>setSkill(e.target.value)}
                value={skill} name="skill1" type="number"/>
            </p>
            <input type="submit" className="submit-input" value="Create"/>
        </form>
    </div>
    );
};
export default LessonForm;
