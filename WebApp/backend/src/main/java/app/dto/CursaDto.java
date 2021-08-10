package app.dto;

import javax.persistence.Column;

public class CursaDto {
    private Long id;
    private String numeSofer;
    private String modelMarcaMasina;
    private String dataOraPreluare;
    private String dataOraPredare;
    private Double numarKilometriParcursi;
    private Double combustibilConsumat;

    public CursaDto(){

    }

    public CursaDto(Long id, String numeSofer, String modelMarcaMasina, String dataOraPreluare, String dataOraPredare, Double numarKilometriParcursi, Double combustibilConsumat) {
        this.id = id;
        this.numeSofer = numeSofer;
        this.modelMarcaMasina = modelMarcaMasina;
        this.dataOraPreluare = dataOraPreluare;
        this.dataOraPredare = dataOraPredare;
        this.numarKilometriParcursi = numarKilometriParcursi;
        this.combustibilConsumat = combustibilConsumat;
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

    public double getNumarKilometriParcursi() {
        return numarKilometriParcursi;
    }

    public void setNumarKilometriParcursi(double numarKilometriParcursi) {
        this.numarKilometriParcursi = numarKilometriParcursi;
    }

    public double getCombustibilConsumat() {
        return combustibilConsumat;
    }

    public void setCombustibilConsumat(double combustibilConsumat) {
        this.combustibilConsumat = combustibilConsumat;
    }
}
