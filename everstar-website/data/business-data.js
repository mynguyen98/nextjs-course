// import icon
// import LocalIcon from "../components/icons/service/local";
import LocalIcon from "../public/icons/app-publish/local.svg";
// import CreativeIcon from "../components/icons/service/creative";
// import MarketAnalysisIcon from "../components/icons/service/market-analysis";
// import MarketPlanIcon from "../components/icons/service/market-plan";
// import MarketServiceIcon from "../components/icons/service/market-service";
// import MediaIcon from "../components/icons/service/media";
// import PerformanceIcon from "../components/icons/service/performance";
// import StrategyIcon from "../components/icons/service/strategy";
// export const businessData = {
//   "en-US": [
//     {
//       sid: "app-developing",
//       title: "App Developing",
//       header: [
//         "Original idea",
//         "Business analysis",
//         "Development service",
//         "Maintenance & update service",
//       ],
//       content: [
//         [
//           "Competent dev team consisted of iOS & AOS native developer, AI & Backend developer, crypto currency developer",
//         ],
//         ["Function list", "BM model"],
//         [
//           "Development timeline and service plan",
//           "In cooperate latest tech-stack",
//         ],
//       ],
//     },
//     {
//       sid: "market-analysis",
//       title: "Market analysis",
//       content: [
//         {
//           title: "Market analysis",
//           icon: "",
//           description: ["Market & Trend Research", "Market suitability"],
//         },
//         {
//           title: "Market analysis",
//           icon: "",
//           description: ["Market & Trend Research", "Market suitability"],
//         },
//         {
//           title: "Market analysis",
//           icon: "",
//           description: ["Market & Trend Research", "Market suitability"],
//         },
//       ],
//     },
//   ],
//   "kr-KR": [
//     {
//       sid: "app-developing",
//       title: "App Developing",
//       header: [
//         "Original idea",
//         "Business analysis",
//         "Development service",
//         "Maintenance & update service",
//       ],
//       content: [
//         [
//           "Competent dev team consisted of iOS & AOS native developer, AI & Backend developer, crypto currency developer",
//         ],
//         ["Function list", "BM model"],
//         [
//           "Development timeline and service plan",
//           "In cooperate latest tech-stack",
//         ],
//       ],
//     },
//     {
//       sid: "market-analysis",
//       title: "Market analysis",
//       content: [
//         {
//           title: "Market analysis",
//           icon: "",
//           description: ["Market & Trend Research", "Market suitability"],
//         },
//         {
//           title: "Market analysis",
//           icon: "",
//           description: ["Market & Trend Research", "Market suitability"],
//         },
//         {
//           title: "Market analysis",
//           icon: "",
//           description: ["Market & Trend Research", "Market suitability"],
//         },
//       ],
//     },
//   ],
// };

export const business = [
  {
    sid: "app-developing",
    "en-US": {
      title: "App Developing",
      header: [
        "Original idea",
        "Business analysis",
        "Development service",
        "Maintenance & update service",
      ],
      content: [
        [
          "Competent dev team consisted of iOS & AOS native developer, AI & Backend developer, crypto currency developer",
        ],
        [
          ["Function list", "BM model"],
          [
            "Development timeline and service plan",
            "In cooperate latest tech-stack",
          ],
        ],
      ],
    },
    "kr-KR": {
      title: "App Developing Korean",
      header: ["?????? ????????????", "?????? ??????", "??? ??????", "???????????? & ????????????"],
      content: [
        [
          "iOS, Android, Web ??? ????????? ?????????, AI, ???????????? ????????? ????????? ????????? ????????? ???????????? ??????????????? ??????",
        ],
        [
          ["?????? ?????? ??????", "???????????? ?????? ??????"],
          ["?????? ?????? ??? ????????? ?????? ??????", "?????? ?????? ????????? ????????? ??????"],
        ],
      ],
    },
  },
  {
    sid: "app-publishing",
    "kr-KR": [
      {
        icon: "/",
        title: "?????? ??????",
        content: ["?????? ?????? ??? ?????? ?????? ??????", "?????? ????????? ??????"],
      },
      {
        icon: "/",
        title: "?????? ?????? ?????? ??????",
        content: ["???????????? ??????", "????????? ?????? ??????"],
      },
      {
        icon: "/",
        title: "????????? ??????",
        content: ["?????? ????????? ??????", "????????? ?????? (??????, ????????? ???)"],
      },
      {
        icon: "/",
        title: "????????? ??????",
        content: ["?????? ?????? ?????? ??????", "?????? ????????? ??????"],
      },
    ],
    "en-US": [
      {
        icon: "/images/service/business/icons/market-analyze.png",
        title: "Market analysis",
        content: ["Market & Trend Research", "Market suitability"],
      },
      {
        icon: "/",
        title: "Market penetration plan",
        content: ["Business analysis", "Marketing campaign plan"],
      },
      {
        icon: "/",
        title: "Localization & Local permit documents",
        content: ["Vietnamese localization", "Marketing campaign plan"],
      },
      {
        icon: "/",
        title: "Market service",
        content: ["Local payment integration", "Customer service"],
      },
    ],
  },
];
