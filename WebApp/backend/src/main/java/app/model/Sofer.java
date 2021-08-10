package app.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "sofer")
public class Sofer {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "sofer_id", unique = true, nullable = false)
    private Long id;
    @Column(name = "nume_prenume", length = 100)
    private String numePrenume;
    @Column(name = "categorii_permis", length = 100)
    private String categoriiPermis;
    @Column(name = "data_expirare_permis", length = 100)
    private String dataExpirarePermis;
    @Column(name = "cnp", length = 100)
    private String cnp;

//    @OneToOne(cascade = { CascadeType.MERGE, CascadeType.REMOVE }, fetch = FetchType.EAGER)
//    @JoinColumn(name = "masina_id")
//
//    private Masina masina;


    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinTable(name = "soferi_masini",
            joinColumns = {
                    @JoinColumn(name = "sofer_id", referencedColumnName = "sofer_id",
                            nullable = false, updatable = false)},
            inverseJoinColumns = {
                    @JoinColumn(name = "masina_id", referencedColumnName = "masina_id",
                            nullable = false, updatable = false)})
    private Set<Masina> masina = new HashSet<>();


    public Sofer(){
    }

    public Sofer(String numePrenume, String categoriiPermis, String dataExpirarePermis){
        super();
        this.numePrenume = numePrenume;
        this.categoriiPermis = categoriiPermis;
        this.dataExpirarePermis = dataExpirarePermis;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumePrenume() {
        return numePrenume;
    }

    public void setNumePrenume(String numePrenume) {
        this.numePrenume = numePrenume;
    }

    public String getCategoriiPermis() {
        return categoriiPermis;
    }

    public void setCategoriiPermis(String categoriiPermis) {
        this.categoriiPermis = categoriiPermis;
    }

    public String getDataExpirarePermis() {
        return dataExpirarePermis;
    }

    public void setDataExpirarePermis(String dataExpirarePermis) {
        this.dataExpirarePermis = dataExpirarePermis;
    }

//    public Masina getMasina() {
//        return masina;
//    }
//
//    public void setMasina(Masina masina) {
//        this.masina = masina;
//    }

    public Set<Masina> getMasina() {
        return masina;
    }

    public void setMasina(Set<Masina> masina) {
        this.masina = masina;
    }

    public String getCnp() {
        return cnp;
    }

    public void setCnp(String cnp) {
        this.cnp = cnp;
    }
}

