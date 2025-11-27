package com.protegeagro.protege_agro_api.dto;

import java.util.List;

public class PrevisaoDTO {

    private List<DadosPrevisao> list;

    public List<DadosPrevisao> getList() { return list; }
    public void setList(List<DadosPrevisao> list) { this.list = list; }

    public static class DadosPrevisao {
        private Main main;
        private String dt_txt;

        public Main getMain() { return main; }
        public void setMain(Main main) { this.main = main; }

        public String getDt_txt() { return dt_txt; }
        public void setDt_txt(String dt_txt) { this.dt_txt = dt_txt; }
    }

    public static class Main {
        private Double temp;
        public Double getTemp() { return temp; }
        public void setTemp(Double temp) { this.temp = temp; }
    }
}