package app.controler;

import app.dto.MasinaDto;
import app.dto.MasinaSoferDto;
import app.dto.SoferDto;
import app.model.Masina;
import app.model.Sofer;
import app.repository.MasinaRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MasinaController {

    @Autowired
    MasinaRepository masinaRepository;

    @GetMapping( value = "getMasina/{id}")
    public MasinaDto getMasina(@PathVariable("id") int id)
    {
        return convertModelToDto(masinaRepository.findById(Long.valueOf(id)).get());
    }

    @GetMapping( value = "getMasinaExtra/{id}")
    public MasinaSoferDto getMasinaExtra(@PathVariable("id") int id)
    {
        MasinaDto masinaDto = convertModelToDto(masinaRepository.findById(Long.valueOf(id)).get());
        Set<Sofer> soferi = masinaRepository.findById(Long.valueOf(id)).get().getSofer();
        Set<SoferDto> soferDtos = new HashSet<>();
        for(Sofer sofer : soferi)
        {
            SoferDto soferDto = new SoferDto(sofer.getId(),sofer.getNumePrenume(),sofer.getCategoriiPermis(),sofer.getDataExpirarePermis(),sofer.getCnp());
            soferDtos.add(soferDto);
        }
        MasinaSoferDto masinaSoferDto = new MasinaSoferDto();
        masinaSoferDto.setMasinaDto(masinaDto);
        masinaSoferDto.setSoferDto(soferDtos);

        return masinaSoferDto;
    }


    @GetMapping( value = "getMasini")
    @ResponseBody
    public List<MasinaDto> getMasini()
    {
        List<Masina> masini = masinaRepository.findAll();
        List<MasinaDto> masiniDto = new ArrayList<>();

        for(Masina masina : masini)
        {
            masiniDto.add(convertModelToDto(masina));
        }

        return masiniDto;
    }


    @GetMapping( value = "getMasiniByAlimentareId/{id}")
    @ResponseBody
    public List<MasinaDto> getMasiniByAlimentare(@PathVariable("id") int id)
    {
        Masina masina = masinaRepository.getMsinaByIDAliemntare(id);
        List<MasinaDto> masinaDto = new ArrayList<>();
         masinaDto.add(convertModelToDto(masina));
        return masinaDto;
    }


    @GetMapping( value = "getNumarCarburantiMasini")
    public List<Integer> getNumarCarburantiMasini()
    {
        List<Masina> masini = masinaRepository.findAll();
        List<Integer> masiniDto = new ArrayList<>();
        Integer GPL=0;
        Integer Benzina=0;
        Integer Diesel=0;
        Integer Electric=0;
        Integer Hybrid=0;


        for(Masina masina : masini)
        {
            switch (masina.getTipCarburant())
            {
                case "GPL":
                    GPL++;
                    break;
                case "Benzina":
                    Benzina++;
                    break;
                case "Diesel":
                    Diesel++;
                    break;
                case "Electric":
                    Electric++;
                    break;
                case "Hybrid":
                    Hybrid++;
                    break;
                default:
                    // code block
            }
        }
        masiniDto.add(GPL);
        masiniDto.add(Benzina);
        masiniDto.add(Diesel);
        masiniDto.add(Electric);
        masiniDto.add(Hybrid);

        return masiniDto;
    }


    private MasinaDto convertModelToDto(Masina masina)      // auto convert
    {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(masina, MasinaDto.class);

    }

    @GetMapping( value = "getMasinaByPlate/{id}")
    public Masina getMasinaByPlate(@PathVariable("id") String id)
    {
        return  masinaRepository.getMasinaByPlate(id);
    }

    @PostMapping(value = "masina/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Masina createMasina(@RequestBody Masina masina) {
        return masinaRepository.save(masina);
    }

    @PutMapping(value = "masina/update", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Masina updateMasina(@RequestBody Masina masina) {
        return this.masinaRepository.save(masina);
    }

    @DeleteMapping(value = "masina/delete")
    public void deleteMasina(@RequestParam("id") Long id) {
        if (this.masinaRepository.existsById(id)) {
            this.masinaRepository.deleteById(id);
        }
    }


}
