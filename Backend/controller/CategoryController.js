import { Category } from "../Models/CategoryModel"

export const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find({}).sort({ name: "asc" }).orFail()

        if (!categories) {
            res.status(404).json({ message: "Category Not found" })
            return
        }
        res.status(200).json(categories)
    } catch (error) {
        next(error)
    }
}
