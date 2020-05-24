import requestPromise from 'request-promise'
import cheerio from 'cheerio'

export default {
    async search(req: Request, response: Response) {
        const options = {
            url: 'https://globoesporte.globo.com/futebol/brasileirao-serie-a/',
            transform: function(body: string) {
                return cheerio.load(body)
            }
        }

        requestPromise(options)
        .then((result) => {
            $('.tabela-body-linha').each((i, item) => {
                console.log($(item).find('.tabela-times-time-nome').text())
            })
        }).catch((err) => {
            console.log(err)
        });
    }
}