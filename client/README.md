## Structure of src

pages
  profile
  tweet //single tweet
  timeline
  settings
  ...
components //depended by two or more pages
  common 
  recommended  // 単一コンポーネントからしか参照されないものはできるだけ中に入れてしまう作戦→必要に応じて後から切り出して共通化
    recommendedPart1
    recommendedPart2
  
  
