// import icons
import AppDeveloping from '../components/icons/home-feature/app-developing'
import AppPublishing from '../components/icons/home-feature/app-publishing'
import BlockchainPublishing from '../components/icons/home-feature/blockchain-publishing'
import GamePublishing from '../components/icons/home-feature/game-publishing'
import MktSolution from '../components/icons/home-feature/mkt-solution'

export const businessHomeData = {
  'en-US': [
    {
      id: 1,
      title: 'App Developing',
      icon: <AppDeveloping />,
      feature: [
        {
          image: '/images/app-develop/demo.png',
          description: 'Outsourcing Application and Webpage developing',
        },
        {
          image: '/images/app-develop/demo.png',
          description: 'After service and Management tool developing',
        },
      ],
    },
    {
      id: 2,
      title: 'App Publishing',
      icon: <AppPublishing />,
      feature: [
        {
          image: '/images/app-develop/demo.png',
          description: 'Provide market R&D service for publisher',
        },
        {
          image: '/images/app-develop/demo.png',
          description: 'Publishing Application and Localization in Vietnam',
        },
      ],
    },
    {
      id: 3,
      title: 'Game Publishing',
      icon: <BlockchainPublishing />,
      feature: [
        {
          image: '/images/app-develop/demo.png',
          description: 'Provide game market R&D service for publisher',
        },
        {
          image: '/images/app-develop/demo.png',
          description: 'Provide G1 license and local payment integration',
        },
        {
          image: '/images/app-develop/demo.png',
          description: 'Game publishing service in Vietnam',
        },
      ],
    },
    {
      id: 4,
      title: 'Marketing Solution',
      icon: <GamePublishing />,

      feature: [
        {
          image: '/images/app-develop/demo.png',
          description:
            'Provide marketing research and marketing solution for Korea company that want to penetrate Vietnam market',
        },
        {
          image: '/images/app-develop/demo.png',
          description:
            'Provide service for performance marketing and influencer marketing in Vietnam',
        },
      ],
    },
    {
      id: 5,
      title: 'Blockchain Developing',
      icon: <MktSolution />,

      feature: [
        {
          image: '/images/app-develop/demo.png',
          description: 'Provide blockchain market insight',
        },
        {
          image: '/images/app-develop/demo.png',
          description: 'Blockchain and application developing service',
        },
      ],
    },
  ],
  'kr-KR': [
    {
      id: 1,
      title: '어플리케이션 개발',
      icon: <AppDeveloping />,
      feature: [
        {
          image: '/images/app-develop/demo.png',
          description: '어플리케이션 및 웹페이지 외주 개발',
        },
        {
          image: '/images/app-develop/demo.png',
          description: '관리 도구 개발 및 유지보수 서비스 제공',
        },
      ],
    },
    {
      id: 2,
      title: '어플리케이션 퍼블리싱',
      icon: <AppPublishing />,
      feature: [
        {
          image: '/images/app-develop/demo.png',
          description: '퍼블리셔를 위한 시장 분석 서비스',
        },
        {
          image: '/images/app-develop/demo.png',
          description: '베트남 현지 사정에 맞춘 앱 퍼블리싱 서비스',
        },
      ],
    },
    {
      id: 3,
      title: '게임 퍼블리싱',
      icon: <BlockchainPublishing />,
      feature: [
        {
          image: '/images/app-develop/demo.png',
          description: '퍼블리셔를 위한 시장 분석 서비스',
        },
        {
          image: '/images/app-develop/demo.png',
          description: 'G1 라이센스 및 로컬 결제 통합 서비스 제공',
        },
        {
          image: '/images/app-develop/demo.png',
          description: '베트남 현지 사정에 맞춘 게임 퍼블리싱 서비스',
        },
      ],
    },
    {
      id: 4,
      title: '마케팅 솔루션',
      icon: <GamePublishing />,

      feature: [
        {
          image: '/images/app-develop/demo.png',
          description:
            '베트남 시장 진출 희망 기업을 위한 마케팅 리서치 및 마케팅 솔루션 제공',
        },
        {
          image: '/images/app-develop/demo.png',
          description: '베트남 내 퍼포먼스 마케팅 및 인풀루언서 마케팅 서비스',
        },
      ],
    },
    {
      id: 5,
      title: '블록체인 개발',
      icon: <MktSolution />,
      feature: [
        {
          image: '/images/app-develop/demo.png',
          description: '블록체인 시장 분석 및 자료 제공',
        },
        {
          image: '/images/app-develop/demo.png',
          description: '블록체인 및 블록체인 어플리케이션 개발 서비스',
        },
      ],
    },
  ],
}

export const heroContent = {
  'en-US': {
    description:
      'To combine unique and critical ideas from Korea with Vietnam’s talented members.',
    btnLearn: 'Learn more',
    btnDown: 'Download Company IR',
    imageUrl: '/images/home/hero/hero-des.png',
  },
  'kr-KR': {
    description:
      '우리는 한국의 창의적인 아이디어를 베트남의 재능있는 사람들과 현실로 만들어갑니다.',
    btnLearn: '사업 영역',
    btnDown: '회사소개서 다운로드',
    imageUrl: '/images/home/hero/hero-des-kr.png',
  },
}
