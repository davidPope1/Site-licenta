package app.controler;

import app.dto.*;
import app.dto.CursaAlimentareDto;
import app.model.Alimentari;
import app.model.Cursa;
import app.repository.AlimentariRepository;
import app.repository.CursaRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.Date;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CursaController {

    @Autowired
    CursaRepository cursaRepository;
    @Autowired
    AlimentariRepository alimentariRepository;

    @GetMapping( value = "getCursa/{id}")
    public CursaDto getCursa(@PathVariable("id") int id)
    {
        return convertModelToDto(cursaRepository.findById(Long.valueOf(id)).get());
    }

    @GetMapping( value = "getAlimentariCurse/{id}")
    public Object getAlimentariCurse(@PathVariable("id") int id)
    {
        List<Alimentari> alimentari = alimentariRepository.getAlimentariByCursaId(Long.valueOf(id));
        Set<AlimentareDto> alimentareDtos = new HashSet<>();

        for(Alimentari alimentare : alimentari)
        {
            alimentareDtos.add(convertModelToDto(alimentare));
        }
        return alimentareDtos;
    }

    @GetMapping( value = "getCursaExtra/{id}")
    public CursaAlimentareDto getCursaExtra(@PathVariable("id") int id)
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


    @GetMapping( value = "getCurse")
    @ResponseBody
    public List<CursaDto> getCurse()
    {
        List<Cursa> curse = cursaRepository.getAllCurse();
        List<CursaDto> curseDto = new ArrayList<>();

        for(Cursa cursa : curse)
        {
            curseDto.add(convertModelToDto(cursa));
        }

        return curseDto;
    }


    @GetMapping( value = "getKmCursePerMonth")
    public List<Double> getKmCursePerMonth()
    {
        List<Cursa> curse = cursaRepository.getAllCurse();
        List<Double> curseDto = new ArrayList<>();
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

        for(Cursa cursa : curse)
        {
            String dataPredare = cursa.getDataOraPredare();
            if(dataPredare!=null)
            {
                if(cursa.getNumarKilometriParcursi()!=null)
                {String luna= dataPredare.split("-")[1];
                switch (luna)
                {
                    case "01":
                        Ian+=cursa.getNumarKilometriParcursi();
                        break;
                    case "02":
                        Feb+=cursa.getNumarKilometriParcursi();
                        break;
                    case "03":
                        Mart+=cursa.getNumarKilometriParcursi();
                        break;
                    case "04":
                        Apr+=cursa.getNumarKilometriParcursi();
                        break;
                    case "05":
                        Mai+=cursa.getNumarKilometriParcursi();
                        break;
                    case "06":
                        Iun+=cursa.getNumarKilometriParcursi();
                        break;
                    case "07":
                        Iul+=cursa.getNumarKilometriParcursi();
                        break;
                    case "08":
                        Aug+=cursa.getNumarKilometriParcursi();
                        break;
                    case "09":
                        Sept+=cursa.getNumarKilometriParcursi();
                        break;
                    case "10":
                        Oct+=cursa.getNumarKilometriParcursi();
                        break;
                    case "11":
                        Nov+=cursa.getNumarKilometriParcursi();
                        break;
                    case "12":
                        Dec+=cursa.getNumarKilometriParcursi();
                        break;
                    default:
                        // code block
                    }
                }
            }
        }
        curseDto.add(Ian);
        curseDto.add(Feb);
        curseDto.add(Mart);
        curseDto.add(Apr);
        curseDto.add(Mai);
        curseDto.add(Iun);
        curseDto.add(Iul);
        curseDto.add(Aug);
        curseDto.add(Sept);
        curseDto.add(Oct);
        curseDto.add(Nov);
        curseDto.add(Dec);
        return curseDto;
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

    @GetMapping( value = "getCursaById/{id}")
    public Cursa getCursaById(@PathVariable("id") String id)
    {
        return cursaRepository.getCursaById(id);
    }

    @PostMapping(value = "cursa/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Cursa createCursa(@RequestBody Cursa cursa) {
        return cursaRepository.save(cursa);
    }

    @PutMapping(value = "cursa/update", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Cursa updateCursa(@RequestBody Cursa cursa) {
        return this.cursaRepository.save(cursa);
    }

    @DeleteMapping(value = "cursa/delete")
    public void deleteMasina(@RequestParam("id") Long id) {
        if (this.cursaRepository.existsById(id)) {
            this.cursaRepository.deleteById(id);
        }
    }


}
