export const getProduct = async (req, res, next) => {
    try {
        throw new Error("No Response")
    } catch (error) {
        next(error)
    }
}

export const createProduct = async (req, res, next) => {
    try {
        const { name, description, category, count, price } = req.body
        console.log(name, description, category, count, price);
    } catch (error) {
        next(error)
    }
}