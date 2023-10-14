type Ranking = `${number}º`

enum RankingEnum {
    "1º" = "DOUTOR DA CATEGORIA",
    "2º" = "MESTRE DA CATEGORIA",
    "3º" = "TRAÇA INTELIGENTÍSSIMA",
    "default" = "MEDIEVAL"
}

enum RankingColorEnum {
    "1º" = "#D18641",
    "2º" = "#41A6D1",
    "3º" = "#7C597B",
    "default" = "#59737C"
}



export { type Ranking, RankingEnum, RankingColorEnum}