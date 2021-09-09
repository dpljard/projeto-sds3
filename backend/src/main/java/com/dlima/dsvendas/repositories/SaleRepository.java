package com.dlima.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dlima.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
