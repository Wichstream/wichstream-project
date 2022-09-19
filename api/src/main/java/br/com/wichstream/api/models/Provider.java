package br.com.wichstream.api.models;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(	name = "tb_provider")
public class Provider implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "provider_id")
    private Integer providerId;
    @Column(name = "name")
    private String name;
    @Column(name = "dt_included")
    private LocalDateTime dtIncluded;

    public Provider() {}

    public Provider(Integer providerId, String name, LocalDateTime dtIncluded) {
        this.providerId = providerId;
        this.name = name;
        this.dtIncluded = dtIncluded;
    }

    public Integer getProviderId() {
        return providerId;
    }

    public void setProviderId(Integer streamId) {
        this.providerId = providerId;
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
