import LeNu from "../../../assets/data-images/design-ux/lofi-prototype.png";
import Personas from "../../../assets/data-images/design-ux/persona.png";
import CompetitiveAnalysis from "../../../assets/data-images/design-ux/competitive-audit.png";
import CompetitiveReport from "../../../assets/data-images/design-ux/competitive-audit-report.png";
import Storyboard from "../../../assets/data-images/design-ux/storyboard.png";
import StoryboardCloseUp from "../../../assets/data-images/design-ux/storyboard-closeup.png";

interface IDesignUX {
  img: string;
  tools: string;
  name: string;
  description: string;
  link: string;
  button: string;
}

const designUX: Array<IDesignUX> = [
  {
    img: LeNu,
    tools: "Figma, Design de UX",
    name: "LeNu App - Protótipo Lo-Fi",
    description:
      "Primeiro protótipo Lo-Fi criado usando Figma para demonstrar o aplicativo LeNu, um sistema de pedidos de restaurante agendado.",
    link: "https://www.figma.com/proto/0PZ2SCNQ2IlAgJDNvAIhcg/LeNu-Wireframes?type=design&node-id=4-8&t=wfESQtGHRsrhD8RU-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A8",
    button: "Mais detalhes",
  },

  {
    img: Personas,
    tools: "Apresentação do Google, Avaliações de Clientes",
    name: "Personas",
    description:
      "Criação de personas de usuário para refletir o público-alvo e suas necessidades para o aplicativo.",
    link: "https://docs.google.com/presentation/d/1-rBktYJ4MduAXL_ygiJ1ELd8IGhDXepawtZjgFr9CfQ/edit?usp=sharing",
    button: "Mais detalhes",
  },

  {
    img: CompetitiveAnalysis,
    tools: "Planilhas do Google, Pesquisa Competitiva",
    name: "Auditoria Competitiva",
    description:
      "Pesquisa realizada para coletar dados sobre empresas similares, seus objetivos e métodos para informar o desenvolvimento do aplicativo LeNu.",
    link: "https://docs.google.com/spreadsheets/d/1W685l2nbxf6sNDKDS53l5UfKNHvB-X-eVtp56fYxoYA/edit?usp=sharing",
    button: "Mais detalhes",
  },

  {
    img: CompetitiveReport,
    tools: "Documentos do Google, Auditoria Competitiva",
    name: "Relatório de Auditoria Competitiva",
    description:
      "Relatório resumindo os dados coletados durante o processo de auditoria competitiva.",
    link: "https://docs.google.com/document/d/1GFBEzkTFD1z6sqJicBRJx8SZCdAB0b87K3t006ufJ8c/edit?usp=sharing",
    button: "Mais detalhes",
  },

  {
    img: Storyboard,
    tools: "Apresentação do Google, Desenho em Caderno",
    name: "Storyboard",
    description:
      "Apresentação que delineia o caminho do usuário através do aplicativo para visualizar a experiência do usuário.",
    link: "https://docs.google.com/presentation/d/1q36yqejV4-ZYarPLhpnZAJ55rmB65fzfZE6EWQDJ68w/edit?usp=sharing&resourcekey=0-uITU2Uj63UrEhIK6u1xzPw",
    button: "Mais detalhes",
  },

  {
    img: StoryboardCloseUp,
    tools: "Apresentação do Google, Desenho em Caderno",
    name: "Storyboard - Detalhes",
    description:
      "Apresentação detalhada focando em caminhos específicos do usuário dentro do aplicativo para um exame mais detalhado da experiência do usuário.",
    link: "https://docs.google.com/presentation/d/1avCgZYN9fdXuQQ5YUvkGUAqntb0bj3EWfWkuy182lxs/edit?usp=sharing&resourcekey=0-aQAnYTPMgmVEJx-WyJRJIA",
    button: "Mais detalhes",
  },
];

export default designUX;
