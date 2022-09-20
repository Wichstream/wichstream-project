package br.com.wichstream.api.services;

import br.com.wichstream.api.models.Comment;

import java.util.List;

public interface CommentService {
    public Comment saveComment(Comment comment);
    public List<Comment> getAllComments();
}
