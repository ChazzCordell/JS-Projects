const Lesson = require('../models/Lesson.model.js');    /* this is new */

module.exports = {
    createLesson: (req, res) => {
        Lesson.create(req.body)
            .then((newLesson) => res.json(newLesson))
            .catch((err) => res.status(400).json(err));
    },
    getAllLessons: (req, res) =>{
    Lesson.find({})
    .then((allLessons) => {
        console.log(allLessons);
        res.json(allLessons);
    })
    .catch((err) => console.log(err))
    },

    getOneLesson: (req, res) => {
        Lesson.findOne({_id: req.params.id })
            .then((oneLesson) => {
                console.log(oneLesson);
                res.json(oneLesson);
            })
    },

    deleteLesson: (req,res) => {
        Lesson.deleteOne({_id: req.params.id})
        .then((deletedId)=>res.json(deletedId))
        .catch((err)=>console.log(err));
    },

    updateLesson: (req,res)=>{
        Lesson.findByIdAndUpdate({_id:req.params.id}, req.body, {
            new:true,
        })
            .then((updatedLesson)=>res.json(updatedLesson))
            .catch((err)=>console.log(err));
    }
};
