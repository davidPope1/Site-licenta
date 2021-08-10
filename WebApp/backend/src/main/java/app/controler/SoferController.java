package app.controler;

import app.dto.MasinaDto;
import app.dto.SoferDto;
import app.dto.SoferMasinaDto;
import app.model.Masina;
import app.model.Sofer;
import app.repository.MasinaRepository;
import app.repository.SoferRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SoferController {

    @Autowired
    SoferRepository soferRepository;
    @Autowired
    MasinaRepository masinaRepository;

    @GetMapping( value = "getSofer/{id}")
    public SoferDto getSofer(@PathVariable("id") int id)
    {
        return convertModelToDto(soferRepository.findById(Long.valueOf(id)).get());
    }



    @GetMapping( value = "getMasiniSofer/{id}")
    public Object getMasiniSofer(@PathVariable("id") int id)
    {
        List<Masina> masini = masinaRepository.getMasiniForSoferId(Long.valueOf(id));
        Set<MasinaDto> masinaDtos = new HashSet<>();

        for(Masina masina : masini)
        {
            masinaDtos.add(convertModelToDto(masina));
        }
        return masinaDtos;
    }


    @GetMapping( value = "getSoferExtra/{id}")
    public SoferMasinaDto getSoferExtra(@PathVariable("id") int id)
    {
        SoferDto soferDto = convertModelToDto(soferRepository.findById(Long.valueOf(id)).get());
        Set<Masina> masini = soferRepository.findById(Long.valueOf(id)).get().getMasina();
        Set<MasinaDto> masinaDtos = new HashSet<>();
        for(Masina masina : masini)
        {
            MasinaDto masinaDto = new MasinaDto(masina.getId(), masina.getNumarInmatriculare(), masina.getSerieCaroserie(), masina.getConsumNormat(), masina.getCategorie(), masina.getMarca(), masina.getModel(), masina.getCapacitateRezervor(), masina.getKilometriiRulati(), masina.getAnFabricatie(), masina.getStartDataItp(), masina.getEndDataItp(), masina.getStartDataAsig(), masina.getEndDataAsig(), masina.getTipCarburant());
            masinaDtos.add(masinaDto);
        }
        SoferMasinaDto soferMasinaDto = new SoferMasinaDto();
        soferMasinaDto.setMasinaDto(masinaDtos);
        soferMasinaDto.setSoferDto(soferDto);

        return soferMasinaDto;
    }

    @GetMapping( value = "getSoferi")
    @ResponseBody
    public List<SoferDto> getSoferi()
    {
        List<Sofer> soferi = soferRepository.findAll();
        List<SoferDto> soferiDto = new ArrayList<>();

        for( Sofer sofer : soferi)
        {
            soferiDto.add(convertModelToDto(sofer));
        }

        return soferiDto;
    }

    private SoferDto convertModelToDto(Sofer sofer)      // auto convert
    {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(sofer, SoferDto.class);

    }

    private MasinaDto convertModelToDto(Masina masina)      // auto convert
    {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(masina, MasinaDto.class);

    }

    @GetMapping( value = "getSoferByCnp/{id}")
    public Sofer getSoferByCnp(@PathVariable("id") String id)
    {
        return  soferRepository.getSoferByCnp(id);
    }

    @PostMapping(value = "sofer/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Sofer createSofer(@RequestBody Sofer student) {
        return soferRepository.save(student);
    }

    @PutMapping(value = "sofer/update", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Sofer updateSofer(@RequestBody Sofer student) {
        return this.soferRepository.save(student);
    }

    @DeleteMapping(value = "sofer/delete")
    public void deleteStudent(@RequestParam("id") Long id) {
        if (this.soferRepository.existsById(id)) {
            this.soferRepository.deleteById(id);
        }
    }
}
