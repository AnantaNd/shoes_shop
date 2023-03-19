import { products } from "../../../products";

export default function userHandler(req, res) {
    const id = req.query.id
    const method = req.method
    let { name, rating, price, brand, colorA, colorB, colorC, desc } = req.body
    const filtered = products.filter((product) => id == product.id)
    switch (method) {
        case 'GET':
            // if (filtered.length > 0) res.status(200).json(filtered)
            if (filtered.length > 0) res.status(200).json(filtered[0])
            else res.status(404).json({ message: "Products Not Found" })
            break
        case 'PUT':
            if (filtered.length > 0) {
                res.status(200).json({
                    id: filtered.id, name, rating, price, brand, colorA, colorB, colorC, desc
                })
            } else {
                res.status(404).json({
                    message: "Products Not Found"
                })
            }
            break
        case 'DELETE':
            if (filtered.length > 0) {
                products.splice(products.indexOf(filtered[0]), 1);
                res.status(200).json({
                    message: 'Products Successd Deleted',
                });
            } else {
                res.status(404).json({
                    message: 'Not Found',
                });
            }
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'POST', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break
    }
}