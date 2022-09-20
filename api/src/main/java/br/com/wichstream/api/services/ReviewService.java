package br.com.wichstream.api.services;

import br.com.wichstream.api.models.Review;

import java.util.List;

public interface ReviewService {
    public Review saveReview(Review review);
    public List<Review> getAllReviews();
}
