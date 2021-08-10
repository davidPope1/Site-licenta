package app.dto;

import java.util.Set;

public class MasinaSoferDto {

    private MasinaDto masinaDto;
    private Set<SoferDto> soferDto;

    public MasinaSoferDto(){}

    public MasinaSoferDto(MasinaDto masinaDto, Set<SoferDto> soferDto) {
        this.masinaDto = masinaDto;
        this.soferDto = soferDto;
    }

    public MasinaDto getMasinaDto() {
        return masinaDto;
    }

    public void setMasinaDto(MasinaDto masinaDto) {
        this.masinaDto = masinaDto;
    }

    public Set<SoferDto> getSoferDto() {
        return soferDto;
    }

    public void setSoferDto(Set<SoferDto> soferDto) {
        this.soferDto = soferDto;
    }
}
