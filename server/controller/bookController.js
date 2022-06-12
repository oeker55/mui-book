
const bookSchema = require("../models/bookSchema");

module.exports.getAllBooks = async(req, res) => {
  try {
    const allBooks = await bookSchema.find();
    res.status(200).json(allBooks);
} catch (error) {
    res.send(404).json(error.message);
  }
};

module.exports.addNewBook = async(req, res) => {
    const newBook = new bookSchema(req.body);
    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(409).json(error.message);
    }
};
module.exports.getBook =async(req,res)=>{
    try {
        const book = await bookSchema.findById(req.params.bookId)
        res.status(200).json(book)

        
    } catch (error) {

        res.status(402).json(error.message)
        
    }

}

module.exports.deleteBook = async (req,res)=>{
    try {
        const deletedBook = await bookSchema.findByIdAndDelete(req.params.bookId)
        res.status(200).json(deletedBook)
    } catch (error) {

        res.status(409).json(error.message)
        
    }
}

module.exports.updateBook = async (req,res) =>{
    try {
       const updatedBook = await bookSchema.findByIdAndUpdate(req.params.bookId, req.body, {new:true})        
       res.status(200).json(updatedBook)
    } catch (error) {
        res.status(400).json(error.message)
    }

}
module.exports.getBookBetweenPoints = async(req,res)=>{
    const {lowPoint , highPoint} = req.params
    try {
        const BookBetweenPoints = await bookSchema.find({
            point :{$gte : lowPoint, $lte :highPoint}
        })
        res.status(200).json(BookBetweenPoints)

        
    } catch (error) {
        res.status(401).json(error.message)
    }

}