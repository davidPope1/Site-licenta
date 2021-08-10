package app.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class SuperUser {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_id", unique = true, nullable = false)
    private Long id;
    @Column(name = "user_name", length = 100)
    private String userName;
    @Column(name = "user_password", length = 100)
    private String userPassword;

    public SuperUser() {

    }

    public SuperUser(String userName) {
        super();
        this.userName = userName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }


}

