package com.protegeagro.protege_agro_api.service;

import com.protegeagro.protege_agro_api.dto.CadastroRequestDTO;
import com.protegeagro.protege_agro_api.dto.LoginRequestDTO;
import com.protegeagro.protege_agro_api.model.Usuario;
import com.protegeagro.protege_agro_api.repository.UsuarioRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class AutenticacaoService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    private static final String SENHA_REGEX = "^(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).{6,}$";
    private static final Pattern SENHA_PATTERN = Pattern.compile(SENHA_REGEX);

    public AutenticacaoService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void autenticar(LoginRequestDTO loginRequest) {
        Usuario usuario = usuarioRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("Email não encontrado."));

        if (!passwordEncoder.matches(loginRequest.getSenha(), usuario.getSenha())) {
            throw new RuntimeException("Senha incorreta.");
        }
    }

    public Usuario buscarUsuarioPorEmail(String email) {
        return usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));
    }


    public Usuario registrar(CadastroRequestDTO request) {

        if (!isTelefoneValido(request.getTelefone())) {
            throw new RuntimeException("Número de telefone inválido. Deve conter 10 ou 11 dígitos.");
        }

        if (!isSenhaValida(request.getSenha())) {
            throw new RuntimeException("Senha inválida. Deve ter no mínimo 6 caracteres, 1 número e 1 caractere especial.");
        }

        if (usuarioRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email já cadastrado.");
        }

        String senhaCriptografada = passwordEncoder.encode(request.getSenha());

        Usuario novoUsuario = new Usuario();
        -
        novoUsuario.setNome(request.getNome());


        novoUsuario.setEmail(request.getEmail());
        novoUsuario.setSenha(senhaCriptografada);
        novoUsuario.setTelefone(request.getTelefone());
        novoUsuario.setEstado(request.getEstado());
        novoUsuario.setRegiao(request.getRegiao());
        novoUsuario.setCultivo(request.getCultivo());

        return usuarioRepository.save(novoUsuario);
    }


    private boolean isTelefoneValido(String telefone) {
        String digitos = telefone.replaceAll("[^0-9]", "");
        return digitos.matches("^[0-9]{10,11}$");
    }

    private boolean isSenhaValida(String senha) {
        if (senha == null) {
            return false;
        }
        Matcher matcher = SENHA_PATTERN.matcher(senha);
        return matcher.matches();
    }
}