### typescript로 DI 구현 연습 목적


### 모듈 설치

```
npm i -g typescript
npm i express 
```

### type definition 패키지 설치
```
npm i -D @types/node @types/express
```

### TypeScript 컴파일 옵션 설정
```
tsc --init
```

### package.json에 typescript 빌트 및 실행 스크립트 작성
```
"script": {
  "start": "tsc && node dist/server/index.js
}
```
