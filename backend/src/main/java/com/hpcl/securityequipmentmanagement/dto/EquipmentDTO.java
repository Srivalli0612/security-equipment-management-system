package com.hpcl.securityequipmentmanagement.dto;

import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class EquipmentDTO {
    private Long id;
    //Validations
    @NotBlank(message = "Equipment name is required")
    private String equipmentName;
    @NotBlank(message = "Category is required")
    private String category;
    @NotBlank(message = "Serial number is required")
    private String serialNumber;
    @NotBlank(message = "Manufacturer is required")
    private String manufacturer;
    @NotNull(message = "Purchase date is required")
    private LocalDate purchaseDate;
    @NotBlank(message = "Status is required")
    private String status;
    @NotBlank(message = "Location is required")
    private String location;
    private String remarks;
}