import * as express from 'express'

export abstract class AbstractController {

    protected req!: express.Request; 
    protected res!: express.Response

    protected abstract executeImpl(): Promise<void | any>

    public async execute(req: express.Request, res: express.Response): Promise<void> {
        this.req = req;
        this.res = res;
        try {
            await this.executeImpl()
        } catch (e) {
            this.fail(e)
            return
        }
    }

    protected ok<T>(res: express.Response, response?: T) {
        if (!!response) {
            return res.status(200).json(response)
        } else {
            return res.sendStatus(200)
        }
    }

    protected fail(exception: any) {
        return this.res.status(500).json({
            message: 'default error message'
        })
    }
}