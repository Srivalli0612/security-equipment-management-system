package com.hpcl.securityequipmentmanagement.service;

import com.hpcl.securityequipmentmanagement.dto.EquipmentDTO;
import com.hpcl.securityequipmentmanagement.entity.Equipment;
import com.hpcl.securityequipmentmanagement.exception.DuplicateResourceException;
import com.hpcl.securityequipmentmanagement.repository.EquipmentRepository;
import com.hpcl.securityequipmentmanagement.exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EquipmentService {

    @Autowired
    private EquipmentRepository equipmentRepository;

    // Save Equipment
    public EquipmentDTO saveEquipment(EquipmentDTO dto) {

        // Check if serial number already exists
        if (equipmentRepository.findBySerialNumber(dto.getSerialNumber()).isPresent()) {
            throw new DuplicateResourceException(
                    "Equipment with serial number " + dto.getSerialNumber() + " already exists."
            );
        }

        // Convert DTO to Entity
        Equipment equipment = convertToEntity(dto);

        // Save into database
        Equipment savedEquipment = equipmentRepository.save(equipment);

        // Convert Entity back to DTO
        return convertToDTO(savedEquipment);
    }

    // Get All Equipment
    public List<EquipmentDTO> getAllEquipment() {

        List<Equipment> equipmentList = equipmentRepository.findAll();
        List<EquipmentDTO> dtoList = new ArrayList<>();

        for (Equipment equipment : equipmentList) {
            dtoList.add(convertToDTO(equipment));
        }

        return dtoList;
    }

    public EquipmentDTO getEquipmentById(Long id) {

    Equipment equipment = equipmentRepository.findById(id)
            .orElseThrow(() ->
                    new ResourceNotFoundException(
                            "Equipment with ID " + id + " not found."
                    ));

    return convertToDTO(equipment);
}

    public EquipmentDTO updateEquipment(Long id, EquipmentDTO dto) {

    // Find existing equipment
    Equipment equipment = equipmentRepository.findById(id)
            .orElseThrow(() ->
                    new ResourceNotFoundException(
                            "Equipment with ID " + id + " not found."
                    ));

    // Check if another equipment already has the same serial number
    equipmentRepository.findBySerialNumber(dto.getSerialNumber())
            .ifPresent(existingEquipment -> {
                if (!existingEquipment.getId().equals(id)) {
                    throw new DuplicateResourceException(
                            "Equipment with serial number "
                                    + dto.getSerialNumber()
                                    + " already exists."
                    );
                }
            });

    // Update fields
    equipment.setEquipmentName(dto.getEquipmentName());
    equipment.setCategory(dto.getCategory());
    equipment.setSerialNumber(dto.getSerialNumber());
    equipment.setManufacturer(dto.getManufacturer());
    equipment.setPurchaseDate(dto.getPurchaseDate());
    equipment.setStatus(dto.getStatus());
    equipment.setLocation(dto.getLocation());
    equipment.setRemarks(dto.getRemarks());

    // Save updated equipment
    Equipment updatedEquipment = equipmentRepository.save(equipment);

    // Return updated DTO
    return convertToDTO(updatedEquipment);
}

    public void deleteEquipment(Long id) {

    Equipment equipment = equipmentRepository.findById(id)
            .orElseThrow(() ->
                    new ResourceNotFoundException(
                            "Equipment with ID " + id + " not found."
                    ));

    equipmentRepository.delete(equipment);
}

    // Convert DTO to Entity
    private Equipment convertToEntity(EquipmentDTO dto) {

        Equipment equipment = new Equipment();

        equipment.setId(dto.getId());
        equipment.setEquipmentName(dto.getEquipmentName());
        equipment.setCategory(dto.getCategory());
        equipment.setSerialNumber(dto.getSerialNumber());
        equipment.setManufacturer(dto.getManufacturer());
        equipment.setPurchaseDate(dto.getPurchaseDate());
        equipment.setStatus(dto.getStatus());
        equipment.setLocation(dto.getLocation());
        equipment.setRemarks(dto.getRemarks());

        return equipment;
    }

    // Convert Entity to DTO
    private EquipmentDTO convertToDTO(Equipment equipment) {

        EquipmentDTO dto = new EquipmentDTO();

        dto.setId(equipment.getId());
        dto.setEquipmentName(equipment.getEquipmentName());
        dto.setCategory(equipment.getCategory());
        dto.setSerialNumber(equipment.getSerialNumber());
        dto.setManufacturer(equipment.getManufacturer());
        dto.setPurchaseDate(equipment.getPurchaseDate());
        dto.setStatus(equipment.getStatus());
        dto.setLocation(equipment.getLocation());
        dto.setRemarks(equipment.getRemarks());

        return dto;
    }
}