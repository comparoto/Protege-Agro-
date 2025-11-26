package com.protegeagro.protege_agro_api.dto;

public class ClimaDTO {
    // A API externa devolve um objeto "main" com a temperatura dentro
    private Main main;
    private String name; // Nome da cidade

    // Getters e Setters
    public Main getMain() { return main; }
    public void setMain(Main main) { this.main = main; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    // Classe interna para pegar a temperatura
    public static class Main {
        private Double temp;

        public Double getTemp() { return temp; }
        public void setTemp(Double temp) { this.temp = temp; }
    }
}