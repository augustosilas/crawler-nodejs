import express from 'express'

import CrawlerController from './controllers/CrawlerController'

const routes = express.Router()

routes.get('/', CrawlerController.search)

export default routes