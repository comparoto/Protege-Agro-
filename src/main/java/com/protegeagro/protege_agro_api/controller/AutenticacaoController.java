package com.protegeagro.protege_agro_api.controller;

import com.protegeagro.protege_agro_api.dto.CadastroRequestDTO;
import com.protegeagro.protege_agro_api.dto.LoginRequestDTO;
import com.protegeagro.protege_agro_api.model.Usuario;
import com.protegeagro.protege_agro_api.service.AutenticacaoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "https://protege-agro-site.onrender.com")
@RestController
@RequestMapping("/api/auth")
public class AutenticacaoController {

    private final AutenticacaoService autenticacaoService;

    public AutenticacaoController(AutenticacaoService autenticacaoService) {
        this.autenticacaoService = autenticacaoService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO loginRequest) {
        try {

            autenticacaoService.autenticar(loginRequest);

            Usuario usuario = autenticacaoService.buscarUsuarioPorEmail(loginRequest.getEmail());


            return ResponseEntity.ok(Map.of(
                    "message", "Login bem-sucedido!",
                    "nome", usuario.getNome()
            ));

        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registrar(@RequestBody CadastroRequestDTO request) {
        try {
            Usuario novoUsuario = autenticacaoService.registrar(request);
            novoUsuario.setSenha(null);
            return ResponseEntity.status(HttpStatus.CREATED).body(novoUsuario);

        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", e.getMessage()));
        }
    }
}