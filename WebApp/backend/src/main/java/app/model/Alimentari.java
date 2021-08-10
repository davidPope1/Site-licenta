package app.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "alimentari")
public class Alimentari {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "alimentare_id", unique = true, nullable = false)
    private Long id;
    @Column(name = "data_ora", length = 100)
    private String dataOra;
    @Column(name = "numar_litrii")
    private double numarLitrii;
    @Column(name = "pret_total")
    private double pretTotal;
    @Column(name = "pret_unitar")
    private double pretUnitar;

    @ManyToOne(cascade = { CascadeType.MERGE, CascadeType.REMOVE }, fetch = FetchType.EAGER)
    @JoinColumn(name = "cursae_id")
    private Cursa cursa;

    public Alimentari(Long id, String dataOra, double numarLitrii, double pretTotal) {
        this.id = id;
        this.dataOra = dataOra;
        this.numarLitrii = numarLitrii;
        this.pretTotal = pretTotal;
    }

    public Alimentari() {

    }
    public String getDataOra() {
        return dataOra;
    }

    public void setDataOra(String dataOra) {
        this.dataOra = dataOra;
    }

    public double getNumarLitrii() {
        return numarLitrii;
    }

    public void setNumarLitrii(double numarLitrii) {
        this.numarLitrii = numarLitrii;
    }

    public double getPretTotal() {
        return pretTotal;
    }

    public void setPretTotal(double pretTotal) {
        this.pretTotal = pretTotal;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getPretUnitar() {
        return pretUnitar;
    }

    public void setPretUnitar(double pretUnitar) {
        this.pretUnitar = pretUnitar;
    }
}

