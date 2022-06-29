import { listMock } from 'app/mocks/listmock'

export type mock = typeof listMock

export type Items = Pick<mock, 'itens'>

export type Item = Pick<Items, 'itens'>
