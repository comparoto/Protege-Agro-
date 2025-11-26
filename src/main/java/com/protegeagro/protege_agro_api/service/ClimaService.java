package com.protegeagro.protege_agro_api.service;

import com.protegeagro.protege_agro_api.dto.ClimaDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ClimaService {

    // Substitua pela SUA chave que você pegou no site
    private final String API_KEY = "e0fd7e3754019ec002d443d541df595d";

    public ClimaDTO buscarClima(String cidade) {
        // Montamos a URL. "units=metric" é para vir em Celsius
        String url = "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + API_KEY + "&units=metric&lang=pt_br";

        RestTemplate restTemplate = new RestTemplate();

        // O Spring vai lá na URL, pega o JSON e transforma magicamente no nosso ClimaDTO
        ClimaDTO clima = restTemplate.getForObject(url, ClimaDTO.class);

        return clima;
    }
}