package com.gmail.mbotyuk.springbootmvcdata.models;


import com.fasterxml.jackson.annotation.*;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "ROLES")
public class Role implements GrantedAuthority {

    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    private String nameRole;

    @ManyToMany(mappedBy = "roles", fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<User> users = new HashSet<>();

    public Role() {
    }

    public Role(Long id) {
        this.id = id;
    }

    public Role(String nameRole) {
        this.nameRole = nameRole;
    }


    public Role(Long id, String nameRole) {
        this.id = id;
        this.nameRole = nameRole;
    }

    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameRole() {
        return nameRole;
    }

    public void setNameRole(String name) {
        this.nameRole = nameRole;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    @Override
    public String toString() {
        return nameRole;
    }

        @Override
    public String getAuthority() {
        return getNameRole();
    }
}