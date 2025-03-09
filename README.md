# 🤖 chat HHJ

Next.js App router를 이용해 chatGPT를 클론한 웹사이트입니다.

## 🚀 배포 링크

- [chat HHJ 바로가기](https://nextjs-chatgpt-clone-ebon.vercel.app/)

## 📂 프로젝트 개요

- chatGPT API를 사용해 챗봇 기능을 구현하였습니다.
- 대화는 사이드바에 추가되며, 대화 제목을 수정하거나 대화를 삭제할 수 있습니다.
- chatGPT API를 이용할 때, GPT-3.5 Turbo, GPT-4, GPT-4o 3가지 모델 중 선택할 수 있습니다.

## 🛠️ 기술 스택

- Frontend: Next.js
- Backend: ChatGPT API, Neon
- Deployment: Vercel

## ✨ 기능

- 회원가입
  ![회원가입 시연](https://github.com/user-attachments/assets/ab818699-e325-403f-8e0f-b43c5e8d1320)

  - 이름, 이메일, 비밀번호를 입력 받습니다.
  - 이름은 문자만 가능하며, 비밀번호는 대문자/소문자/숫자/특수문자를 각각 하나 이상 포함한 8자리 이상이어야 합니다.
  - 이미 존재하는 회원일 경우 회원가입이 불가능합니다.

- 로그인
  ![로그인 시연](https://github.com/user-attachments/assets/d775f955-a7b0-4e96-abc4-99ee76896e24)

  - 이메일, 비밀번호를 입력 받습니다.
  - 회원가입 되지 않은 이메일을 입력할 경우 존재하지 않는 사용자라는 문구가 뜹니다.
  - 비밀번호가 일치하지 않을 경우 일치하지 않는다는 문구가 뜹니다.

- 채팅
  ![채팅 시연](https://github.com/user-attachments/assets/00224abd-dafa-4dc5-ae0e-cccb747f01c0)

  - 입력창을 통해 AI와 채팅을 할 수 있습니다.
  - 회원가입 시 입력한 이름이 뜨고, chat HHJ가 답변을 해줍니다.
  - 첫 채팅을 입력하면 사이드바의 대화 목록에 해당 대화가 추가됩니다.
  - 사이드바의 새로운 대화 버튼을 누르면 새로운 대화를 시작할 수 있습니다.
  - 채팅 내용은 DB에 저장되어 로그인 후 언제든 확인 가능합니다.
  - `GPT-3.5 Turbo`, `GPT-4`, `GPT-4o` 3가지 모델 중 선택할 수 있습니다.

- 대화 수정 및 삭제
  ![대화 수정 및 삭제 시연](https://github.com/user-attachments/assets/a0f0fe78-8806-4d25-aacd-7868a23b86e5)

  - 대화 목록 중 마우스를 올린 대화에는 … 아이콘이 나타납니다.
  - Edit 버튼을 누르면 대화 목록에 나타나는 대화 제목을 수정할 수 있습니다.
  - Delete 버튼을 누르면 대화 목록에서 해당 대화를 삭제합니다. 해당 대화에 포함된 채팅들도 DB에서 모두 삭제됩니다.

- 반응형 UI
  ![반응형](https://github.com/user-attachments/assets/5f37e09d-f577-4781-9140-35ed2493a9f7)

  - 큰 화면(PC)에서는 왼쪽에 사이드바가 항상 나타납니다.
  - 작은 화면(모바일)에서는 채팅 화면만 표시되며, 왼쪽 상단의 메뉴 버튼을 누르면 사이드바가 표시됩니다.
