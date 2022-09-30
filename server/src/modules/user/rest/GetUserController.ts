import { AbstractController } from "@core/rest/AbstractController"


export class GetUserController extends AbstractController {

    async executeImpl(): Promise<any> {
        console.log('user controller invoked! ' + this.req.query.id)
        const userId = this.req.query.id
        const response = {id: userId}
        return this.ok(this.res, response)
    }
}
