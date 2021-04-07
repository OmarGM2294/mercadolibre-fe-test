import { fetcher } from '../../../src/utils/fetcher'

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      const url = `https://api.mercadolibre.com/items/${id}`
      const result = {
        author: {
          name: 'Omar',
          lastname: 'Gonzalez',
        },
        item: [],
        categories: [],
      }
      return Promise.all([fetcher(url), fetcher(`${url}/description`)])
        .then(values => {
          const item = values[0]
          const decimals = item.price.toString().includes('.') ? Number(item.price.toString().split(".")[1]) : 0
          result.item = {
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: Number(item.price.toFixed()),
              decimals: decimals,
            },
            picture: item.pictures[0].secure_url,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            sold_quantity: item.sold_quantity,
            description: values[1].plain_text
          }
          return fetcher(`https://api.mercadolibre.com/categories/${item.category_id}`)
        })
        .then(data => {
          result.categories = data.path_from_root.map(category => category.name)
          return res.status(200).json(result)
        })
        .catch(e => res.status(500).json('Algo salio mal'))
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}