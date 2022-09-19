package br.com.wichstream.api.models;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(	name = "tb_stream")
public class Stream implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stream_id")
    private Integer streamId;
    @Column(name = "name")
    private String name;
    @Column(name = "dt_included")
    private LocalDateTime dtIncluded;

    public Stream() {}

    public Stream(Integer streamId, String name, LocalDateTime dtIncluded) {
        this.streamId = streamId;
        this.name = name;
        this.dtIncluded = dtIncluded;
    }

    public Integer getStreamId() {
        return streamId;
    }

    public void setStreamId(Integer streamId) {
        this.streamId = streamId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getDtIncluded() {
        return dtIncluded;
    }

    public void setDtIncluded(LocalDateTime dtIncluded) {
        this.dtIncluded = dtIncluded;
    }
}
