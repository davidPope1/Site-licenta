package app.repository;

import app.model.Sofer;
import app.model.SoferMasina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SoferMasinaRepository extends JpaRepository<SoferMasina, Long> {
    @Query(nativeQuery = true, value = "SELECT masina_id FROM public.soferi_masini where soferi_masini.sofer_id=?")
    List<Long> getMasiniList(Long idSofer);
//
//    @Query(nativeQuery = true, value = "select * from sofer  where sofer.sofer_id=? and sofer.masina_id=?")
//    Sofer getSoferByIdAndMasina(Long idSofer, Long idMasina);
//
//    @Query(nativeQuery = true, value = "select * from sofer  where sofer.cnp=?")
//    Sofer getSoferByCnp(String cnp);
}
