
#### 公式ドキュメント
https://nextjs-ja-translation-docs.vercel.app/

#### 構成
- SSG + Pre-fetch

- [getStaticProps](https://reffect.co.jp/react/next-js#getStaticProps)
  - 

#### create project
```bash
$ npx create-next-app . --use-npm
```

#### install
  * tailwindcss
    https://nerdcave.com/tailwind-cheat-sheet
    
    ```bash
        $ npm i tailwindcss

        $ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

        $ npx tailwindcss init -p
    ```

### npm 
  * dev
    ```bash
      $ npm run build # デバッグモード
    ```
  * build
    ```bash
      $ npm run build # nextjsで作成されたファイルをhtml展開
    ```
     
  * start

    ```bash
      $ npm start # server 起動
    ```


### deloping 
[NextJs Document](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy)

*アカウント作成*
https://vercel.com/

1. Create a Team
   1. Skip
1. Configure Project
   1. FRAMEWORK PRESET:Next.js
   1. Build and Output Settings:設定不要
   1. Environment Variables：設定不要


![deloping01](md_img\01.PNG)
![deloping02](md_img\02.PNG)
![deloping03](md_img\03.PNG)
![deloping04](md_img\04.PNG)