import { expect } from "chai";
import { fetchUsers } from '../index.js'
import fetch from "node-fetch";
import sinon from "sinon";
global.fetch = fetch
describe('Получение пользователей с сервера', function () {
    it('Сравнение с моковыми пользователями', async function () {

        const mockUsers = [
            {},
            {}
        ]

        let fetchStub = sinon.stub(global, 'fetch').resolves({
            ok: true,
            json: async () => mockUsers
        })
        const users = await fetchUsers()
        expect(fetchStub.calledOnce).to.be.true
        expect(users).to.deep.equal(mockUsers)
       
    })
    it('Корректный адрес', async function(){
expect(add('https://jsonplaceholder.typicode.com/users').to.equal ('https://jsonplaceholder.typicode.com/users'))
    })
})
