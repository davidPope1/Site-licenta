package app.model;

import javax.persistence.*;

@Entity
@Table(name = "soferi_masini")
public class SoferMasina {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "sofer_id", unique = true, nullable = false)
    private Long idSofer;
    @Column(name = "masina_id", unique = true, nullable = false)
    private Long idMasina;
    @Column(name = "data", unique = true, nullable = false)
    private String data;
}
