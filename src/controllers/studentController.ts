import { Request, Response } from 'express';
import { getSessionsForStudent } from '../services/studentService';
import { getErrorMessage } from '../utils/errors';

export const getStudentSessions = async (req: Request, res: Response) => {
  const studentId = req.params.id;

  try {
    const sessions = await getSessionsForStudent(studentId);
    res.status(200).json(sessions);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};
