package app.dto;

import javax.persistence.Column;

public class MasinaDto {
    private Long id;
    private String numarInmatriculare;
    private String serieCaroserie;
    private float consumNormat;
    private String categorie;
    private String marca;
    private String model;
    private int capacitateRezervor;
    private long kilometriiRulati;
    private int anFabricatie;
    private String startDataItp;
    private String endDataItp;
    private String startDataAsig;
    private String endDataAsig;
    private String tipCarburant;

    public MasinaDto(){

    }

    public MasinaDto(Long id, String numarInmatriculare, String serieCaroserie, float consumNormat, String categorie, String marca, String model, int capacitateRezervor, long kilometriiRulati, int anFabricatie, String startDataItp, String endDataItp, String startDataAsig, String endDataAsig, String tipCarburant) {
        this.id = id;
        this.numarInmatriculare = numarInmatriculare;
        this.serieCaroserie = serieCaroserie;
        this.consumNormat = consumNormat;
        this.categorie = categorie;
        this.marca = marca;
        this.model = model;
        this.capacitateRezervor = capacitateRezervor;
        this.kilometriiRulati = kilometriiRulati;
        this.anFabricatie = anFabricatie;
        this.startDataItp = startDataItp;
        this.endDataItp = endDataItp;
        this.startDataAsig = startDataAsig;
        this.endDataAsig = endDataAsig;
        this.tipCarburant = tipCarburant;
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

    public String getSerieCaroserie() {
        return serieCaroserie;
    }

    public void setSerieCaroserie(String serieCaroserie) {
        this.serieCaroserie = serieCaroserie;
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

    public String getTipCarburant() {
        return tipCarburant;
    }

    public void setTipCarburant(String tipCarburant) {
        this.tipCarburant = tipCarburant;
    }
}
