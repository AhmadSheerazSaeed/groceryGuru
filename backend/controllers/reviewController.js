import { StatusCodes } from "http-status-codes";
import Review from "../models/Review.js";
import Product from "../models/Product.js";

export const productRating = async (req, res) => {
  const productId = req.params.productId;
  const rating= req.params.rating
  try {
    const ratedProduct = await Review.findOne(
      {productId:productId},
      {rating:rating},
    );
    if (!ratedProduct) {
      return res.status(StatusCodes.NOT_FOUND).json("rating not found");
    }
    return res.status(StatusCodes.OK).json(ratedProduct);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const allReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(StatusCodes.OK).json(reviews);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const newReview = async (req, res) => {
  try {
    const reviewExist = await Review.findOne({
      customerId: req.body.customerId,
      productId: req.body.productId,
    })
    if (reviewExist) {
      console.log(`review exist ${req.body.productId} for reviewId=>${reviewExist._id}`);
      const updatedReview = await Review.findByIdAndUpdate(
        reviewExist._id,
        {
          rating: req.body.rating, 
          dateOfReview: new Date()
        }, 
        {new: true}
        );
      return res
      .status(StatusCodes.CREATED)
      .json({ message: "review created", updatedReview });
    } else {
      const createdReview = await Review.create({
        customerId: req.body.customerId,
        productId: req.body.productId,
        rating: req.body.rating,
        comment: req.body.comment,
        dateOfReview: req.body.dateOfReview,
      });
      
      // Update the product with the newly created review
      const product = await Product.findById(req.body.productId);
      if (product) {
        product.reviews.push(createdReview._id); // Add the review reference to the product's reviews array
        await product.save();
      }

      return res
      .status(StatusCodes.CREATED)
      .json({ message: "review created", createdReview });
    }
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const reviewsByProduct = async (req, res) => {
  try {
    const productIdToRewiew = await Review.findById({
      productId: req.params.productId,
    });
    if (!productIdToRewiew) {
      return res.status(StatusCodes.NOT_FOUND).json("product Id not found");
    }
    return res.status(StatusCodes.OK).json(productIdToRewiew);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const editReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      {
        customerId: req.body.customerId,
        productId: req.body.productId,
        rating: req.body.rating,
        comment: req.body.comment,
        dateOfReview: req.body.dateOfReview,
      },
      { new: true }
    );
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndRemove({
      _id: req.params.id,
    });
    if (!review) {
      return res.status(StatusCodes.NOT_FOUND).json("review not found");
    }
    return res
      .status(StatusCodes.OK)
      .json({ message: "rewiew deleted", deleteReview: review });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export default {
  allReviews,
  newReview,
  editReview,
  productRating,
  reviewsByProduct,
  deleteReview,
};
