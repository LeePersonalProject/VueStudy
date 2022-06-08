export interface Message {
  fromName: string;
  subject: string;
  contents: string;
  date: string;
  link: string;
  id: number;
}

const messages: Message[] = [
  {
    fromName: 'Action Sheet',
    subject: '액션 시트 API는 기본 액션 시트에 대한 액세스를 제공하며, 이 액션 시트는 화면 하단에서 나타나며 사용자가 취할 수 있는 작업을 표시합니다.',
    contents: `npm install @capacitor/action-sheet`,
    link: '',
    date: '9:32 AM',
    id: 0
  },
  {
    fromName: 'App Launcher',
    subject: `AppLauncher API를 사용하면 앱이 앱을 열고 열 수 있는지 확인할 수 있습니다.
    iOS에서는 URL 구성표를 알고 있는 경우에만 앱을 열 수 있습니다.
    Android에서는 URL 구성표를 알고 있거나 공개 패키지 이름을 사용하는 경우 앱을 열 수 있습니다.
    참고: 켜기안드로이드 11그리고 최근에는 태그 AndroidManifest.xml내부 에 쿼리하려는 앱 패키지 이름을 추가해야 합니다 (실제 디바이스에서만 테스트 가능)`,
    contents: 'npm install @capacitor/app-launcher',
    link: 'https://capacitorjs.com/docs/apis/app-launcher',
    date: '6:12 AM',
    id: 1
  },
  {
    fromName: 'Browser',
    subject: '브라우저 API는 인앱 브라우저를 열고 브라우저 이벤트를 구독하는 기능을 제공합니다.iOS에서 이는 SFSafariViewController주요 OAuth 서비스 인앱 브라우저 요구 사항을 사용하고 준수합니다.',
    contents: 'npm install @capacitor/browser',
    link: 'https://capacitorjs.com/docs/apis/browser',
    date: '4:55 AM',
    id: 2
  },
  {
    fromName: 'Camera',
    subject: '카메라 API는 카메라로 사진을 찍거나 사진 앨범에서 기존 사진을 선택할 수 있는 기능을 제공합니다.',
    contents: 'npm install @capacitor/camera',
    link: 'https://capacitorjs.com/docs/apis/camera',
    date: 'Yesterday',
    id: 3
  },
  {
    fromName: 'Clipboard',
    subject: '클립보드 API를 사용하면 시스템 클립보드에서 복사 및 붙여넣기가 가능합니다.',
    date: 'Yesterday',
    contents: 'npm install @capacitor/clipboard',
    link: 'https://capacitorjs.com/docs/apis/clipboard',
    id: 4
  },
  {
    fromName: 'Device',
    subject: 'Device API는 고유 ID와 같은 사용자 정보와 함께 모델 및 운영 체제 버전과 같은 장치에 대한 내부 정보를 노출합니다.',
    contents: 'npm install @capacitor/device',
    link: 'https://capacitorjs.com/docs/apis/device',
    date: 'Yesterday',
    id: 5
  },
  {
    fromName: 'App',
    subject: 'App API는 높은 수준의 앱 상태 및 이벤트를 처리합니다. 예를 들어 이 API는 앱이 포그라운드로 들어오고 나갈 때 이벤트를 내보내고, 딥링크를 처리하고, 다른 앱을 열고, 지속되는 플러그인 상태를 관리합니다',
    contents: 'npm install @capacitor/app',
    link: 'https://capacitorjs.com/docs/apis/app',
    date: 'Last Week',
    id: 6
  },
  {
    fromName: 'Dialog',
    subject: 'Dialog API는 경고, 확인 및 입력 프롬프트에 대한 기본 대화 창을 트리거하는 방법을 제공합니다.',
    contents: 'npm install @capacitor/dialog',
    link: 'https://capacitorjs.com/docs/apis/dialog',
    date: 'Last Week',
    id: 7
  },
  {
    fromName: 'Haptics',
    subject: 'Haptics API는 터치나 진동을 통해 사용자에게 물리적 피드백을 제공합니다.',
    contents: 'npm install @capacitor/dialog',
    link: 'https://capacitorjs.com/docs/apis/haptics',
    date: 'Last Week',
    id: 8
  },
  {
    fromName: 'Storage',
    subject: `Storage API는 경량 데이터를 위한 간단한 키/값 영구 저장소를 제공합니다.

    모바일 OS는 주기적으로 의 데이터 세트를 지울 수 window.localStorage있으므로 이 API를 대신 사용해야 합니다. 이 API는 localStorage 프로그레시브 웹 앱으로 실행할 때 사용하도록 대체됩니다.
    
    이 플러그인은 UserDefaults iOS 및 SharedPreferences 안드로이드에서. 앱을 제거하면 저장된 데이터가 삭제됩니다.
    
    참고 : 이 API는 로컬 데이터베이스로 사용하기 위한 것이 아닙니다 . 앱이 많은 데이터를 저장하거나 읽기/쓰기 로드가 높거나 복잡한 쿼리가 필요한 경우 SQLite 기반 솔루션을 살펴보는 것이 좋습니다. 그러한 솔루션 중 하나는아이오닉 보안 스토리지, 완전한 암호화를 지원하는 SQLite 기반 엔진. 그만큼커패시터 커뮤니티또한 다수의 다른 스토리지 엔진을 구축했습니다.`,
    contents: 'npm install @capacitor/storage',
    link: 'https://capacitorjs.com/docs/apis/storage',
    date: 'Last Week',
    id: 9
  },
  {
    fromName: 'Keyboard',
    subject: `Keyboard API는 키보드 표시 및 가시성 제어, 키보드 표시 및 숨김 이벤트 추적을 제공합니다.`,
    contents: 'npm install @capacitor/keyboard',
    link: 'https://capacitorjs.com/docs/apis/keyboard',
    date: 'Last Week',
    id: 10
  },
  {
    fromName: 'Toast',
    subject: `Toast API는 사용자에게 중요한 정보를 표시하기 위한 알림 팝업을 제공합니다. 진짜 토스트처럼!`,
    contents: 'npm install @capacitor/toast',
    link: 'https://capacitorjs.com/docs/apis/toast#capacitortoast',
    date: 'Last Week',
    id: 11
  },
  {
    fromName: 'Network',
    subject: `네트워크 API는 네트워크 및 연결 정보를 제공합니다.`,
    contents: 'npm install @capacitor/network',
    link: 'https://capacitorjs.com/docs/apis/network',
    date: 'Last Week',
    id: 12
  },
  {
    fromName: 'SplashScreen',
    subject: `스플래시 화면 API는 스플래시 이미지를 표시하거나 숨기는 메소드를 제공합니다.`,
    contents: 'npm install @capacitor/splash-screen',
    link: 'https://capacitorjs.com/docs/apis/splash-screen',
    date: 'Last Week',
    id: 13
  },
  {
    fromName: 'StatusBar',
    subject: `StatusBar API 표시 또는 숨기기와 함께 상태 표시줄의 스타일을 구성하는 메서드를 제공합니다.`,
    contents: 'npm install @capacitor/status-bar',
    link: 'https://capacitorjs.com/docs/apis/status-bar',
    date: 'Last Week',
    id: 14
  },
  {
    fromName: 'Push Notification',
    subject: `푸시 알림 API는 기본 푸시 알림에 대한 액세스를 제공합니다.`,
    contents: 'npm install @capacitor/push-notifications',
    link: 'https://capacitorjs.com/docs/apis/push-notifications',
    date: 'Last Week',
    id: 15
  }
];

export const getMessages = () => messages;
export const getMessage = (id: number) => messages.find(m => m.id === id);