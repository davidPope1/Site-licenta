package app.controler;

import app.model.*;
import app.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class MainController {

    // zona de repository
    @Autowired
    AlimentariRepository alimentariRepository;
    @Autowired
    CursaRepository cursaRepository;
    @Autowired
    MasinaRepository masinaRepository;
    @Autowired
    SoferRepository soferRepository;
    @Autowired
    SuperUserRepository superUserRepository;

    // zona de endpointuri

    @GetMapping("/")
    public String login(Model model) {
        return "login";
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/login")
    public SuperUser performLogin(@RequestParam("user") String user, @RequestParam("password") String password) {

       SuperUser superUser = superUserRepository.getSuperUserByEmailAndPassword(user,password);
       if(superUser != null)
       {
           return superUser;
       }
       return null;
    }

    @GetMapping("/login2")
    public String login(@RequestParam("user") String user, @RequestParam("password") String password, Model model) {
       // Angajat angajat = angajatRepository.getAngajatByEmailAndPassword(mail, password);
     //   if (angajat != null) {
         //   model.addAttribute("angajat", angajat);


        //    Sefi sef = sefRepository.getSefByAngajatId(angajat.getId());
         //   List<Vacanta> vacantaEchipa = new ArrayList<>();
          //  if (sef != null)
            //{
            //    model.addAttribute("isBoss", "true");

            //    List<Echipa> echipe = echipaRepository.getEchipaForSefId(sef.getId());

           //     for (Echipa echipa : echipe) {
            //        List<Angajat> angajati = angajatRepository.getAngajatByEchipaId(echipa.getId());
             //       angajati.remove(angajat);
              //      for (Angajat angajat1 : angajati) {
            //            List<Vacanta> vacantaAux = vacantaRepository.getVacantaByAngajatId(angajat1.getId());
             //           for (Vacanta vacanta : vacantaAux) {
            //                vacantaEchipa.add(vacanta);
             //           }
                //    }
              //  }
         //   }
          //  else {
             //   model.addAttribute("isBoss", "false");
         //   }
         //   List<Vacanta> vacantaList = vacantaRepository.getVacantaByAngajatId(angajat.getId());
          //  model.addAttribute("vacantaList", vacantaList);


         //   model.addAttribute("vacantaEchipa", vacantaEchipa);

         //   return "main";
      //  }
     //   model.addAttribute("error", "Mailul sau parola nu se potrivesc!");
        return "login";
    }


//    @GetMapping("/vacanta/confirm")
//    public String confirmVacanta(@RequestParam("id") Long id, @RequestParam("idVacanta") Long idVacanta, Model model) {
//        Angajat angajat = angajatRepository.findById(id).get();
//        model.addAttribute("angajat", angajat);
//
//        List<Angajat> angajatiList = angajatRepository.findAll();
//        model.addAttribute("angajatiList", angajatiList);
//
//
//        Vacanta vacantaTarget = vacantaRepository.findById(idVacanta).get();
//        vacantaTarget.setAproved(true);
//        vacantaRepository.save(vacantaTarget);
//
//
//        Sefi sef = sefRepository.getSefByAngajatId(angajat.getId());
//        List<Vacanta> vacantaEchipa = new ArrayList<>();
//        if (sef != null)
//        {
//            model.addAttribute("isBoss", "true");
//
//            List<Echipa> echipe = echipaRepository.getEchipaForSefId(sef.getId());
//
//            for (Echipa echipa : echipe) {
//                List<Angajat> angajati = angajatRepository.getAngajatByEchipaId(echipa.getId());
//                angajati.remove(angajat);
//                for (Angajat angajat1 : angajati) {
//                    List<Vacanta> vacantaAux = vacantaRepository.getVacantaByAngajatId(angajat1.getId());
//                    for (Vacanta vacanta : vacantaAux) {
//                        vacantaEchipa.add(vacanta);
//                    }
//                }
//
//            }
//        }
//        else {
//            model.addAttribute("isBoss", "false");
//        }
//
//
//        List<Vacanta> vacantaList = vacantaRepository.getVacantaByAngajatId(angajat.getId());
//        model.addAttribute("vacantaList", vacantaList);
//
//
//        model.addAttribute("vacantaEchipa", vacantaEchipa);
//
//        return "main";
//    }
//
//    @GetMapping("/vacanta/cancel")
//    public String declineVacanta(@RequestParam("id") Long id, @RequestParam("idVacanta") Long idVacanta, Model model) {
//        Angajat angajat = angajatRepository.findById(id).get();
//        model.addAttribute("angajat", angajat);
//
//        List<Angajat> angajatiList = angajatRepository.findAll();
//        model.addAttribute("angajatiList", angajatiList);
//
//
//        Vacanta vacantaTarget = vacantaRepository.findById(idVacanta).get();
//        vacantaTarget.setAproved(false);
//        vacantaRepository.save(vacantaTarget);
//
//
//        Sefi sef = sefRepository.getSefByAngajatId(angajat.getId());
//        List<Vacanta> vacantaEchipa = new ArrayList<>();
//        if (sef != null)
//        {
//            model.addAttribute("isBoss", "true");
//
//            List<Echipa> echipe = echipaRepository.getEchipaForSefId(sef.getId());
//
//            for (Echipa echipa : echipe) {
//                List<Angajat> angajati = angajatRepository.getAngajatByEchipaId(echipa.getId());
//                angajati.remove(angajat);
//                for (Angajat angajat1 : angajati) {
//                    List<Vacanta> vacantaAux = vacantaRepository.getVacantaByAngajatId(angajat1.getId());
//                    for (Vacanta vacanta : vacantaAux) {
//                        vacantaEchipa.add(vacanta);
//                    }
//                }
//
//            }
//        }
//        else {
//            model.addAttribute("isBoss", "false");
//        }
//
//
//        List<Vacanta> vacantaList = vacantaRepository.getVacantaByAngajatId(angajat.getId());
//        model.addAttribute("vacantaList", vacantaList);
//
//        model.addAttribute("vacantaEchipa", vacantaEchipa);
//
//        return "main";
//    }
//
//    @GetMapping("/echipa")
//    public String echipa(@RequestParam("id") Long id,Model model) {
//        Angajat angajat = angajatRepository.findById(id).get();
//        model.addAttribute("angajat", angajat);
//
//       Sefi sef = sefRepository.getSefByAngajatId(angajat.getId());
//        List<Echipa> echipeleMele = new ArrayList<>();
//       if(sef!=null) {
//         echipeleMele = echipaRepository.getEchipaForSefId(sef.getId());
//        }
//       model.addAttribute("echipeleMele", echipeleMele);
//
//
//        List<Echipa> echipeFacParte = new ArrayList<>();
//        echipeFacParte = echipaRepository.getEchipaForAngajatId(angajat.getId());
//        model.addAttribute("echipeFacParte", echipeFacParte);
//
//
//        if (sef != null) {
//            model.addAttribute("isBoss", "true");
//        }
//        else {
//            model.addAttribute("isBoss", "false");
//        }
//
//        return "echipa";
//    }
    @GetMapping("/masina/add")
    public String masinaAdd(@RequestParam("id") Long id,@RequestParam("numarInmatriculare") String numarInmatriculare, @RequestParam("serieCaroserie") String serieCaroserie,
                            @RequestParam("consumNormat") Float consumNormat, @RequestParam("categorie") String categorie, @RequestParam("marca") String marca,
                            @RequestParam("model") String modelMasina, @RequestParam("capacitateRezervor") Integer capacitateRezervor,@RequestParam("kilometriiRulati") Long kilometriiRulati,
                            @RequestParam("startDataItp") String startDataItp, @RequestParam("endDataItp") String endDataItp, @RequestParam("startDataAsig") String startDataAsig,
                            @RequestParam("endDataAsig") String endDataAsig, Model model) {


        SuperUser user = superUserRepository.findById(id).get();
        model.addAttribute("user", user);

        if (user != null) {
            Masina masina = new Masina();
            masina.setNumarInmatriculare(numarInmatriculare);
            masina.setSerieCaroserie(serieCaroserie);
            masina.setConsumNormat(consumNormat);
            masina.setCategorie(categorie);
            masina.setMarca(marca);
            masina.setModel(modelMasina);
            masina.setCapacitateRezervor(capacitateRezervor);
            masina.setKilometriiRulati(kilometriiRulati);
            masina.setStartDataItp(startDataItp);
            masina.setEndDataItp(endDataItp);
            masina.setStartDataAsig(startDataAsig);
            masina.setEndDataAsig(endDataAsig);

            masinaRepository.save(masina);


            List<Masina> masinileMele = (List<Masina>) masinaRepository.getMasinaBySerialAndPlate(masina.getSerieCaroserie(), masina.getNumarInmatriculare());
            model.addAttribute("masinileMele", masinileMele);
        }

        return "masina";
    }
}

//    @GetMapping("/angajat/add")
//    public String angajatAdd(@RequestParam("id") Long idUser,@RequestParam("idEchipa") Long idEchipa, @RequestParam("idAngajatNou") Long idAngajatNou, Model model) {
//        Angajat angajat = angajatRepository.findById(idUser).get();
//        model.addAttribute("angajat", angajat);
//
//        Echipa echipa = echipaRepository.findById(idEchipa).get();
//        Angajat angajatNou = angajatRepository.findById(idAngajatNou).get();
//        echipa.getAngajati().add(angajatNou);
//        echipaRepository.save(echipa);
//
//        return "echipa";
//    }
//
//
//}
