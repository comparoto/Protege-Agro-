package com.protegeagro.protege_agro_api.dto;


public class ClimaDTO {

    private Main main;
    private String name; // Nome da cidade

    public Main getMain() { return main; }
    public void setMain(Main main) { this.main = main; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public static class Main {
        private Double temp;

        public Double getTemp() { return temp; }
        public void setTemp(Double temp) { this.temp = temp; }
    }

}
