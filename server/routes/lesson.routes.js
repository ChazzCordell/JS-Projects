const LessonController = require('../controllers/lesson.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.post('/api/lesson', LessonController.createLesson);
    app.get('/api/lesson', LessonController.getAllLessons);
    app.get('/api/lesson/:id', LessonController.getOneLesson);
    app.put('/api/lesson/:id', LessonController.updateLesson);
    app.delete('/api/lesson/:id', LessonController.deleteLesson);
}
