package br.com.wichstream.api.models;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(	name = "tb_comment")
public class Comment implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Integer commentId;

    @ManyToOne
    @JoinColumn(name = "review_id")
    private Review review;

    @ManyToMany
    @JoinTable(
            name = "tb_comments_users",
            joinColumns = @JoinColumn(name = "comment_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> user;

    @Column(name = "name")
    private String comment;

    @Column(name = "dt_included")
    private LocalDateTime dtIncluded;

    public Comment() {}

    public Comment(Integer commentId, String comment, LocalDateTime dtIncluded) {
        this.commentId = commentId;
        this.comment = comment;
        this.dtIncluded = dtIncluded;
    }

    public Integer getCommentId() {
        return commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }



    public List<User> getUser() {
        return user;
    }

    public void setUser(List<User> user) {
        this.user = user;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public LocalDateTime getDtIncluded() {
        return dtIncluded;
    }

    public void setDtIncluded(LocalDateTime dtIncluded) {
        this.dtIncluded = dtIncluded;
    }
}
