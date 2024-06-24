module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            // 여기에 추가적인 컬러 설정을 할 수 있습니다.
            // 예시: 새로운 색상 추가
            darkGray: '#333333',
        },
        textColor: {
          // dark 모드에서 텍스트 색상 설정
          dark: '#ffffff', // 예시로 흰색으로 설정
      },
    },
},
variants: {
    extend: {
        // 여기에 추가적인 variant 설정을 할 수 있습니다.
        // 예시: 배경색에 dark 클래스 적용 시 어두운 배경색으로 설정
        backgroundColor: ['dark'],
        textColor: ['white'],
    },
},
  plugins: [],
}