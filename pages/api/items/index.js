import { fetcher } from '../../../src/utils/fetcher'

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const result = {
        author: {
          name: 'Omar',
          lastname: 'Gonzalez',
        },
        items: [],
        categories: [],
      }
      return fetcher(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.search}`)
        .then(data => {
          if (data.results.length === 0) {
            return { path_from_root: [] }
          }
          result.items = data.results.map((item => ({
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: Number(item.price.toFixed()),
              decimals: item.price.toString().includes('.') ? Number(item.price.toString().split(".")[1]) : 0,
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
          if(data.path_from_root.length > 0) {
            result.categories = data.path_from_root.map(category => category.name)
          }
          return res.status(200).json(result)
        })
        .catch(e => res.status(500).json('Algo salio mal'))
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}