# Cinemasunshine Jobs Application

## Getting Started

### 言語

実態としては、linuxあるいはwindows上でのNode.js。プログラミング言語としては、TypeScript。

* [TypeScript](https://www.typescriptlang.org/)

### 開発方法

npmでパッケージをインストール。

```shell
npm install
```

* [npm](https://www.npmjs.com/)

typescriptをjavascriptにコンパイル。

```shell
npm run build
```

### Environment variables

| Name                                      | Required              | Value               | Purpose                                    |
| ----------------------------------------- | --------------------- | ------------------- | ------------------------------------------ |
| `DEBUG`                                   | false                 | sskts-jobs:*        | Debug                                      |
| `NPM_TOKEN`                               | true                  |                     | NPM auth token                             |
| `NODE_ENV`                                | true                  |                     | environment name                           |
| `MONGOLAB_URI`                            | true                  |                     | MongoDB connection URI                     |
| `SENDGRID_API_KEY`                        | true                  |                     | SendGrid API Key                           |
| `SSKTS_DEVELOPER_EMAIL`                   | true                  |                     | 開発者通知用メールアドレス                 |
| `DEVELOPER_LINE_NOTIFY_ACCESS_TOKEN`      | true                  |                     | 開発者LINE通知アクセストークン             |
| `LINE_NOTIFY_URL`                         | true                  |                     | https://notify-api.line.me/api/notify      |
| `GMO_ENDPOINT`                            | true                  |                     | GMO API endpoint                           |
| `GMO_SITE_ID`                             | true                  |                     | GMO SiteID                                 |
| `GMO_SITE_PASS`                           | true                  |                     | GMO SitePass                               |
| `COA_ENDPOINT`                            | true                  |                     | COA API endpoint                           |
| `COA_REFRESH_TOKEN`                       | true                  |                     | COA API refresh token                      |
| `REDIS_HOST`                              | true                  |                     | Redis Cache host                           |
| `REDIS_PORT`                              | true                  |                     | Redis Cache port                           |
| `REDIS_KEY`                               | true                  |                     | Redis Cache key                            |
| `LENGTH_IMPORT_SCREENING_EVENTS_IN_WEEKS` | true                  |                     | 上映イベントを何週間後までインポートするか |
| `WEBSITE_NODE_DEFAULT_VERSION`            | only on Azure WebApps |                     | Node.js version                            |
| `WEBSITE_TIME_ZONE`                       | only on Azure WebApps | Tokyo Standard Time |                                            |
| `WEBJOBS_ROOT_PATH`                       | only on Azure WebApps | dst/jobs            |                                            |
| `PECORINO_API_ENDPOINT`                   | true                  |                     | PecorinoAPIエンドポイント                  |
| `PECORINO_AUTHORIZE_SERVER_DOMAIN`        | true                  |                     | Pecorino認可サーバードメイン               |
| `PECORINO_API_CLIENT_ID`                  | true                  |                     | PecorinoAPIクライアントID                  |
| `PECORINO_API_CLIENT_SECRET`              | true                  |                     | PecorinoAPIクライアントシークレット        |
| `AWS_ACCESS_KEY_ID`                       | true                  |                     | AWSアクセスキー                            |
| `AWS_SECRET_ACCESS_KEY`                   | true                  |                     | AWSシークレットアクセスキー                |
| `COGNITO_USER_POOL_ID`                    | true                  |                     | CognitoユーザープールID             ID     |

## tslint

コード品質チェックをtslintで行う。

* [tslint](https://github.com/palantir/tslint)
* [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib)

`npm run check`でチェック実行。

## clean

`npm run clean`で不要なソース削除。

## Test

`npm test`でテスト実行。
