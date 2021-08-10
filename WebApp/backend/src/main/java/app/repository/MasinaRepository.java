package app.repository;

import app.model.Masina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MasinaRepository extends JpaRepository<Masina, Long> {
    @Query(nativeQuery = true, value = "select * from masina where serie_caroserie=? and numar_inmatriculare = ?")
    Masina getMasinaBySerialAndPlate(String serialNumber, String licencePlate);

    @Query(nativeQuery = true, value = "select * from masina where numar_inmatriculare = ?")
    Masina getMasinaByPlate(String licencePlate);

    @Query(nativeQuery = true, value = "select * from masina where sofer_id=?")
    Masina getMasinaBySoferId(Long id);

    @Query(nativeQuery = true, value = "SELECT * from  masina where masina_id IN (SELECT masina_id FROM public.soferi_masini where soferi_masini.sofer_id=?)")
    List<Masina> getMasiniForSoferId(Long id);

    @Query(nativeQuery = true, value = "SELECT * from  masina where masina_id IN(select curse.masina_id from alimentari join  curse on alimentari.cursae_id = curse.cursa_id where alimentari.alimentare_id=?)")
    Masina getMsinaByIDAliemntare(int idAlimentare);
}
