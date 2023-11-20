import { Category } from "../model/CategoryModel.js"

export const getCategory = async (req, res, next) => {
    try {
        const category = await Category.find({}).sort({ name: "asc" })

        if (!category) {
            res.status(404).json({ message: "Category Not Found" })
            return
        }

        res.status(200).json(category)
    } catch (error) {
        next(error)
    }
}

export const newCategory = async (req, res, next) => {
    try {
        const { category } = req.body
        if (!category) {
            res.status(400).send("Category input is required")
        }
        const categoryExist = await Category.find({ name: category })
        console.log(categoryExist.length);
        if (categoryExist && categoryExist.length > 0) {
            res.status(400).send("Categoty already exists")
        }
        else {
            const categoryCreated = await Category.create({
                name: category
            })
            res.status(201).json({ categoryCreated })
        }
    } catch (error) {
        next(error)
    }
}

export const deleteCategory = async (req, res, next) => {
    try {
        if (req.params.category != "Choose category") {
            const categoryExist = await Category.findOne({
                name: decodeURIComponent(req.params.category).orFail()
            })
            await categoryExist.remove()
            res.json({ categoryDeleted: true })
        }
    } catch (error) {
        next(error)
    }
}
