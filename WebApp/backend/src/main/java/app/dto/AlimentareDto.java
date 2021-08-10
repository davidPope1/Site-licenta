package app.dto;

import javax.persistence.Column;

public class AlimentareDto {
    private Long id;
    private String dataOra;
    private double numarLitrii;
    private double pretTotal;
    private double pretUnitar;

    public AlimentareDto(){
    }

    public AlimentareDto(Long id, String dataOra, double numarLitrii, double pretTotal, double pretUnitar) {
        this.id = id;
        this.dataOra = dataOra;
        this.numarLitrii = numarLitrii;
        this.pretTotal = pretTotal;
        this.pretUnitar = pretUnitar;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public double getPretUnitar() {
        return pretUnitar;
    }

    public void setPretUnitar(double pretUnitar) {
        this.pretUnitar = pretUnitar;
    }
}
