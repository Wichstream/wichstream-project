package br.com.wichstream.api.models;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(	name = "tb_content")
public class Content implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "content_id")
    private Integer contentId;

    @OneToOne
    @JoinColumn(name = "stream_id")
    private Stream stream;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "dt_launched")
    private LocalDate dtLaunched;

    @Column(name = "dt_included")
    private LocalDateTime dtIncluded;

    @Column(name = "likes")
    private Integer likes;

    @Column(name = "dislikes")
    private Integer dislikes;

    @Column(name = "shared")
    private Integer shared;

    public Content() {}

    public Content(Integer contentId, Stream stream, String title, String description, LocalDate dtLaunched, LocalDateTime dtIncluded, Integer likes, Integer dislikes, Integer shared) {
        this.contentId = contentId;
        this.stream = stream;
        this.title = title;
        this.description = description;
        this.dtLaunched = dtLaunched;
        this.dtIncluded = dtIncluded;
        this.likes = likes;
        this.dislikes = dislikes;
        this.shared = shared;
    }

    public Integer getContentId() {
        return contentId;
    }

    public void setContentId(Integer contentId) {
        this.contentId = contentId;
    }

    public Stream getStream() {
        return stream;
    }

    public void setStream(Stream stream) {
        this.stream = stream;
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

    public LocalDate getDtLaunched() {
        return dtLaunched;
    }

    public void setDtLaunched(LocalDate dtLaunched) {
        this.dtLaunched = dtLaunched;
    }

    public LocalDateTime getDtIncluded() {
        return dtIncluded;
    }

    public void setDtIncluded(LocalDateTime dtIncluded) {
        this.dtIncluded = dtIncluded;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public Integer getDislikes() {
        return dislikes;
    }

    public void setDislikes(Integer dislikes) {
        this.dislikes = dislikes;
    }

    public Integer getShared() {
        return shared;
    }

    public void setShared(Integer shared) {
        this.shared = shared;
    }
}
