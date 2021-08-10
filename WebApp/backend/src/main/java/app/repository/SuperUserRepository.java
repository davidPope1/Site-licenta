package app.repository;

import app.model.SuperUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SuperUserRepository extends JpaRepository<SuperUser, Long> {
    @Query(nativeQuery = true, value = "select * from users where users.id=?")
    SuperUser getSuperUserById(Long id);

    @Query(nativeQuery = true, value = "select * from users where users.user_name=? and users.user_password=?")
    SuperUser getSuperUserByEmailAndPassword(String email, String password);

}
