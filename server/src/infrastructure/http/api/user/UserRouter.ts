import express from 'express'

import { getUserController } from '@modules/user/rest'

const userRouter = express.Router()

userRouter.get('', (req, res) => getUserController.execute(req, res))

export default userRouter