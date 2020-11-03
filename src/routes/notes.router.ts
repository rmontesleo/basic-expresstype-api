import { Router } from "express";

//import { getAllNotes, getNoteById, saveNote, deleteNote, updateNote  } from "../controllers/note.controller";
import * as noteController from "../controllers/note.controller";


const router = Router();

router.get('/', noteController.getAllNotes );

router.get('/:id', noteController.getNoteById );

router.post('/', noteController.saveNote );

router.put('/:id', noteController.updateNote );

router.delete('/:id', noteController.deleteNote);


export default router;

