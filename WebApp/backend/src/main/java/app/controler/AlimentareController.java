package app.controler;

import app.dto.AlimentareDto;
import app.dto.CursaAlimentareDto;
import app.dto.CursaDto;
import app.model.Alimentari;
import app.model.Cursa;
import app.repository.AlimentariRepository;
import app.repository.CursaRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.text.ParsePosition;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AlimentareController {

    @Autowired
    CursaRepository cursaRepository;
    @Autowired
    AlimentariRepository alimentariRepository;

    @GetMapping( value = "getAlimentare/{id}")
    public AlimentareDto getAlimentare(@PathVariable("id") int id)
    {
        return convertModelToDto(alimentariRepository.findById(Long.valueOf(id)).get());
    }

//    @GetMapping( value = "getAlimentariCurse/{id}")
//    public Object getAlimentariCurse(@PathVariable("id") int id)
//    {
//        List<Alimentari> alimentari = alimentariRepository.getAlimentariByCursaId(Long.valueOf(id));
//        Set<AlimentareDto> alimentareDtos = new HashSet<>();
//
//        for(Alimentari alimentare : alimentari)
//        {
//            alimentareDtos.add(convertModelToDto(alimentare));
//        }
//        return alimentareDtos;
//    }

    @GetMapping( value = "getAlimentareExtra/{id}")
    public CursaAlimentareDto getAlimentareExtra(@PathVariable("id") int id)
    {
        CursaDto cursaDto = convertModelToDto(cursaRepository.findById(Long.valueOf(id)).get());
        Set<Alimentari> alimentari = cursaRepository.findById(Long.valueOf(id)).get().getAlimentari();
        Set<AlimentareDto> alimentareDtos = new HashSet<>();
        for(Alimentari alimentare : alimentari)
        {
            AlimentareDto alimentareDto = new AlimentareDto(alimentare.getId(), alimentare.getDataOra(), alimentare.getNumarLitrii(), alimentare.getPretTotal(), alimentare.getPretUnitar());
            alimentareDtos.add(alimentareDto);
        }
        CursaAlimentareDto cursaAlimentareDto = new CursaAlimentareDto();
        cursaAlimentareDto.setCursaDto(cursaDto);
        cursaAlimentareDto.getAlimentareDto(alimentareDtos);

        return cursaAlimentareDto;
    }


    @GetMapping( value = "getAlimentari")
    @ResponseBody
    public List<AlimentareDto> getAlimentari()
    {
        List<Alimentari> alimentari = alimentariRepository.getAllAlimentari();
        List<AlimentareDto> alimentareDto = new ArrayList<>();

        for(Alimentari alimentare : alimentari)
        {
            alimentareDto.add(convertModelToDto(alimentare));
        }

        return alimentareDto;
    }

    @GetMapping( value = "getAlimentariPerMonth")
    public List<Double> getAlimentariPerMonth()
    {
        List<Alimentari> alimentari = alimentariRepository.getAllAlimentari();
        List<Double> alimentariDto = new ArrayList<>();
        ParsePosition pp1 = new ParsePosition(0);
        Double Ian=0.0;
        Double Feb=0.0;
        Double Mart=0.0;
        Double Apr=0.0;
        Double Mai=0.0;
        Double Iun=0.0;
        Double Iul=0.0;
        Double Aug=0.0;
        Double Sept=0.0;
        Double Oct=0.0;
        Double Nov=0.0;
        Double Dec=0.0;

        for(Alimentari alimentare : alimentari)
        {
            String dataPredare = alimentare.getDataOra();
            if(dataPredare!=null)
            {
                if(alimentare.getNumarLitrii()!=0)
                {String luna= dataPredare.split("-")[1];
                    switch (luna)
                    {
                        case "01":
                            Ian+=alimentare.getNumarLitrii();
                            break;
                        case "02":
                            Feb+=alimentare.getNumarLitrii();
                            break;
                        case "03":
                            Mart+=alimentare.getNumarLitrii();
                            break;
                        case "04":
                            Apr+=alimentare.getNumarLitrii();
                            break;
                        case "05":
                            Mai+=alimentare.getNumarLitrii();
                            break;
                        case "06":
                            Iun+=alimentare.getNumarLitrii();
                            break;
                        case "07":
                            Iul+=alimentare.getNumarLitrii();
                            break;
                        case "08":
                            Aug+=alimentare.getNumarLitrii();
                            break;
                        case "09":
                            Sept+=alimentare.getNumarLitrii();
                            break;
                        case "10":
                            Oct+=alimentare.getNumarLitrii();
                            break;
                        case "11":
                            Nov+=alimentare.getNumarLitrii();
                            break;
                        case "12":
                            Dec+=alimentare.getNumarLitrii();
                            break;
                        default:
                            // code block
                    }
                }
            }
        }
        alimentariDto.add(Ian);
        alimentariDto.add(Feb);
        alimentariDto.add(Mart);
        alimentariDto.add(Apr);
        alimentariDto.add(Mai);
        alimentariDto.add(Iun);
        alimentariDto.add(Iul);
        alimentariDto.add(Aug);
        alimentariDto.add(Sept);
        alimentariDto.add(Oct);
        alimentariDto.add(Nov);
        alimentariDto.add(Dec);
        return alimentariDto;
    }



    private CursaDto convertModelToDto(Cursa cursa)      // auto convert
    {
        ModelMapper modelMapper = new ModelMapper();
//        CursaDto cursaDto = new CursaDto(cursa.getId(), cursa.getNumeSofer(), cursa.getModelMarcaMasina(), cursa.getDataOraPreluare(), cursa.getDataOraPredare(),
//                cursa.getNumarKilometriParcursi(), cursa.getCombustibilConsumat());
        return modelMapper.map(cursa, CursaDto.class);
    }

    private AlimentareDto convertModelToDto(Alimentari alimentare)      // auto convert
    {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper.map(alimentare, AlimentareDto.class);
    }

    @GetMapping( value = "getAlimentareById/{id}")
    public Alimentari getAlimentareById(@PathVariable("id") String id)
    {
        return alimentariRepository.getAlimentariById(id);
    }

    @PostMapping(value = "alimentare/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Alimentari createAlimentare(@RequestBody Alimentari alimentari) {
        return alimentariRepository.save(alimentari);
    }

    @PutMapping(value = "alimentare/update", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Alimentari updateAlimentare(@RequestBody Alimentari alimentari) {
        return this.alimentariRepository.save(alimentari);
    }

    @DeleteMapping(value = "alimentare/delete")
    public void deleteAlimentare(@RequestParam("id") Long id) {
        if (this.alimentariRepository.existsById(id)) {
            this.alimentariRepository.deleteById(id);
        }
    }

}
