package app.dto;

import java.util.Set;

public class SoferMasinaDto {

    private SoferDto soferDto;
    private Set<MasinaDto> masinaDto;

    public SoferMasinaDto(){}

    public SoferMasinaDto(SoferDto soferDto, Set<MasinaDto> masinaDto) {
        this.masinaDto = masinaDto;
        this.soferDto = soferDto;
    }

    public SoferDto getSoferDto() {
        return soferDto;
    }

    public void setSoferDto(SoferDto soferDto) {
        this.soferDto = soferDto;
    }

    public Set<MasinaDto> getMasinaDto() {
        return masinaDto;
    }

    public void setMasinaDto(Set<MasinaDto> masinaDto) {
        this.masinaDto = masinaDto;
    }
}
