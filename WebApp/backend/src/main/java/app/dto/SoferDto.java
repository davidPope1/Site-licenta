package app.dto;

import javax.persistence.Column;

public class SoferDto {
    private Long id;
    private String numePrenume;
    private String categoriiPermis;
    private String dataExpirarePermis;
    private String cnp;

    public SoferDto(){}

    public SoferDto(Long id, String numePrenume, String categoriiPermis, String dataExpirarePermis, String cnp) {
        this.id = id;
        this.numePrenume = numePrenume;
        this.categoriiPermis = categoriiPermis;
        this.dataExpirarePermis = dataExpirarePermis;
        this.cnp = cnp;
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

    public String getCnp() {
        return cnp;
    }

    public void setCnp(String cnp) {
        this.cnp = cnp;
    }
}
