package br.com.wichstream.api.models;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(	name = "tb_review")
public class Review  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Integer reviewId;

    @ManyToMany
    @JoinTable(
            name = "tb_reviews_users",
            joinColumns = @JoinColumn(name = "review_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> user;

    @ManyToMany
    @JoinTable(
            name = "tb_reviews_contents",
            joinColumns = @JoinColumn(name = "review_id"),
            inverseJoinColumns = @JoinColumn(name = "content_id")
    )
    private List<Content> content;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "dt_included")
    private LocalDateTime dtIncluded;

    public Review() {}

    public Review(Integer reviewId, String title, String description, LocalDateTime dtIncluded) {
        this.reviewId = reviewId;
        this.title = title;
        this.description = description;
        this.dtIncluded = dtIncluded;
    }

    public Integer getReviewId() {
        return reviewId;
    }

    public void setReviewId(Integer reviewId) {
        this.reviewId = reviewId;
    }

    public List<User> getUser() {
        return user;
    }

    public void setUser(List<User> user) {
        this.user = user;
    }

    public List<Content> getContent() {
        return content;
    }

    public void setContent(List<Content> content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getDtIncluded() {
        return dtIncluded;
    }

    public void setDtIncluded(LocalDateTime dtIncluded) {
        this.dtIncluded = dtIncluded;
    }
}
