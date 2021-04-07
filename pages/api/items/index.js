import { fetcher } from '../../../src/utils/fetcher'

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const result = {
        author: {
          name: 'Omar',
          lastname: 'Gonzalez',
        }
      }
      return fetcher(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.search}`)
        .then(data => {
          result.items = data.results.map((item => ({
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: item.price,
              decimals: 0
            },
            picture: item.thumbnail,
            condition: item.condition,
            state_name: item.address.state_name,
            free_shipping: item.shipping.free_shipping
          })))
          const category_id = data.results.sort((a,b) =>
                                data.results.filter(v => v.category_id===a).length
                                - data.results.filter(v => v.category_id===b).length
                              ).pop().category_id
          return fetcher(`https://api.mercadolibre.com/categories/${category_id}`)
        })
        .then(data => {
          result.categories = data.path_from_root.map(category => category.name)
          res.status(200).json(result)
        })
        .catch(e => console.log(e))
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}