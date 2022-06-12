const express = require("express")
const {
    getAllBooks,
    getBook,
    addNewBook,
    updateBook,
    deleteBook,
    getBookBetweenPoints





} = require("../controller/bookController")


const router = express.Router()


router.get("/", getAllBooks)
router.post("/",addNewBook)
router.get("/:bookId",getBook)
router.get("/:lowPoint/:highPoint",getBookBetweenPoints)
 router.put("/:bookId",updateBook)
 router.delete("/:bookId",deleteBook),

module.exports = router;
