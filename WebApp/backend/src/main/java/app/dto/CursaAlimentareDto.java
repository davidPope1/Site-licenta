package app.dto;

import java.util.Set;

public class CursaAlimentareDto {

    private CursaDto cursaDto;
    private Set<AlimentareDto> alimentareDto;

    public CursaAlimentareDto(){}

    public CursaAlimentareDto(CursaDto cursaDto, Set<AlimentareDto> alimentareDto) {
        this.cursaDto = cursaDto;
        this.alimentareDto = alimentareDto;
    }

    public CursaDto getCursaDto() {
        return cursaDto;
    }

    public void setCursaDto(CursaDto cursaDto) {
        this.cursaDto = cursaDto;
    }

    public Set<AlimentareDto> getAlimentareDto(Set<AlimentareDto> alimentareDtos) {
        return alimentareDto;
    }

    public void setAlimentareDto(Set<AlimentareDto> alimentareDto) {
        this.alimentareDto = alimentareDto;
    }
}
