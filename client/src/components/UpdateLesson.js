import React, {useState, useEffect} from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import axios from "axios";

const UpdateLesson = (props) => {
  const {id}=useParams();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill, setSkill] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/lesson/${id}`)
    .then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setType(res.data.type);
      setDescription(res.data.description);
      setSkill(res.data.skill);
    })
    .catch((err)=>console.log(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/lesson/${id}`, {
      name,
      type,
      description,
      skill,
    })
    .then((res)=>{
      console.log(res.data);
      console.log(res);
      navigate("/");

    })
    .catch((err)=>{
      console.log(err);
    });
  };
  return (
    <div>
            <h1>Lesson Details</h1>
            <Link to="/">back to home</Link>
    <div>
    <header>Edit</header>

    <form onSubmit={submitHandler}>
        <div>
            <label>Name: </label>
            <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                type="text"
            />
        </div>

        <br />

        <div>
            <label>Type: </label>
            <input
                onChange={(e) => setType(e.target.value)}
                value={type}
                name="type"
                type="text"
            />
        </div>

        <br />

        <div>
            <label>What do you need to work on?: </label>
            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                name="description"
                type="text"
            />
        </div>
        <br />

        <div>
            <label>Skill: </label>
            <input
                onChange={(e) => setSkill(e.target.value)}
                value={skill}
                name="skill"
                type="number"
            />
        </div>
        <br />
        <input class="submit-input" type="submit" value="Update" />
    </form>
  </div>
  </div>
  );
};

export default UpdateLesson;
