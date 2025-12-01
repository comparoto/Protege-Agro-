package com.protegeagro.protege.agro.api.service;

import com.protegeagro.protege.agro.api.dto.ClimaDTO;
import com.protegeagro.protege.agro.api.dto.PrevisaoDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ClimaService {

    private final String API_KEY = "e0fd7e3754019ec002d443d541df595d";

    public ClimaDTO buscarClima(String cidade) {

        String url = "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + API_KEY + "&units=metric&lang=pt_br";

        RestTemplate restTemplate = new RestTemplate();

        ClimaDTO clima = restTemplate.getForObject(url, ClimaDTO.class);

        return clima;
    }
    public PrevisaoDTO buscarPrevisao(String cidade) {

        String url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cidade + "&appid=" + API_KEY + "&units=metric&lang=pt_br";

        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, PrevisaoDTO.class);
    }
}