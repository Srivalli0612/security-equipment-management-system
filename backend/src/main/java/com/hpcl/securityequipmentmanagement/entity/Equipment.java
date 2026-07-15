package com.hpcl.securityequipmentmanagement.entity;
import jakarta.persistence.*;//gives us annotations such as @Entity
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name="equipment")
public class Equipment{
    @Id//id BIGINT PRIMARY KEY
    @GeneratedValue(strategy=GenerationType.IDENTITY)//This strategy uses MySQL's Auto_increment
    private Long id;
    @Column(name="equipment_name", nullable=false)
    private String equipmentName;
    @Column(nullable=false)//value cannot be empty
    private String category;
    @Column(name="serial_number", unique=true, nullable=false)
    private String serialNumber;
    private String manufacturer;
    @Column(name="purchase_date")
    private LocalDate purchaseDate;
    @Column(nullable=false)
    private String status;
    private String location;
    private String remarks;
}