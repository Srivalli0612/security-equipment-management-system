package com.hpcl.securityequipmentmanagement.controller;

//import com.hpcl.securityequipmentmanagement.entity.Equipment;
import com.hpcl.securityequipmentmanagement.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hpcl.securityequipmentmanagement.dto.EquipmentDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import jakarta.validation.Valid;

import java.util.List;

@CrossOrigin(origins="http://localhost:5173")//to solve CORS error

@RestController
@RequestMapping("/api/equipment")
public class EquipmentController {

    @Autowired
    private EquipmentService equipmentService;

    @GetMapping("/test")
public String test() {
    return "Controller is working!";
}

    /*@PostMapping
    public Equipment addEquipment(@RequestBody Equipment equipment) {
        return equipmentService.saveEquipment(equipment);
    }
    
    @GetMapping
    public List<Equipment> getAllEquipment() {
        return equipmentService.getAllEquipment();
    }
    */

   @PostMapping
public ResponseEntity<EquipmentDTO> addEquipment(@Valid @RequestBody EquipmentDTO dto) {

    EquipmentDTO savedEquipment = equipmentService.saveEquipment(dto);
    return ResponseEntity.status(HttpStatus.CREATED).body(savedEquipment);
}

    @GetMapping
public ResponseEntity<List<EquipmentDTO>> getAllEquipment() {

    List<EquipmentDTO> equipmentList = equipmentService.getAllEquipment();

    return ResponseEntity.ok(equipmentList);
}

@GetMapping("/{id}")
public ResponseEntity<EquipmentDTO> getEquipmentById(@PathVariable Long id) {

    EquipmentDTO equipment = equipmentService.getEquipmentById(id);

    return ResponseEntity.ok(equipment);
}

@PutMapping("/{id}")
public ResponseEntity<EquipmentDTO> updateEquipment(
        @PathVariable Long id,//Spring automatically takes the ID from the URL
        @Valid @RequestBody EquipmentDTO dto) {

    EquipmentDTO updatedEquipment = equipmentService.updateEquipment(id, dto);

    return ResponseEntity.ok(updatedEquipment);
}

@DeleteMapping("/{id}")
public ResponseEntity<String> deleteEquipment(@PathVariable Long id) {

    equipmentService.deleteEquipment(id);

    return ResponseEntity.ok("Equipment deleted successfully.");
}

}