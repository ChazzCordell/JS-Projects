import axios from "axios";
const DeleteButton = (props) => {
    const { lessonId, successCallback } = props
    const deleteLesson = e => {
        axios.delete('http://localhost:8000/api/delete/' + lessonId)
            .then(res=>{
                successCallback()
            })
    }
    return (
        <button onClick={deleteLesson}>
            Delete
        </button>
    )
}
export default DeleteButton
