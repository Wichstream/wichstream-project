package br.com.wichstream.api.models;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(	name = "tb_user",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "name"),
                @UniqueConstraint(columnNames = "email")
        })
public class User implements Serializable {
    @Id
    @Column(name = "user_id")
    private String id;

    @NotBlank
    @Size(max = 250)
    @Column(name = "name")
    private String username;

    @NotBlank
    @Size(max = 250)
    @Email
    @Column(name = "email")
    private String email;

    @Column(name = "img_url")
    private String imgUrl;

    @Column(name = "email_verified")
    private Boolean emailVerified;

    @Column(name = "dt_birthday")
    private LocalDate dt_birthday;

    @Column(name = "gender")
    @Size(max = 50)
    private String gender;

    @NotBlank
    @Size(max = 250)
    @Column(name = "password")
    private String password;

    @OneToOne
    @JoinColumn(name = "provider_id")
    private Provider provider;

    @Column(name = "dt_dtIncluded")
    private LocalDateTime dtIncluded;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(	name = "tb_users_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public User() {
    }

    public User(String id, String username, String email, String password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }


    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Boolean getEmailVerified() {
        return emailVerified;
    }

    public void setEmailVerified(Boolean emailVerified) {
        this.emailVerified = emailVerified;
    }

    public LocalDate getDt_birthday() {
        return dt_birthday;
    }

    public void setDt_birthday(LocalDate dt_birthday) {
        this.dt_birthday = dt_birthday;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public LocalDateTime getDtIncluded() {
        return dtIncluded;
    }

    public void setDtIncluded(LocalDateTime dtIncluded) {
        this.dtIncluded = dtIncluded;
    }
}
