package com.protegeagro.protege_agro_api.dto;

import lombok.Data;

@Data
public class CadastroRequestDTO {
    private String email;
    private String telefone;
    private String senha;
    private String confirmarSenha;
    private String estado;
    private String regiao;
    private String cultivo;
}