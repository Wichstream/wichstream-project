package br.com.wichstream.api.services;

import br.com.wichstream.api.models.Comment;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {
    @Override
    public Comment saveComment(Comment comment) {
        return null;
    }

    @Override
    public List<Comment> getAllComments() {
        return null;
    }
}
