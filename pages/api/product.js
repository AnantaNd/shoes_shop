import { products } from '../../products';

export default function handler(req, res) {
  const { method } = req;
  const {
    id, name, rating, price, brand, desc,
  } = req.body;

  switch (method) {
    case 'GET':
      res.status(200).json(products);
      break;
    case 'POST':
      const newProduct = {
        id: products.length + 1,
        id,
        name,
        rating,
        price,
        brand,
        desc,
      };
      products.push(newProduct);
      res.status(200).json(products);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
