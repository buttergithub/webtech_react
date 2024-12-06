package com.auca.onlineQuizApp.model;

public class UserDTO {
    private Long id;
    private String username;
    private String password;
    private String email;
    private Role role;
    private String status;

    // Add getters, setters, and constructors

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public UserDTO(Long id, String username, String password, String email, String role, String status) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;


    }
}

