package app.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "curse")
public class Cursa {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "cursa_id", unique = true, nullable = false)
    private Long id;
    @Column(name = "nume_prenume_sofer", length = 100)
    private String numeSofer;
    @Column(name = "model_marca_masina", length = 100)
    private String modelMarcaMasina;
    @Column(name = "data_ora_preluare", length = 100)
    private String dataOraPreluare;
    @Column(name = "data_ora_predare", length = 100)
    private String dataOraPredare;
    @Column(name = "numar_kilometri_parcursi")
    private Double numarKilometriParcursi;
    @Column(name = "combustibil_consumat")
    private Double combustibilConsumat;

    @OneToMany(cascade = { CascadeType.MERGE, CascadeType.REMOVE }, fetch = FetchType.EAGER)
    @JoinColumn(name = "alimentare_id")

    private Set<Alimentari> alimentari= new HashSet<>();

    @OneToOne(cascade = { CascadeType.MERGE, CascadeType.REMOVE }, fetch = FetchType.EAGER)
    @JoinColumn(name = "masina_id")

    private Masina masina;

    @OneToOne(cascade = { CascadeType.MERGE, CascadeType.REMOVE }, fetch = FetchType.EAGER)
    @JoinColumn(name = "sofer_id")

    private Sofer sofer;


    public Cursa(Long id, String numeSofer, String modelMarcaMasina, String dataOraPredare, String dataOraPreluare, Double numarKilometriiParcursi, Double combustibilRamas) {
        this.id = id;
        this.numeSofer = numeSofer;
        this.modelMarcaMasina = modelMarcaMasina;
        this.dataOraPredare = dataOraPredare;
        this.dataOraPreluare = dataOraPreluare;
        this.numarKilometriParcursi = numarKilometriiParcursi;
        this.combustibilConsumat = combustibilRamas;
    }

    public Cursa() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumeSofer() {
        return numeSofer;
    }

    public void setNumeSofer(String numeSofer) {
        this.numeSofer = numeSofer;
    }

    public String getModelMarcaMasina() {
        return modelMarcaMasina;
    }

    public void setModelMarcaMasina(String modelMarcaMasina) {
        this.modelMarcaMasina = modelMarcaMasina;
    }

    public String getDataOraPreluare() {
        return dataOraPreluare;
    }

    public void setDataOraPreluare(String dataOraPreluare) {
        this.dataOraPreluare = dataOraPreluare;
    }

    public String getDataOraPredare() {
        return dataOraPredare;
    }

    public void setDataOraPredare(String dataOraPredare) {
        this.dataOraPredare = dataOraPredare;
    }

    public Double getNumarKilometriParcursi() {
        return numarKilometriParcursi;
    }

    public void setNumarKilometriParcursi(Double numarKilometriParcursi) {
        this.numarKilometriParcursi = numarKilometriParcursi;
    }

    public Double getCombustibilConsumat() {
        return combustibilConsumat;
    }

    public void setCombustibilConsumat(Double combustibilConsumat) {
        this.combustibilConsumat = combustibilConsumat;
    }

    public Set<Alimentari> getAlimentari() {
        return alimentari;
    }

    public void setAlimentari(Set<Alimentari> alimentari) {
        this.alimentari = alimentari;
    }

    public Masina getMasina() {
        return masina;
    }

    public void setMasina(Masina masina) {
        this.masina = masina;
    }

    public Sofer getSofer() {
        return sofer;
    }

    public void setSofer(Sofer sofer) {
        this.sofer = sofer;
    }
}

