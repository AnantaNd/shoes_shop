import { city } from '../../city';

export default function handler(req, res){
  const {method} = req
  const {
    id, name, price
  } = req.body

  switch(method){
    case 'GET':
      res.status(200).json(city);
      break;
    case 'POST':
      const newCity = {
        id : id.length+1, 
        name, 
        price
      }
      city.push(newCity)
      res.status(200).json(city)
      break;
  }
} 