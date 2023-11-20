import { Product } from "../model/ProductModel.js"

export const getProduct = async (req, res, next) => {
    try {

        const pageNum = Number(req.query.pageNum) || 1

        let sort = {}
        const sortOption = req.query.sort || ""

        if (sortOption) {

        }
        const products = await Product.find({})

        res.status(200).json({ message: products })

    } catch (error) {
        next(error)
    }
}

export const createProduct = async (req, res, next) => {
    try {
        const { name, description, category, count, price } = req.body

    } catch (error) {
        next(error)
    }
}