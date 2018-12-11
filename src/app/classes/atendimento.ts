export class Atendimento{

    id: Number;
    consulta_medico_idmedico: Number;
    consulta_paciente_idpaciente: Number;
    consulta_idconsulta: Number;
    historico_idhistorico: Number;
    usa_medicamento: Boolean;
    desc_medicamento: String;
    sintoma: String;
    alergico: Boolean;
    desc_alergico: String;
    doenca_hereditaria: Boolean;
    desc_doenca_hereditaria: String;
    info_extra: String;

    constructor(){}
}