package app.repository;

import app.model.Cursa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CursaRepository extends JpaRepository<Cursa, Long> {
    @Query(nativeQuery = true, value = "SELECT curse.* from curse join sofer where sofer.sofer_id=?\n")
    Cursa getCursaBySoferId(Long id);

    @Query(nativeQuery = true, value = "SELECT curse.* from curse join masina where masina.masina_id=?\n")
    Cursa getCursaByMasinaId(Long id);

    @Query(nativeQuery = true, value = "SELECT curse.* from curse where curse.cursa_id=?\n")
    Cursa getCursaById(String id);

    @Query(nativeQuery = true, value = "select * from curse\n")
    List<Cursa> getAllCurse();

}
