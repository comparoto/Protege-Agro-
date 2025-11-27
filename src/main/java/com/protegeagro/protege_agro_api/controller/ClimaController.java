package com.protegeagro.protege_agro_api.controller;

import com.protegeagro.protege_agro_api.dto.ClimaDTO;
import com.protegeagro.protege_agro_api.service.ClimaService;
import com.protegeagro.protege_agro_api.dto.PrevisaoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/clima")

@CrossOrigin(origins = "https://protege-agro-site.onrender.com")
public class ClimaController {

    @Autowired
    private ClimaService climaService;

    @GetMapping("/{cidade}")
    public ResponseEntity<ClimaDTO> getClima(@PathVariable String cidade) {
        ClimaDTO clima = climaService.buscarClima(cidade);
        return ResponseEntity.ok(clima);
    }
    @GetMapping("/previsao/{cidade}")
    public ResponseEntity<PrevisaoDTO> getPrevisao(@PathVariable String cidade) {
        return ResponseEntity.ok(climaService.buscarPrevisao(cidade));
    }
}