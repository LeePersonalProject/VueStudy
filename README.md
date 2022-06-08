# capacitor-hanwha-tutorial



## Clevers

```bash
npm install 
npx cap sync
```

## Run

web
```bash
ionic serve
```

device
```bash
npx cap run ios
npx cap run android
```

## Config
Fix "capacitor.config.json"
<docgen-index>

```json
"server": {
    	"url": "url",
    	"cleartext": true
  	}
```

## Android 
안드로이드 에뮬레이터 실행시 이슈 
1. 안드로이드 에뮬레이터 host 파일 접근하기 위해서는 쓰기모드로 실행해야 함.
2. npx cap run android 으로 실행시에는 쓰기모드 실행불가하여 호스트 파일접근 안됨
3. 그래서 개발서버 접근시 ip로 접근할 수 있도록 서버쪽 개발진행 해야 함.  

</docgen-index>