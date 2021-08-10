package app.model;
import com.sun.xml.internal.ws.developer.Serialization;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
//@Serialization
@Table(name = "masina")
public class Masina {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "masina_id", unique = true, nullable = false)
    private Long id;
    @Column(name = "numar_inmatriculare", length = 100)
    private String numarInmatriculare;
    @Column(name = "serie_caroserie", length = 100)
    private String serieCaroserie;
    @Column(name = "consum_normat", length = 100)
    private float consumNormat;
    @Column(name = "categorie", length = 100)
    private String categorie;
    @Column(name = "marca", length = 100)
    private String marca;
    @Column(name = "model", length = 100)
    private String model;
    @Column(name = "capacitate_rezervor", length = 100)
    private int capacitateRezervor;
    @Column(name = "kilometrii_rulati", length = 100)
    private long kilometriiRulati;
    @Column(name = "an_fabricatie", length = 100)
    private int anFabricatie;
    @Column(name = "start_data_itp", length = 100)
    private String startDataItp;
    @Column(name = "end_data_itp", length = 100)
    private String endDataItp;
    @Column(name = "start_data_asig", length = 100)
    private String startDataAsig;
    @Column(name = "end_data_asig", length = 100)
    private String endDataAsig;
    @Column(name = "tip_carburant", length = 100)
    private String tipCarburant;

//    @OneToOne(cascade = { CascadeType.MERGE, CascadeType.REMOVE }, fetch = FetchType.EAGER)
//    @JoinColumn(name = "sofer_id")
//
//    private Sofer sofer;

    @ManyToMany(mappedBy = "masina", fetch = FetchType.LAZY)
    private Set<Sofer> sofer = new HashSet<>();


    public Masina(){
    }

    public Masina(String serieCaroserie, String marca, String model, String numarInmatriculare, String categorie, float consumNormat, int capacitateRezervor, long kilometriiRulati){
        super();
        this.serieCaroserie = serieCaroserie;
        this.marca = marca;
        this.model = model;
        this.numarInmatriculare = numarInmatriculare;
        this.categorie = categorie;
        this.consumNormat = consumNormat;
        this. capacitateRezervor = capacitateRezervor;
        this.kilometriiRulati = kilometriiRulati;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumarInmatriculare() {
        return numarInmatriculare;
    }

    public void setNumarInmatriculare(String numarInmatriculare) {
        this.numarInmatriculare = numarInmatriculare;
    }

    public float getConsumNormat() {
        return consumNormat;
    }

    public void setConsumNormat(float consumNormat) {
        this.consumNormat = consumNormat;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getCapacitateRezervor() {
        return capacitateRezervor;
    }

    public void setCapacitateRezervor(int capacitateRezervor) {
        this.capacitateRezervor = capacitateRezervor;
    }

    public long getKilometriiRulati() {
        return kilometriiRulati;
    }

    public void setKilometriiRulati(long kilometriiRulati) {
        this.kilometriiRulati = kilometriiRulati;
    }

    public int getAnFabricatie() {
        return anFabricatie;
    }

    public void setAnFabricatie(int anFabricatie) {
        this.anFabricatie = anFabricatie;
    }

    public String getStartDataItp() {
        return startDataItp;
    }

    public void setStartDataItp(String startDataItp) {
        this.startDataItp = startDataItp;
    }

    public String getEndDataItp() {
        return endDataItp;
    }

    public void setEndDataItp(String endDataItp) {
        this.endDataItp = endDataItp;
    }

    public String getStartDataAsig() {
        return startDataAsig;
    }

    public void setStartDataAsig(String startDataAsig) {
        this.startDataAsig = startDataAsig;
    }

    public String getEndDataAsig() {
        return endDataAsig;
    }

    public void setEndDataAsig(String endDataAsig) {
        this.endDataAsig = endDataAsig;
    }

//    public Sofer getSofer() {
//        return sofer;
//    }
//
//    public void setSofer(Sofer sofer) {
//        this.sofer = sofer;
//    }


    public Set<Sofer> getSofer() {
        return sofer;
    }

    public void setSofer(Set<Sofer> sofer) {
        this.sofer = sofer;
    }

    public String getTipCarburant() {
        return tipCarburant;
    }

    public void setTipCarburant(String tipCarburant) {
        this.tipCarburant = tipCarburant;
    }

    public String getSerieCaroserie() {
        return serieCaroserie;
    }

    public void setSerieCaroserie(String numarCaroserie) {
        this.serieCaroserie = numarCaroserie;
    }

}

