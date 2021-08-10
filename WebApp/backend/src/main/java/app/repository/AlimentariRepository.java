package app.repository;


import app.model.Alimentari;
import app.model.Cursa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlimentariRepository extends JpaRepository<Alimentari, Long> {
    @Query(nativeQuery = true, value = "select alimentari.* from alimentari join curse where curse.cursa_id=? \n")
    List<Alimentari> getAlimentariByCursaId(Long id);

    @Query(nativeQuery = true, value = "SELECT alimentari.* from alimentari where alimentari.alimentari_id=?\n")
    Alimentari getAlimentariById(String id);

    @Query(nativeQuery = true, value = "select * from alimentari\n")
    List<Alimentari> getAllAlimentari();
}
