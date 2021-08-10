package app.repository;

import app.model.Sofer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SoferRepository extends JpaRepository<Sofer, Long> {
    @Query(nativeQuery = true, value = "select * from sofer  where sofer.sofer_id=?")
    Sofer getSoferById(Long idSofer);

    @Query(nativeQuery = true, value = "select * from sofer  where sofer.sofer_id=? and sofer.masina_id=?")
    Sofer getSoferByIdAndMasina(Long idSofer, Long idMasina);

    @Query(nativeQuery = true, value = "select * from sofer  where sofer.cnp=?")
    Sofer getSoferByCnp(String cnp);
}
