//Repository is like a bridge between your java application and MySQL database.
package com.hpcl.securityequipmentmanagement.repository;
import com.hpcl.securityequipmentmanagement.entity.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@Repository//This tells spring that this class is responsible for database operations.
public interface EquipmentRepository extends JpaRepository<Equipment, Long>{
    Optional<Equipment> findBySerialNumber(String serialNumber);//to avoid nullpointer exception if there is a search for an undefined serial number.
}